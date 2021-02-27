const {query} = require('./graphql');
const fetch = require('node-fetch');
const {writeFileSync} = require('fs');
require('dotenv').config()

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

const query_contentful = async () => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CONTENTFUL_DELIVERY_API}`,
    },
    body: JSON.stringify({query}),
  });
  const {data, error} = await res.json();
  data.pageCollection.items.map(({pageName, sectionsCollection}) => {
    generate_json(pageName, sectionsCollection.items);
  });
};

const generate_json = (pageName, items) => {
  const normalized_items = items.map((item) => {
    const {contentCollection, ...info} = item;
    const content = contentCollection.items.map((T) => {
      if (T.block) { return T; }
      else if (T.content) { return { list: T }; }
      else if (T.linksCollection) { return { links: T.linksCollection.items } }
      else if (T.image) { return { image: T.image.url } }
    })
    return {...info, content}
  });
  writeFileSync(`${__dirname}/../src/assets/content/${pageName}-test.json`,
    JSON.stringify(normalized_items, null, 2));
};

query_contentful();
