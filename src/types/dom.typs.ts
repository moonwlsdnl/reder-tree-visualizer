export interface DOMNode {
  name: string;
  attributes?: Record<string, string | number | boolean>;
  children: DOMNode[];
}

export interface DOMTreeStore {
  domTree: DOMNode;
  setDOMTree: (newTree: DOMNode) => void;
}

export const initialDOMTree: DOMNode = {
  name: "Document",
  attributes: {},
  children: [
    {
      name: "html",
      attributes: {
        lang: "en",
      },
      children: [
        {
          name: "head",
          attributes: {},
          children: [
            {
              name: "meta",
              attributes: {
                charset: "utf-8",
              },
              children: [],
            },
            {
              name: "link",
              attributes: {
                rel: "icon",
                href: "favicon.ico",
              },
              children: [],
            },
            {
              name: "title",
              attributes: {},
              children: [
                {
                  name: "text",
                  attributes: {
                    text: "DOM Tree Visualizer",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "body",
          attributes: {},
          children: [
            {
              name: "div",
              attributes: {
                id: "root",
              },
              children: [
                {
                  name: "text",
                  attributes: {
                    text: "Hello World",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
