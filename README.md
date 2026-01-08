# chaiOrder

A TypeScript project for managing chai (tea) orders.

## Features

- Type-safe order validation
- Modular code structure
- Easy to extend for new order types

## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd chaiOrder
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Build

To compile the TypeScript code:
```
npm run build
```
This will output compiled files to the `dist` folder.

### Project Structure

- `src/` — TypeScript source files
- `dist/` — Compiled JavaScript output
- `tsconfig.json` — TypeScript configuration

### Example Usage

See `src/guards.ts` for a type guard example:
```typescript
import type { ChaiOrder } from "./types.js";

export function isChaiOrder(value: unknown): value is ChaiOrder {
    // ...implementation...
}
```

## Configuration

TypeScript is configured for strict type checking and modern module syntax.  
See `tsconfig.json` for details.

## License

MIT
