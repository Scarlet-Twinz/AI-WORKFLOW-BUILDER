Remove-Python-compiled-files.ps1
# Script to remove Python bytecode files from the repository and local working tree
Get-ChildItem -Path . -Include *.pyc -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue
Get-ChildItem -Path . -Include __pycache__ -Recurse | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
