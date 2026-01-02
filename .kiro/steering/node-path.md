---
inclusion: always
---

# Node.js Path Configuration

This workspace uses nvm-windows for Node.js version management. The Node.js binaries are NOT in the default system PATH for shell commands.

## Required Command Pattern

**ALWAYS prefix npm/node commands with the PATH setup:**

```powershell
$env:Path = "C:\Users\reser\AppData\Local\nvm\v23.11.0;$env:Path"; <your-command>
```

## Examples

```powershell
# Running tests
$env:Path = "C:\Users\reser\AppData\Local\nvm\v23.11.0;$env:Path"; npm run test -- --run path/to/test.ts

# Type checking
$env:Path = "C:\Users\reser\AppData\Local\nvm\v23.11.0;$env:Path"; npm run check

# Linting
$env:Path = "C:\Users\reser\AppData\Local\nvm\v23.11.0;$env:Path"; npm run lint

# Any npm command
$env:Path = "C:\Users\reser\AppData\Local\nvm\v23.11.0;$env:Path"; npm <command>
```

## DO NOT USE

- `cmd /c npm ...` - npm is not in cmd's PATH
- `npm run ...` directly - npm is not in PowerShell's PATH
- `npx ...` - same issue

## Why This Happens

The user has nvm-windows installed at `C:\Users\reser\AppData\Local\nvm\` but the symlink directory `C:\nvm4w\nodejs` doesn't exist or isn't properly configured. The actual Node.js v23.11.0 installation is at `C:\Users\reser\AppData\Local\nvm\v23.11.0\`.
