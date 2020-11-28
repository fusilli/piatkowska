const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addShortcode("foto", (src, alt = "") => {
    return `<img class="my-10" src="/img/${src}.jpg" srcset="/img/${src}-xs.jpg 450w, /img/${src}.jpg 896w, /img/${src}-xl.jpg 1792w" sizes="(min-width: 896px) 896px, 100vw" alt="${ alt ? `${alt}` : ``}" loading="lazy">`;
  });

  eleventyConfig.addFilter("cudzyslowy", require("./utils/cudzyslowy.js") );
  eleventyConfig.addFilter("sierotki", require("./utils/sierotki.js") );
  

  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./utils/minify-html.js") );
  }

  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");

  return  {
    passthroughFileCopy: true,
    templateFormats : ["njk", "md", "css"],
    markdownTemplateEngine : "njk"
  };

};
