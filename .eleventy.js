// const markdownIt = require("markdown-it");
// const md = new markdownIt({
//   html: true,
//   breaks: true,
//   linkify: true
// });

// var implicitFigures = require('markdown-it-implicit-figures');

// md.use(implicitFigures, {
//   dataType: false,  // <figure data-type="image">, default: false
//   figcaption: false,  // <figcaption>alternative text</figcaption>, default: false
//   tabindex: true, // <figure tabindex="1+n">..., default: false
//   link: false // <a href="img.png"><img src="img.png"></a>, default: false
// });


module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addWatchTarget("assets/css");
    eleventyConfig.addPassthroughCopy("assets/scripts");
    // eleventyConfig.addFilter("markdown", (content) => {
    //   return md.render(content);
    // });
};