# Contilio - Cubes

This project contains a SPA written in TypeScript, tackling 2 given tasks included in the [PDFs of given tasks](./doc).

The auto generated jsDoc can be accessed here - [TypeDoc](./jsdoc/index.html)

Solution to the ThreeJS task can be found here - [cube.html](./public/cube.html).  It is also linked via an iframe within the react application.

## Development

### `npm start`

In the project directory, you can run with a basic express server serving
the data.json as an API.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm dev`

Alternatively running in client mode would not load json file, this can probably be achieve by changing the fetch url to the assets folder.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `docker-compose up`

You can also run the server mode through docker-compose.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
