# Podcast App Challenge

The Podcast App is a web application that allows users to search for and listen to podcasts available on iTunes. It's built using React and TypeScript, and use Axios for fetching data from the iTunes API. Material-UI is used for a modern and responsive user interface.

## Demo

https://podcast-app-xi.vercel.app

## Features

- **Search Podcasts**: Users can search for podcasts by entering keywords in the search bar. The app will display relevant results from the iTunes API.

- **Podcast Episodes**: Once selected a podcast, the app lists the episodes in a user-friendly and responsive format. Users can see details such as episode title, topic and released.

- **Audio Player**: Users can click on a podcast or an episode to start playing it. The audio player should display details and allow users to listen to the selected episode.

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static types.
- Axios: Promise-based HTTP client for making API requests.
- Material-UI: React UI framework for building modern, responsive designs.

## Folder Structure

- `src/`: Contains the main source code for the application.
- `assets/`: Static assets such as images and icons.
- `components/`: Reusable React components used throughout the app.
- `constants/`: Constants used in the application.
- `api/`: API service functions using Axios for data fetching.
- `context/`: React context providers for global state management.
- `hooks/`: Custom hooks used across the app.
- `models/`: TypeScript interfaces and models.
- `pages/`: Top-level pages/routes of the application.
- `views/`: Higher-level components that combine smaller components for specific views.

## Getting Started

Follow these steps to get the project up and running on your local machine:

**Clone the Repository**: Clone this repository to your local machine using the following command and navigate to the project directory:

```bash
  git clone https://github.com/elisagc/podcast_app.git
  cd podcast_app
```

**Install Dependencies**: Install the necessary dependencies using the following command:

```bash
  yarn install
```

**Run the App**: Start the development server by running the following command:

```bash
  yarn start
```

**Open your web browser** and visit `http://localhost:3000` to access the Podcast App.
