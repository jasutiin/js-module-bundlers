# Learning ESBuild

ESBuild is used in Vite for bundling up your application into a single `.js` file that the browser can use. In `package.json` we have node scripts for building the application, watching for changes, and serving the application to a local and network server.

`npm run build`: takes all the source code and bundles it into one `js` file inside the `dist/` directory.

`npm run watch`: listens for any new changes inside the `src/` directory

`npm run serve`: "hosts" the application on localhost or on the network

You need to run `npm run serve` in one terminal to actually see the application on your browser through localhost, and then run `npm run watch` in another terminal so that ESBuild automatically builds your application whenever changes occur. This means that you can see changes take place when you refresh your browser.
