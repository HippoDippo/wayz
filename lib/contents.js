module.exports = {

webpackContents:

`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};`,

babelContents:

`{
  "presets": [
    "env", "react"
  ]
}`,

indexHTMLcontents:

`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Wayz</title>
  </head>
  <body>
    <div id="root">

    </div>
  </body>
</html>
`,

indexJScontents:

`import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));
`,

appJScontents:

`import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Wayz to go! :)</Header>
      </div>
    );
  }
}

export default App;
`,

indexCSScontents:

`body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
`,

appCSScontents:

`.App {
  text-align: center;
}
`,

headerComponentJScontents:

`import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="Header">
      <h1 className="Header-title">{props.children}</h1>
    </header>
  );
}

export default Header;
`,

headerComponentCSScontents:

`.Header {
  height: 150px;
  padding: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #24292e;
  color: #fff;
}

.Header-title {
  font-size: 2.3em;
}
`
}