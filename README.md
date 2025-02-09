# Music Library - Micro Frontend (MFE)

## Overview

The **Music Library** is a micro frontend that provides a fully interactive music browsing experience. It is dynamically loaded into the **Core App** using **Module Federation (Vite)**.

## Features

- Displays a **sortable, filterable, and groupable** list of songs
- Uses **JavaScript array methods (`map`, `filter`, `reduce`)** for manipulation
- Supports **sorting by Title, Artist, Album**
- Supports **grouping by Artist or Album**
- Uses **React Suspense** for lazy loading
- **100%+ unit test coverage** with Vitest & React Testing Library

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Varun-Sangwan/Music-Library-MFE
   cd music-library
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
3. Then, start the micro frontend App:
   ```sh
   npm run dev
   ```

## Running Tests & Coverage

```sh
npx vitest
npx vitest --coverage
```

## Micro Frontend Integration

Exposes MusicLibrary to the Core App:

```sh
exposes: {
"./MusicLibrary": "./src/MusicLibrary"
}
```

## Tech Stack

**Frontend**: React, TypeScript

**State Management**: React Hooks

**Micro Frontend**: Vite + Module Federation

**Testing**: Vitest, React Testing Library
