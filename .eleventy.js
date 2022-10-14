const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(svgSprite, {
    path: "./_src/assets/icons",
    globalClasses: "icon",
  });

  eleventyConfig.addPassthroughCopy('_src/assets/css/style.css');
  eleventyConfig.addPassthroughCopy('_src/assets/icons/*.svg');

  return {
    dir: {
      input: '_src',
      output: '_site'
    }
  };
};