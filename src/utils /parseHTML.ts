import { DOMNode } from "../types/dom.typs";

export const parseHTML = (html: string): DOMNode => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const parseNode = (node: Node): DOMNode | null => {
    if (node.nodeType === 3) {
      const textContent = node.textContent?.trim();
      if (!textContent) return null;

      return {
        name: "text",
        attributes: { text: textContent },
        children: [],
      };
    }

    if (node.nodeType === 1) {
      const element = node as Element;
      const nodeName = element.nodeName.toLowerCase();

      if (nodeName === "style" || nodeName === "script") {
        return {
          name: node.nodeName.toLowerCase(),
          children: [],
        };
      }

      const attributes = Array.from(element.attributes).reduce(
        (acc, attr) => ({ ...acc, [attr.name]: attr.value }),
        {}
      );

      return {
        name: node.nodeName.toLowerCase(),
        attributes,
        children: Array.from(node.childNodes)
          .map(parseNode)
          .filter((child): child is DOMNode => child !== null),
      };
    }

    return null;
  };

  const domTreePart = parseNode(doc.documentElement);
  if (!domTreePart) throw new Error("Failed to parse HTML");

  const domTree: DOMNode = {
    name: "Document",
    attributes: {},
    children: [domTreePart],
  };
  return domTree;
};
