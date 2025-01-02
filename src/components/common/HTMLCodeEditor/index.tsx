import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-terminal";
import { EditorContainer } from "./style";
import useStore from "../../../store/store";
import useHTMLParser from "../../../hooks/\buseHTMLParser";
import { useEffect } from "react";

const HTMLCodeEditor = () => {
  const { setDOMTree } = useStore();
  const { editorValue, domTree, updateDOMTree } = useHTMLParser(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <title>DOM Tree Visualizer</title>
  </head>
  <body>
    <div id="root">Hello World</div>
  </body>
</html>`);

  const handleEditorChange = (newValue: string) => {
    updateDOMTree(newValue);
  };

  useEffect(() => {
    if (domTree !== null) {
      setDOMTree(domTree);
    }
  }, [domTree, setDOMTree]);

  return (
    <EditorContainer>
      <AceEditor
        style={{ borderRadius: "3px" }}
        onChange={handleEditorChange}
        value={editorValue}
        width="100%"
        height="100%"
        placeholder="Input your html code"
        mode="html"
        theme="terminal"
        fontSize={12}
        lineHeight={15}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableMobileMenu: true,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
      />
    </EditorContainer>
  );
};

export default HTMLCodeEditor;
