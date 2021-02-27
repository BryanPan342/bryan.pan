const query = `{
  pageCollection(limit: 5) {
    items {
      pageName
      sectionsCollection(limit: 10) {
        items {
          id
          heading
          description
          postDescription
          contentCollection(limit: 5) {
            items {
              ... on TextBlock {
                block
              }
            	... on TextList {
                heading
                content
                split
              }
              ... on Links {
                linksCollection(limit: 5) {
                  items {
                    link
                    description
                    graphic {
                      url
                    }
                  }
                }
              }
              ... on Image {
                alt
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}`;

module.exports = {
  query
}