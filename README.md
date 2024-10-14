# Gijs Laarman's Styleguide

Inspired by Vercel's styleguide: https://github.com/vercel/style-guide but less strict.
For personal use, feel free to fork it.

## Usage

### Adding ESLint

1. Install ESLint:

```bash
npm install eslint --save-dev
```

### Adding Prettier

1. Install Prettier:

```bash
npm install prettier --save-dev
```

2. Add prettier to your package.json

```json
{
  "prettier": "@gijslaarman/styleguide/prettier"
}
```

### Adding TypeScript Configuration

1. Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

2. Install TypeScript:

```bash
npm install typescript --save-dev
```
