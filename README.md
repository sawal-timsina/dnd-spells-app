# Dungeons and Dragons 5th Edition Spells App

<div align="center">

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)](https://react-query-v3.tanstack.com/)  
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org) 
[![MUI](https://img.shields.io/badge/mui-blue)](https://mui.com/) 
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)

</div>

## Overview

This Markdown file provides documentation for the Dungeons and Dragons 5th Edition Spells App, which integrates with the
Dungeons and Dragons 5th Edition Spells API. This app is designed to help players and Dungeon Masters access information
about spells available in the 5th edition of the popular tabletop role-playing game, Dungeons and Dragons (D&D).

## 🚀 Demo
<a href="https://dnd-spells-app.vercel.app/" target="blank">
<img src="https://app.statuscake.com/button/index.php?Track=9424765&Days=3&Design=6" />
</a>

Try the app: [Dungeons And Dragons](https://dnd-spells-app.vercel.app)

## 🧐Features

The Dungeons and Dragons 5th Edition Spells App provides the following features:

1. Displays a list of all spells
2. Allow the user to view information related to each spell
3. Allow the user to add & remove spells from a list of favourites
4. Allow the user to view list of spells marked as favourites
5. Allow the user to view their list of previously favourited spells after returning back to the app after closing

## 🗂️ Folder Structure

    ├── public/                          # Public assets and entry point for the app.
    ├── styles/                          # CSS stylesheets used for styling the app.
    ├── src/                             # Source code of the app.
    │   ├── components/                  # Reusable components used throughout the app.
    │   │   ├── atoms                    # Reusable atom level components
    │   │   ├── molecules                # Reusable molecules level components
    │   │   │   ├── __tests__            # Automated test files for molecules
    │   │   ├── organisms                # Reusable organisms level components
    │   │   │   ├── __tests__            # Automated test files for organisms
    │   ├── pages/                       # This folder contains the components that represent different pages of the app
    │   ├── services/                    # API services
    │   ├── hooks/                       # Custom hooks 
    │   │   ├── __tests__                # Automated test files hooks
    │   ├── states/                      # Global states used in this app 
    │   ├── utills/                      # utilities such as Axios instance, local storage
    |   │   ├── __tests__                # Automated test files for utility functions
    └── README.md                        # 

## Getting Started

Follow these instructions to set up and use the Dungeons and Dragons 5th Edition Spells App.

### Prerequisites

- Node.js and npm installed on your computer.
- A code editor (e.g., Visual Studio Code).

## 🛠️ Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sawal-timsina/dnd-spells-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dnd-spells-app
   ```

3. Install the required dependencies:

   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and set the following environment variable:

   ```
   NEXT_PUBLIC_APP_API_URL=https://www.dnd5eapi.co
   ```

5. Start the application:

   ```bash
   yarn dev
   ```

The app should now be running locally on `http://localhost:5001`.

## 🧪 Test with Jest


Run all the test
```bash
yarn test
```

Run test coverage
```bash
yarn test:coverage
```
