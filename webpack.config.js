module.exports = [
  () => ({
    entry: "./src/entry1.js",
  }),
  () => ({
    entry: "./src/entry2.js",
  }),
];

// This works:
// module.exports = () => ({
//   entry: "./src/entry1.js",
// });

// This also works:
// module.exports = [
//   {
//     entry: "./src/entry1.js",
//   },
//   {
//     entry: "./src/entry2.js",
//   },
// ];
