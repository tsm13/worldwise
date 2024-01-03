# WolrdWise: an interactive Travel Diary app!

Original project designed by [Jonas Schmedtmann](https://github.com/jonasschmedtmann), as part of his [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). I followed his design and built this project to practice core React concepts.

## Live Version

Available [here on Netlify](https://worldwise-tsm13.netlify.app/).

### Project Features

- Users can pick a location on the map, or let the app pick their location based on their current coordinates.
- The app saves each chosen city and displays them in a list.

### Main technical concepts applied in this project:

- State management with `useReducer` and `Context API`.
- `React Router` library was used for routing throughout the app.
- `useCallback` to memoize functions.
- `CSS modules` library was used for styling the app.

### Notes

- This project has a simple, fake Auth screen that is pre-filled for development purposes. It's not fully integrated with a database, although the data itself comes from a mock database.
- The map used in this app was built with the [Leaflet API](https://react-leaflet.js.org/).
- The app was built with Vite.
- This project is not optimized for small screens, since the main goal was to practice React/JS features.
