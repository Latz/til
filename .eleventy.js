const moment = require("moment");
const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale("en");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("dateIso", date => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return moment(date).format("LL"); // E.g. May 31, 2019
  });
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(pluginRss);
};
