import { useState } from "react";
import { DOMNode } from "../types/dom.typs";
import { parseHTML } from "../utils /parseHTML";

const useHTMLParser = (initialHTML: string) => {
  const [editorValue, setEditorValue] = useState<string>(initialHTML);
  const [domTree, setDomTree] = useState<DOMNode | null>(
    parseHTML(initialHTML)
  );

  const updateDOMTree = (html: string) => {
    setEditorValue(html);
    const parsedTree = parseHTML(html);
    setDomTree(parsedTree);
  };

  return {
    editorValue,
    domTree,
    updateDOMTree,
  };
};

export default useHTMLParser;
