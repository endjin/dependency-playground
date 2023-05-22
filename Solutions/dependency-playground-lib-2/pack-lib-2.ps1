$here = Split-Path -Parent $PSCommandPath
$version = "3.0.5"

dotnet pack -p:Version=$version
$package = Get-ChildItem $here/bin/Debug/dependency-playground-lib-2*.nupkg | Select-Object -Last 1

Write-Host "Publishing package to feed: $($package.FullName)"
# nuget push $($package.FullName) -Source "https://www.myget.org/F/rs-test-feed/api/v2/package"
nuget push $($package.FullName) -Source https://api.nuget.org/v3/index.json
