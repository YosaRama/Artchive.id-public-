## Getting Started

1. Run the installation:

```bash
yarn install .
```

2. Make sure your computer have MySQL server running on `port:3306`, `username : root`, and `password : root`, then run database migration with this script:

```bash
yarn prisma migrate dev
```

3. Run development on local:

```bash
yarn dev
```

## Naming Convention

- Themes
  - Components
    - Container : ThemesContainer[ContainerName]
    - Libs : Themes[ComponentName]
  - Contents
    - [FileName] : ThemesContents[FileName]
- Pages
  - [PagesNames] : Page[PagesNames]
- App
  - Components
    - Container : AppContainer[ContainerName]
    - Libs : App[ComponentName]
  - Contents
    - [FileName] : AppContents[FileName]
