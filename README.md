# Allstars

[![GitHub](https://img.shields.io/github/license/mcvanhassel/allstars)](LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_allstars&metric=alert_status)](https://sonarcloud.io/dashboard?id=mcvanhassel_allstars)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_allstars&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=mcvanhassel_allstars)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mcvanhassel_allstars&metric=security_rating)](https://sonarcloud.io/dashboard?id=mcvanhassel_allstars)

A modern Angular application showcasing the 1998 NBA All-Star Game, built with Angular 21+ standalone components, signals, and strict TypeScript.

🚀 **[Live Demo](https://all-star-98.web.app/)**

## Tech Stack

- **Angular 21** - Standalone components with signal inputs
- **TypeScript 5.9** - Strict mode enabled
- **RxJS 7** - Reactive programming
- **Jest** - Unit testing with @ngneat/spectator
- **ESLint 9** - Comprehensive linting with Angular-specific rules
- **Prettier** - Code formatting
- **Firebase Hosting** - Deployment

## Features

- ✅ 100% standalone components (no NgModules)
- ✅ Signal inputs and computed signals
- ✅ OnPush change detection everywhere
- ✅ Dependency injection with `inject()` function
- ✅ Strict TypeScript configuration
- ✅ Comprehensive ESLint rules (TypeScript, Angular, A11y, Import ordering)
- ✅ Auto-formatting with Prettier
- ✅ Modern testing with Jest

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

## Available Scripts

### Development
- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production

### Testing
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ci` - Run tests in CI mode

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript compiler checks

## Project Structure

```
src/
├── app/
│   ├── core/           # Core services and utilities
│   │   ├── domain/     # Domain models and services
│   │   └── utils/      # Utility functions
│   └── features/       # Feature modules
│       └── game/       # Game feature with components
├── assets/             # Static assets and data
└── environments/       # Environment configurations
```

## Code Quality

This project follows Angular best practices:

- **OnPush Change Detection** - All components use OnPush for optimal performance
- **Signal Inputs** - Modern reactive inputs with `input()` and `computed()`
- **Strict TypeScript** - Full strict mode with additional compiler options
- **Import Organization** - Automatic import ordering and combining
- **Accessibility** - ESLint rules for a11y compliance
- **Testing** - Comprehensive unit tests with high coverage

## Contributing

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Conventional Commits** for commit messages

All code is automatically formatted and linted on save.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Angular 21
