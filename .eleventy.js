module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: "views",
      output: "dist"
    }
  }
};