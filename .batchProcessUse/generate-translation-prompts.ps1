# generate-translation-prompts.ps1
# Batch generate prompts referencing external rules

# Configuration
$batchSize = 3
$outputFile = "translation-prompts-batch.txt"
$rulesFile = "@hi_trans_rules.md" # 引用你的规则文件

# Scan tools (Excluding system folders and existing 'hi' folder)
$tools = Get-ChildItem -Directory | 
    Where-Object { 
        $_.Name -notin @('assets', 'test-components', 'hi', 'node_modules', '.git') -and 
        (Test-Path "$($_.FullName)\index.html")
    } | 
    Sort-Object Name | 
    Select-Object -ExpandProperty Name

Write-Host "Found $($tools.Count) tools to translate`n" -ForegroundColor Cyan

# Generate batches
$batches = [Math]::Ceiling($tools.Count / $batchSize)
$output = @()

for ($i = 0; $i -lt $batches; $i++) {
    $start = $i * $batchSize
    $end = [Math]::Min($start + $batchSize - 1, $tools.Count - 1)
    $batchTools = $tools[$start..$end]
    
    # 生成文件引用
    $toolPaths = $batchTools | ForEach-Object { "@$($_)/index.html" }
    
    # 生成预期结果列表（方便你核对）
    $checkList = $batchTools | ForEach-Object { "✅ hi/$($_)/index.html created" }
    
    # 极简 Prompt：核心全靠规则文件
    $prompt = @"
==================== Batch $($i + 1)/$batches ====================

Please execute the localization task according to the rules defined in $rulesFile.

**Source Files:**
$($toolPaths -join "`n")

**Action:**
Create the Hindi version for these tools in the /hi/ directory following all STRICT rules in $rulesFile.

[Output Verification]
$($checkList -join "`n")

"@
    
    $output += $prompt
}

$output | Out-File $outputFile -Encoding UTF8
Write-Host "Saved $batches batches to $outputFile" -ForegroundColor Green