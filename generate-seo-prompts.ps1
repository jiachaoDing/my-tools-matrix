# generate-seo-prompts.ps1
# Batch generate SEO optimization prompts

# Configuration
$batchSize = 5  # Number of files per batch
$outputFile = "seo-prompts-batch.txt"

# Scan all tool folders
$tools = Get-ChildItem -Directory | 
    Where-Object { 
        $_.Name -notin @('assets', 'test-components') -and 
        (Test-Path "$($_.FullName)\index.html")
    } | 
    Sort-Object Name |  # Sort alphabetically
    Select-Object -ExpandProperty Name

Write-Host "Found $($tools.Count) tools to optimize`n" -ForegroundColor Cyan

# Generate prompts in batches
$batches = [Math]::Ceiling($tools.Count / $batchSize)
$output = @()

for ($i = 0; $i -lt $batches; $i++) {
    $start = $i * $batchSize
    $batchTools = $tools[$start..([Math]::Min($start + $batchSize - 1, $tools.Count - 1))]
    
    $toolPaths = $batchTools | ForEach-Object { "@$_/index.html" }
    $checkList = $batchTools | ForEach-Object { "√ $_ optimized" }
    
    $prompt = @"
==================== Batch $($i + 1)/$batches ====================

Please apply the SEO configuration from @SEO_RULES.md to the following tools:

$($toolPaths -join "`n")

**Action Requirements:**
1. **REPLACE** existing <title> and <meta name="description"> with the optimized versions.
2. **ENSURE** <link rel="canonical" ...> is present (add if missing).
3. **ADD** the JSON-LD script block before </head>.
4. **CHECK** that CSS link is /assets/css/styles.css (fix if it's CDN).

[Output Format] Only output modification confirmation, do not repeat file content:
$($checkList -join "`n")


"@
    
    $output += $prompt
    
    # Console preview
    Write-Host "Batch $($i + 1): " -NoNewline -ForegroundColor Yellow
    Write-Host "$($batchTools -join ', ')" -ForegroundColor White
}

# Save to file with UTF8 encoding
$output | Out-File $outputFile -Encoding UTF8

Write-Host "`nGenerated $batches batches of prompts" -ForegroundColor Green
Write-Host "Saved to: $outputFile" -ForegroundColor Cyan
Write-Host "`nHow to use:" -ForegroundColor Yellow
Write-Host "  1. Open $outputFile" 
Write-Host "  2. Switch to Cursor Agent mode"
Write-Host "  3. Copy and execute each batch prompt"
Write-Host "  4. Start new chat after each batch completes`n"