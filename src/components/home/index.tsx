import SideBar from "../common/SideBar";
import {
  DownloadButton,
  RootContainer,
  TreeCapture,
  TreeContainer,
} from "./style";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "./style.css";
import HTMLCodeEditor from "../common/HTMLCodeEditor";
import Tree from "react-d3-tree";
import useStore from "../../store/store";
import { useRef, useState } from "react";
import { EOrientation, EPathFunc } from "../../enum/sidebar.enum";
import html2canvas from "html2canvas";

const Home = () => {
  const { domTree } = useStore();
  const treeRef = useRef<HTMLDivElement>(null);

  const [orientation, setOrientation] = useState<EOrientation>(
    EOrientation.VERTICAL
  );
  const [pathFunc, setPathFunc] = useState<EPathFunc>(EPathFunc.STEP);
  const [nodeSize, setNodeSize] = useState<{ x: number; y: number }>({
    x: 150,
    y: 150,
  });

  const downloadPNG = () => {
    if (treeRef.current) {
      html2canvas(treeRef.current, { scale: 8 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "dom-tree.png";
        a.click();
      });
    }
  };

  return (
    <RootContainer>
      <Splitter
        style={{
          width: "100%",
          height: "100%",
        }}
        layout="horizontal"
      >
        <SplitterPanel size={20} minSize={17}>
          <SideBar
            orientation={orientation}
            setOrientation={setOrientation}
            setPathFunc={setPathFunc}
            nodeSize={nodeSize}
            setNodeSize={setNodeSize}
          />
        </SplitterPanel>
        <SplitterPanel size={35} minSize={0}>
          <HTMLCodeEditor />
        </SplitterPanel>
        <SplitterPanel size={45} minSize={0}>
          <TreeContainer>
            <TreeCapture ref={treeRef}>
              <Tree
                data={domTree}
                rootNodeClassName="node__root"
                branchNodeClassName="node__branch"
                orientation={orientation}
                pathFunc={pathFunc}
                nodeSize={nodeSize}
                zoom={0.7}
                translate={{
                  x: 329,
                  y: 120,
                }}
              />
            </TreeCapture>
            <DownloadButton variant="contained" onClick={downloadPNG}>
              Download PNG
            </DownloadButton>
          </TreeContainer>
        </SplitterPanel>
      </Splitter>
    </RootContainer>
  );
};

export default Home;
