### **README for `music-library` (Micro Frontend)**

#### **File: `music-library/README.md`**

````md
# 🎼 Music Library - Micro Frontend (MFE) 🎼

## Overview

The **Music Library** is a micro frontend that provides a fully interactive music browsing experience. It is dynamically loaded into the **Core App** using **Module Federation (Vite)**.

## Features

- Displays a **sortable, filterable, and groupable** list of songs
- Uses **JavaScript array methods (`map`, `filter`, `reduce`)** for manipulation
- Supports **sorting by Title, Artist, Album**
- Supports **grouping by Artist or Album**
- Uses **React Suspense** for lazy loading
- Fully tested with Jest & React Testing Library

## Folder Structure

music-library/ │── src/ │ ├── components/ # Song List, Filters │ ├── data/ # Songs Data │ ├── pages/ # Music Library Page │ ├── styles/ # UI Styling │ ├── App.tsx # Root Component │ ├── main.tsx # React Entry Point │── vite.config.ts # Module Federation Config │── package.json # Dependencies & Scripts │── README.md # Project Documentation

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/music-library.git
   cd music-library
   ```

2. Install dependencies:
   npm install
3. Then, start the micro frontend App:
   npm run dev

## Running Tests & Coverage

npx vitest
npx vitest --coverage

## Micro Frontend Integration

Exposes MusicLibrary to the Core App:

exposes: {
"./MusicLibrary": "./src/MusicLibrary"
}

## Tech Stack

Frontend: React, TypeScript, Tailwind CSS
State Management: React Hooks
Micro Frontend: Vite + Module Federation
Testing: Vitest, Jest, React Testing Library
````
