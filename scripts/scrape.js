const scrapeIt = require('scrape-it');
const db = require('../models/');

const Scrape = () => {
  scrapeIt('https://soundmindinvesting.com/articles', {
    articles: {
      listItem: '.article',
      data: {
        title: {
          selector: 'a',
          how: 'html',
        },
        summary: {
          selector: '.article-body',
          how: 'html',
        },
        link: {
          selector: 'a',
          attr: 'href',
        },
      },
    },
  }, (err, { data }) => {
    console.log(err || data);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.articles.length; i++) {
      const simpleData = data.articles[i];
      db.Headline.create({
        title: simpleData.title,
        summary: simpleData.summary,
        link: simpleData.link,
      });
    }
  });
};

module.exports = Scrape;
