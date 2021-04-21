const plugins = [
  [
    "import",
    {
      libraryName: "element-plus",
      customStyleName: (name) => {
        return `element-plus/lib/theme-chalk/${name}.css`;
      },
    },
  ],
];
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins,
};
