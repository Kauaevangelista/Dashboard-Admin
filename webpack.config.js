module.exports = {
  entry: {
    index: "./src/js/index.js",
    orders: "./src/js/orders.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].min.js",
  },
};
