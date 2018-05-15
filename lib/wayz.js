/*!
 * wayz
 * Copyright(c) 2018 Kaycee William Ingram
 * MIT Licensed
*/

// Node fs Library and command line arg.
const fs = require('fs');
const dir = process.argv[2];
const chalk = require('chalk');

// Load file contents.
const webpackContents = require('./contents').webpackContents;
const babelContents = require('./contents').babelContents;
const indexHTMLcontents = require('./contents').indexHTMLcontents;
const indexJScontents = require('./contents').indexJScontents;
const indexCSScontents = require('./contents').indexCSScontents;
const appJScontents = require('./contents').appJScontents;
const appCSScontents = require('./contents').appCSScontents;
const headerComponentJScontents = require('./contents').headerComponentJScontents;
const headerComponentCSScontents = require('./contents').headerComponentCSScontents;
const packageJSONcontents =
`
{
    "name": "${dir}",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest",
      "start": "webpack-dev-server",
      "build": "webpack"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "react": "^16.3.2",
      "react-dom": "^16.3.2",
      "react-router-dom": "^4.2.2"
    },
    "devDependencies": {
      "babel-core": "^6.26.0",
      "babel-loader": "^7.1.4",
      "babel-preset-env": "^1.6.1",
      "babel-preset-react": "^6.24.1",
      "css-loader": "^0.28.11",
      "file-loader": "^1.1.11",
      "html-webpack-plugin": "^3.2.0",
      "jest": "^22.4.3",
      "path": "^0.12.7",
      "style-loader": "^0.21.0",
      "webpack": "^4.6.0",
      "webpack-cli": "^2.0.14",
      "webpack-dev-server": "^3.1.3"
    }
  }
`;

//-------------------------------------------------------
// File and Folder functions.
//-------------------------------------------------------

const createFile = (filename, contents) => {
  fs.writeFile(`./${dir}/${filename}`, contents, (err, data) => {
    if (err)
      throw "Error: " + err;
  });
}

const createFolder = (folder) => {
    if (!fs.existsSync(`./${dir}/${folder}`))
      fs.mkdirSync(`./${dir}/${folder}`);
};

const createNestedSrcFiles = (filename, contents) => {
  fs.writeFile(`./${dir}/src/${filename}`, contents, (err, data) => {
    if (err)
      throw "Error: " + err;
  });
};

const createNestedSrcFolders = (folder) => {
  if (!fs.existsSync(`./${dir}/src/${folder}`))
    fs.mkdirSync(`./${dir}/src/${folder}`);
};

const createNestedPublicFiles = (filename, contents) => {
  fs.writeFile(`./${dir}/public/${filename}`, contents, (err, data) => {
    if (err)
      throw "Error: " + err;
  });
}

const createNestedSrcComponentFolders = (folder) => {
  if (!fs.existsSync(`./${dir}/src/components/${folder}`))
    fs.mkdirSync(`./${dir}/src/components/${folder}`);
};

const createNestedSrcComponentFiles = (folderName, filename, contents) => {
  fs.writeFile(`./${dir}/src/components/${folderName}/${filename}`, contents, (err, data) => {
    if (err)
      throw "Error: " + err;
  });
};

//-------------------------------------------------------
//-------------------------------------------------------



//-------------------------------------------------------
// Wrapper function that creates the entire project.
//-------------------------------------------------------
const createProject = () => {
  // Create package.json file.
  createFile('package.json', packageJSONcontents);

  // Create Webpack config file.
  createFile('webpack.config.js', webpackContents);

  // Create Babel config file.
  createFile('.babelrc', babelContents);

  // Create src folder.
  createFolder('src');

  // Create public folder.
  createFolder('public');

  // Create nested src files.
  createNestedSrcFiles('index.js', indexJScontents);
  createNestedSrcFiles('index.css', indexCSScontents);
  createNestedSrcFiles('App.js', appJScontents);
  createNestedSrcFiles('App.css', appCSScontents);

  // Create nested src dir.
  createNestedSrcFolders('components');
  createNestedSrcFolders('img');

  // Create nested public files.
  createNestedPublicFiles('index.html', indexHTMLcontents);

  // Create nested src component folders.
  createNestedSrcComponentFolders('Header');

  // Create nested src component files.
  createNestedSrcComponentFiles('Header', 'Header.js', headerComponentJScontents);
  createNestedSrcComponentFiles('Header', 'Header.css', headerComponentCSScontents);

  console.log(chalk.green(`React Project ${dir} Created!`));
};

module.exports = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);

    createProject();
  }
};