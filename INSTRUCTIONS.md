# FAMBO DEMO APPLICATION
_Using react and electron_

### UP & RUNNING
* Run `npm install`

**FOR DEVELOPMENT**
* Run `npm run dev` to fire up Webpack
* In another terminal window run `npm start` to start electron

**FOR PRODUCTION**
* Run `npm run postinstall` to compile all your assets into `dist/bundle.js`
* Change the script tag in `dist/index.html` to use `bundle.js` as its source
* Remove jquery tags from script: add Electron jquery mechanism
* Run `npm start` to start electron
