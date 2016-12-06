module.exports = {
  entry: {
    app: "./entry.js",
    static: "./about.js"
  },
  output: {
    path: __dirname + "/build/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: /node_modlues/, loader: "babel-loader" }
    ]
  }
}