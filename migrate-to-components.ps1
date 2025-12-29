# Header & Footer Unified Management - Batch Migration Script
# Migrate existing pages to the new component system

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Header & Footer Unified Management" -ForegroundColor Cyan
Write-Host "Batch Migration Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get all tool directories (exclude special directories)
$excludeDirs = @('assets', 'node_modules', '.git', 'test-components')
$toolDirs = Get-ChildItem -Directory | Where-Object { 
    $_.Name -notin $excludeDirs -and 
    $_.Name -notlike '_*' -and 
    $_.Name -notlike '.*' 
}

Write-Host "Found $($toolDirs.Count) tool directories" -ForegroundColor Green
Write-Host ""

# Ask user for confirmation
$confirm = Read-Host "Do you want to start migration? This will modify all tool page HTML files. (y/n)"
if ($confirm -ne 'y' -and $confirm -ne 'Y') {
    Write-Host "Migration cancelled" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "Starting migration..." -ForegroundColor Cyan
Write-Host ""

$migratedCount = 0
$skippedCount = 0
$errorCount = 0

foreach ($dir in $toolDirs) {
    $indexPath = Join-Path $dir.FullName "index.html"
    
    if (-not (Test-Path $indexPath)) {
        Write-Host "  [SKIP] $($dir.Name): index.html not found" -ForegroundColor Yellow
        $skippedCount++
        continue
    }
    
    try {
        # Read file content
        $content = Get-Content $indexPath -Raw -Encoding UTF8
        
        # Check if already migrated
        if ($content -match 'assets/js/components\.js') {
            Write-Host "  [SKIP] $($dir.Name): already migrated" -ForegroundColor Yellow
            $skippedCount++
            continue
        }
        
        # Backup original file
        $backupPath = "$indexPath.backup"
        Copy-Item $indexPath $backupPath -Force
        
        # 1. Remove Header HTML (using multiline regex)
        $content = $content -replace '(?s)<header class="border-b.*?</header>\s*', ''
        
        # 2. Remove Footer HTML
        $content = $content -replace '(?s)<footer class="border-t.*?</footer>\s*', ''
        
        # 3. Remove theme toggle logic
        $content = $content -replace '(?s)// === Theme Logic ===.*?(?=// ===|\s*</script>)', ''
        $content = $content -replace '(?s)// === Dark Mode Logic ===.*?(?=// ===|\s*</script>)', ''
        
        # 4. Add component script before </body>
        $componentScript = @"
    <!-- Unified Component Management (Header + Footer + Theme) -->
    <script src="../assets/js/components.js"></script>

    <!-- Tool-specific Logic -->
"@
        
        # If there's already a <script> tag, insert before the first <script>
        if ($content -match '<script>') {
            $content = $content -replace '(\s*)<script>', "$componentScript`n`$1<script>"
        }
        # Otherwise insert before </body>
        else {
            $content = $content -replace '(\s*)</body>', "$componentScript`n`$1</body>"
        }
        
        # Clean up extra blank lines
        $content = $content -replace '(\r?\n){3,}', "`n`n"
        
        # Save modified file
        Set-Content $indexPath -Value $content -Encoding UTF8 -NoNewline
        
        Write-Host "  [DONE] $($dir.Name)" -ForegroundColor Green
        $migratedCount++
    }
    catch {
        Write-Host "  [ERROR] $($dir.Name): $($_.Exception.Message)" -ForegroundColor Red
        # Restore backup
        if (Test-Path $backupPath) {
            Copy-Item $backupPath $indexPath -Force
            Remove-Item $backupPath -Force
        }
        $errorCount++
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Migration Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Successfully migrated: $migratedCount pages" -ForegroundColor Green
Write-Host "  Skipped: $skippedCount pages" -ForegroundColor Yellow
Write-Host "  Errors: $errorCount pages" -ForegroundColor Red
Write-Host ""

if ($migratedCount -gt 0) {
    Write-Host "Backup files saved with .backup extension" -ForegroundColor Cyan
    Write-Host "Please test a few pages in browser to confirm everything works" -ForegroundColor Cyan
    Write-Host "After confirmation, you can delete all .backup files" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Command to delete backup files:" -ForegroundColor Yellow
    Write-Host "  Get-ChildItem -Recurse -Filter '*.backup' | Remove-Item" -ForegroundColor Gray
}

Write-Host ""
