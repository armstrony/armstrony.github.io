# 🪄 npm Magic Tricks - Complete Reference Guide

A comprehensive guide to npm's hidden features and "magical" behaviors that can supercharge your development workflow.

## Table of Contents

1. [Lifecycle Scripts Magic](#1-lifecycle-scripts-magic)
2. [Script Shortcuts & Aliases](#2-script-shortcuts--aliases)
3. [Environment Variables Magic](#3-environment-variables-magic)
4. [Script Composition Magic](#4-script-composition-magic)
5. [Config Magic](#5-config-magic)
6. [Cross-Platform Magic](#6-cross-platform-magic)
7. [Dependency Magic](#7-dependency-magic)
8. [Script Inheritance Magic](#8-script-inheritance-magic)
9. [Performance Magic](#9-performance-magic)
10. [Version & Publishing Magic](#10-version--publishing-magic)
11. [Security Magic](#11-security-magic)
12. [Advanced Script Chaining](#12-advanced-script-chaining)
13. [Pro Tips & Debugging](#13-pro-tips--debugging)
14. [Ultimate Magic Tricks](#14-ultimate-magic-tricks)

---

## 1. 🔄 Lifecycle Scripts Magic

npm automatically runs scripts with special prefixes before and after your main scripts.

### Built-in Lifecycle Hooks

```json
{
  "scripts": {
    "preinstall": "echo 'Before installing dependencies'",
    "postinstall": "echo 'After installing dependencies'",
    "preuninstall": "echo 'Before removing package'",
    "postuninstall": "echo 'After removing package'",
    "preversion": "npm test",
    "version": "npm run build && git add -A dist",
    "postversion": "git push && git push --tags",
    "prepublishOnly": "npm run build",
    "prepack": "npm run build",
    "postpack": "rm -rf dist",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "postdeploy": "echo 'Deployment complete!'"
  }
}
```

### Automatic Execution Order

When you run `npm run deploy`, npm automatically executes:

1. `predeploy` (if exists)
2. `deploy` (the script you called)
3. `postdeploy` (if exists)

### Real-World Example: Automated Versioning

```bash
npm version patch
# Automatically runs:
# 1. preversion → npm test
# 2. Updates package.json version (1.0.0 → 1.0.1)
# 3. version → npm run build && git add -A dist
# 4. postversion → git push && git push --tags
```

**One command = test, build, version bump, commit, and push!**

---

## 2. 🎯 Script Shortcuts & Aliases

### Special Script Names (No 'run' Required)

```json
{
  "scripts": {
    "start": "node server.js",
    "test": "jest",
    "stop": "killall node",
    "restart": "npm stop && npm start"
  }
}
```

**Usage:**

```bash
npm start    # Instead of npm run start
npm test     # Instead of npm run test
npm stop     # Instead of npm run stop
npm restart  # Automatically runs stop, then start
```

### Custom Shortcuts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 3. 🔍 Environment Variables Magic

npm automatically creates environment variables from your `package.json` and configuration.

### Auto-Generated Variables

```bash
# Available in all npm scripts:
$npm_package_name           # Your package name
$npm_package_version        # Your package version
$npm_package_description    # Your package description
$npm_package_author_name    # Author name
$npm_package_author_email   # Author email
$npm_config_registry        # npm registry URL
$npm_lifecycle_event        # Current script name
$npm_lifecycle_script       # Current script command
$npm_node_execpath          # Path to Node.js executable
$npm_execpath              # Path to npm executable
```

### Example Usage

```json
{
  "name": "my-awesome-app",
  "version": "1.2.3",
  "author": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "scripts": {
    "build": "echo Building $npm_package_name v$npm_package_version",
    "deploy": "docker build -t $npm_package_name:$npm_package_version .",
    "info": "echo Author: $npm_package_author_name \\<$npm_package_author_email\\>",
    "debug": "echo Running: $npm_lifecycle_event"
  }
}
```

**Output:**

```bash
npm run build
# → "Building my-awesome-app v1.2.3"

npm run info
# → "Author: John Doe <john@example.com>"
```

---

## 4. 🎪 Script Composition Magic

### Running Multiple Scripts

```json
{
  "scripts": {
    "clean": "rm -rf dist",
    "build": "webpack",
    "copy": "cp -r assets dist/",
    "test": "jest",

    // Sequential execution
    "build:full": "npm run clean && npm run build && npm run copy",

    // Parallel execution (requires npm-run-all)
    "build:parallel": "npm-run-all --parallel build copy",
    "test:all": "npm-run-all --parallel test:unit test:integration test:e2e",

    // Conditional execution
    "build:prod": "NODE_ENV=production npm run build",
    "deploy:staging": "npm run build && npm run deploy -- --env=staging"
  }
}
```

### Passing Arguments to Scripts

```bash
npm run build -- --production --verbose
# The '--' passes arguments to the underlying command

npm run deploy -- --env=production --force
# Arguments are passed to the deploy script
```

### Script Composition Patterns

```json
{
  "scripts": {
    // Watch mode
    "dev": "npm-run-all --parallel dev:*",
    "dev:server": "nodemon server.js",
    "dev:client": "vite",
    "dev:css": "tailwindcss -w",

    // Testing pipeline
    "test:ci": "npm run lint && npm run type-check && npm run test:coverage",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "playwright test",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 5. 🔧 Config Magic

### npm Configuration Sources

npm reads configuration from multiple sources (in order of priority):

1. Command line flags
2. Environment variables
3. `.npmrc` files (project, user, global)
4. Default values

### .npmrc File Magic

```bash
# .npmrc file in project root
registry=https://registry.npmjs.org/
save-exact=true
engine-strict=true
fund=false
audit-level=moderate
progress=true
```

### Environment Variables

```bash
# Available in scripts
NPM_TOKEN=your-token-here
NODE_ENV=production
npm_config_registry=https://custom-registry.com
```

### Script Access to Config

```json
{
  "scripts": {
    "deploy": "echo Deploying to $npm_config_registry",
    "env-check": "echo Environment: $NODE_ENV",
    "token-check": "echo Token set: ${NPM_TOKEN:+yes}${NPM_TOKEN:-no}"
  }
}
```

---

## 6. 🎨 Cross-Platform Magic

npm helps handle differences between operating systems.

### Platform Detection

```json
{
  "scripts": {
    "build": "npm run build:$npm_config_platform",
    "build:win32": "build.bat",
    "build:darwin": "./build.sh",
    "build:linux": "./build.sh",

    // Alternative approach
    "prebuild": "node -e \"console.log('Building on:', process.platform)\"",
    "build:cross": "cross-env NODE_ENV=production webpack"
  }
}
```

### Cross-Platform Commands

```json
{
  "scripts": {
    // Instead of rm -rf (Unix) or rmdir /s (Windows)
    "clean": "rimraf dist coverage .nyc_output",

    // Instead of cp -r (Unix) or xcopy (Windows)
    "copy": "cpy 'src/**/*.{png,jpg,svg}' dist/assets",

    // Cross-platform server
    "serve": "http-server dist -p 3000",

    // Cross-platform environment variables
    "build:prod": "cross-env NODE_ENV=production webpack",

    // Cross-platform path handling
    "build:assets": "cpy assets/**/* dist/assets --parents"
  }
}
```

### Useful Cross-Platform Packages

```bash
npm install --save-dev rimraf      # rm -rf alternative
npm install --save-dev cpy-cli     # cp alternative
npm install --save-dev cross-env   # Environment variables
npm install --save-dev npm-run-all # Run multiple scripts
```

---

## 7. 🔗 Dependency Magic

### Automatic Binary Access

When you install packages, their CLI tools become available in scripts:

```bash
npm install webpack webpack-cli
npm install jest
npm install eslint
npm install prettier
```

```json
{
  "scripts": {
    // These work automatically (from node_modules/.bin/)
    "build": "webpack --mode=production",
    "test": "jest --coverage",
    "lint": "eslint src/ --fix",
    "format": "prettier --write src/",

    // You can also be explicit
    "build:explicit": "./node_modules/.bin/webpack --mode=production"
  }
}
```

**Magic:** npm automatically adds `node_modules/.bin` to PATH during script execution.

### Package.json Binary Field

```json
{
  "name": "my-cli-tool",
  "bin": {
    "my-tool": "./bin/cli.js",
    "my-other-tool": "./bin/other.js"
  }
}
```

After `npm install`, these become available as `my-tool` and `my-other-tool`.

### npx Magic

```bash
# Run package without installing
npx create-react-app my-app
npx cowsay "Hello World"

# Run local package binary
npx webpack --version

# Run specific version
npx webpack@4 --version
```

---

## 8. 🎭 Script Inheritance Magic

### Workspace Magic (Monorepos)

```json
// Root package.json
{
  "workspaces": ["packages/*"],
  "scripts": {
    // Run in all workspaces
    "test": "npm run test --workspaces",
    "build": "npm run build --workspaces",
    "lint": "npm run lint --workspaces",

    // Run in specific workspace
    "dev:frontend": "npm run dev --workspace=frontend",
    "dev:backend": "npm run dev --workspace=backend",

    // Run multiple workspaces in parallel
    "dev": "npm-run-all --parallel dev:frontend dev:backend",

    // Conditional workspace execution
    "build:changed": "npm run build --workspaces --if-present"
  }
}
```

### Script Inheritance Patterns

```json
{
  "scripts": {
    // Base scripts
    "clean": "rimraf dist",
    "build:base": "webpack",
    "test:base": "jest",

    // Inherited/extended scripts
    "build": "npm run clean && npm run build:base",
    "build:watch": "npm run build:base -- --watch",
    "build:prod": "cross-env NODE_ENV=production npm run build",

    "test": "npm run test:base",
    "test:watch": "npm run test:base -- --watch",
    "test:ci": "npm run test:base -- --coverage --watchAll=false"
  }
}
```

---

## 9. 🚀 Performance Magic

### Caching Strategies

```bash
# Cache management
npm ci --cache /tmp/.npm-cache    # Custom cache location
npm install --prefer-offline      # Use cache first
npm install --no-audit           # Skip security audit for speed
npm install --no-fund            # Skip funding messages

# Clear cache
npm cache clean --force
npm cache verify
```

### Parallel Execution

```json
{
  "scripts": {
    // Sequential (slow)
    "test:slow": "npm run test:unit && npm run test:integration && npm run test:e2e",

    // Parallel (fast)
    "test:fast": "npm-run-all --parallel test:unit test:integration test:e2e",

    // Mixed approach
    "ci": "npm-run-all lint type-check --parallel test:unit test:integration -- test:e2e"
  }
}
```

### Performance Optimization Scripts

```json
{
  "scripts": {
    // Silent mode for cleaner output
    "build:silent": "npm run build --silent",

    // Progress indicators
    "install:progress": "npm install --progress=true",

    // Timing information
    "build:time": "time npm run build",

    // Memory usage
    "build:memory": "node --max-old-space-size=4096 node_modules/.bin/webpack"
  }
}
```

---

## 10. 🎯 Version & Publishing Magic

### Semantic Versioning Magic

```bash
npm version patch      # 1.0.0 → 1.0.1
npm version minor      # 1.0.1 → 1.1.0
npm version major      # 1.1.0 → 2.0.0
npm version prerelease # 2.0.0 → 2.0.1-0
npm version prepatch   # 2.0.1-0 → 2.0.1-1
npm version preminor   # 2.0.1-1 → 2.1.0-0
npm version premajor   # 2.1.0-0 → 3.0.0-0
```

### Publishing Workflow

```json
{
  "scripts": {
    // Pre-publish checks
    "prepublishOnly": "npm run lint && npm run test && npm run build",

    // Version management
    "preversion": "npm run test",
    "version": "npm run build && git add -A dist",
    "postversion": "git push && git push --tags && npm publish",

    // Release workflow
    "release:patch": "npm version patch",
    "release:minor": "npm version minor",
    "release:major": "npm version major",

    // Post-publish
    "postpublish": "echo 'Package published successfully!' && npm run deploy:docs"
  }
}
```

### Advanced Versioning

```json
{
  "scripts": {
    // Custom version with message
    "version:custom": "npm version patch -m 'Release version %s'",

    // Pre-release versions
    "version:alpha": "npm version prerelease --preid=alpha",
    "version:beta": "npm version prerelease --preid=beta",
    "version:rc": "npm version prerelease --preid=rc",

    // Dry run
    "version:dry": "npm version patch --dry-run"
  }
}
```

---

## 11. 🔐 Security Magic

### Automatic Security Checks

```bash
npm audit              # Check for vulnerabilities
npm audit fix          # Automatically fix issues
npm audit fix --force  # Fix with breaking changes
npm audit --audit-level moderate  # Set severity threshold
```

### Security-Focused Scripts

```json
{
  "scripts": {
    // Security checks
    "security:audit": "npm audit",
    "security:fix": "npm audit fix",
    "security:check": "npm audit --audit-level high",

    // Pre-install security
    "preinstall": "npx check-node-version --node '>= 16'",
    "postinstall": "npm audit --audit-level moderate",

    // Dependency analysis
    "deps:check": "npm outdated",
    "deps:update": "npm update",
    "deps:tree": "npm ls --depth=0"
  }
}
```

### Package Verification

```json
{
  "scripts": {
    // Verify package integrity
    "verify": "npm pack --dry-run",

    // Check for unused dependencies
    "deps:unused": "npx depcheck",

    // License checking
    "license:check": "npx license-checker --summary"
  }
}
```

---

## 12. 🎪 Advanced Script Chaining

### Complex Lifecycle Chains

```json
{
  "scripts": {
    // This creates a complex chain:
    "prebuild": "npm run clean && npm run lint",
    "build": "webpack --mode=production",
    "postbuild": "npm run test:build && npm run analyze",

    "pretest": "npm run lint:fix",
    "test": "jest --coverage",
    "posttest": "npm run coverage:report",

    "preanalyze": "npm run build",
    "analyze": "webpack-bundle-analyzer dist/stats.json"
  }
}
```

**Running `npm run build` triggers:**

```
prebuild → clean → lint → build → postbuild → test:build → analyze → preanalyze → build (again) → analyze
```

### Conditional Script Execution

```json
{
  "scripts": {
    // Only run if files exist
    "test:unit": "[ -d tests/unit ] && jest tests/unit || echo 'No unit tests found'",

    // Environment-based execution
    "build": "if [ \"$NODE_ENV\" = \"production\" ]; then npm run build:prod; else npm run build:dev; fi",

    // Platform-specific
    "install:deps": "node -e \"process.platform === 'win32' ? require('child_process').exec('npm run install:windows') : require('child_process').exec('npm run install:unix')\""
  }
}
```

---

## 13. 🔍 Pro Tips & Debugging

### Debugging npm Scripts

```bash
# Verbose output
npm run build --verbose
npm run build --loglevel verbose

# See what npm is doing
npm run build --dry-run

# Debug specific issues
npm config list                    # See all configuration
npm config get registry           # Get specific config
npm ls                           # See dependency tree
npm ls --depth=0                 # Top-level dependencies only

# Script debugging
npm run --silent build           # Suppress npm output
npm run build 2>&1 | tee build.log  # Log output to file
```

### Useful Debug Scripts

```json
{
  "scripts": {
    // Environment debugging
    "debug:env": "node -e \"console.log(process.env)\" | grep npm",
    "debug:config": "npm config list",
    "debug:paths": "node -e \"console.log('PATH:', process.env.PATH.split(':').join('\\n'))\"",

    // Package debugging
    "debug:deps": "npm ls --depth=0",
    "debug:outdated": "npm outdated",
    "debug:audit": "npm audit --json",

    // Performance debugging
    "debug:timing": "npm run build --timing",
    "debug:memory": "node --trace-gc node_modules/.bin/webpack"
  }
}
```

### Script Documentation

```json
{
  "scripts": {
    // Self-documenting scripts
    "help": "echo 'Available commands:' && npm run | grep -E '^  [a-zA-Z]' | sed 's/^  /  npm run /'",

    "info": "echo 'Package: $npm_package_name v$npm_package_version' && echo 'Node: '$(node -v) && echo 'npm: '$(npm -v)",

    "scripts:list": "node -e \"console.log(Object.keys(require('./package.json').scripts).join('\\n'))\"",

    // Command explanations
    "explain:build": "echo 'Builds the project for production using webpack'",
    "explain:test": "echo 'Runs all tests with coverage reporting'"
  }
}
```

---

## 14. 🤯 Ultimate Magic Tricks

### Self-Modifying Scripts

```json
{
  "scripts": {
    // Update package.json version in script
    "bump": "node -e \"const pkg=require('./package.json'); pkg.version=process.argv[1]; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2))\" && git add package.json",

    // Add new script dynamically
    "add-script": "node -e \"const pkg=require('./package.json'); pkg.scripts[process.argv[1]]=process.argv[2]; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2))\"",

    // Generate scripts from templates
    "generate:test": "node scripts/generate-test-script.js"
  }
}
```

### Meta Scripts

```json
{
  "scripts": {
    // Run all scripts matching pattern
    "run:all:test": "npm run | grep 'test:' | awk '{print $1}' | xargs -I {} npm run {}",

    // Measure script execution time
    "time:build": "node -e \"console.time('build'); require('child_process').execSync('npm run build', {stdio:'inherit'}); console.timeEnd('build')\"",

    // Conditional script runner
    "maybe:test": "node -e \"Math.random() > 0.5 ? require('child_process').execSync('npm test', {stdio:'inherit'}) : console.log('Skipped tests this time!')\""
  }
}
```

### Advanced Automation

```json
{
  "scripts": {
    // Complete CI/CD pipeline
    "ci": "npm ci && npm run lint && npm run type-check && npm run test:coverage && npm run build && npm run test:e2e",

    // Development setup
    "setup": "npm install && npm run build && npm run db:migrate && npm run db:seed && echo 'Setup complete!'",

    // Maintenance tasks
    "maintenance": "npm update && npm audit fix && npm run test && npm run build",

    // Release pipeline
    "release": "npm run ci && npm run version:patch && npm run build && npm publish && npm run deploy",

    // Emergency rollback
    "rollback": "git revert HEAD && npm run build && npm run deploy"
  }
}
```

---

## 🎓 Summary

npm is much more than a package manager - it's a complete automation platform with:

- **Automatic lifecycle hooks** that run before/after your scripts
- **Environment variable injection** from package.json and config
- **Cross-platform compatibility** helpers
- **Built-in binary access** for installed packages
- **Workspace management** for monorepos
- **Security and performance** optimizations
- **Version management** and publishing workflows

### Key Takeaways

1. **Use lifecycle scripts** (`pre*`, `post*`) for automatic setup/cleanup
2. **Leverage environment variables** for dynamic script behavior
3. **Compose scripts** for complex workflows
4. **Use cross-platform tools** for compatibility
5. **Debug with verbose flags** when things go wrong
6. **Document your scripts** for team collaboration

### Next Steps

- Experiment with lifecycle scripts in your projects
- Set up cross-platform development scripts
- Create a comprehensive CI/CD pipeline using npm scripts
- Explore workspace features for multi-package projects

---

_Happy scripting! 🚀_

---

## Additional Resources

- [npm Scripts Documentation](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [npm Config Documentation](https://docs.npmjs.com/cli/v8/using-npm/config)
- [npm Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
- [Semantic Versioning](https://semver.org/)
