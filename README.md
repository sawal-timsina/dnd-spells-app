# Dungeons and Dragons 5th Edition Spells App

## Overview

This Markdown file provides documentation for the Dungeons and Dragons 5th Edition Spells App, which integrates with the Dungeons and Dragons 5th Edition Spells API. This app is designed to help players and Dungeon Masters access information about spells available in the 5th edition of the popular tabletop role-playing game, Dungeons and Dragons (D&D).

### Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
    - [Search for Spells](#search-for-spells)
    - [Spell Details](#spell-details)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

The Dungeons and Dragons 5th Edition Spells App provides the following features:

1. Displays a list of all spells
2. Allow the user to view information related to each spell
3. Allow the user to add & remove spells from a list of favourites
4. Allow the user to view list of spells marked as favourites
5. Allow the user to view their list of previously favourited spells after returning back to the app after closing

## Getting Started

Follow these instructions to set up and use the Dungeons and Dragons 5th Edition Spells App.

### Prerequisites

- Node.js and npm installed on your computer.
- A code editor (e.g., Visual Studio Code).

### Installation

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
   npm install
   ```

4. Create a `.env` file in the root directory and set the following environment variable:

   ```
   REACT_APP_API_BASE_URL=https://api.dnd5e-spells.com
   ```

5. Start the application:

   ```bash
   npm start
   ```

The app should now be running locally on `http://localhost:3000`.

## Usage

### Search for Spells

1. Open a web browser and navigate to `http://localhost:3000` (or the URL where you deployed the app).

2. In the search bar, enter the name of a spell or any search criteria (e.g., "Fireball" or "Level 3 Evocation").

3. Press the "Search" button.

4. The app will display a list of spells that match your search criteria.

### Spell Details

1. Click on a spell from the list of search results to view its details.

2. The app will display comprehensive information about the selected spell, including its name, level, school of magic, casting time, range, components, duration, and description.

## API Integration

The Dungeons and Dragons 5th Edition Spells App integrates with the Dungeons and Dragons 5th Edition Spells API to fetch spell data in real-time. The API is hosted at `https://api.dnd5e-spells.com` by default, but you can configure the API base URL in the `.env` file.

For API documentation and available endpoints, please refer to the official API documentation at `https://api.dnd5e-spells.com/docs`.

## Contributing

If you would like to contribute to the Dungeons and Dragons 5th Edition Spells App, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and commit them with descriptive commit messages.

5. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request from your forked repository to the main project repository.

## License

This Dungeons and Dragons 5th Edition Spells App is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.

For any questions or issues, please contact the project maintainers at [maintainer@example.com](mailto:maintainer@example.com).
