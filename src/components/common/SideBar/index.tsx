import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import {
  SideBarContainer,
  SubTitle,
  TitleBox,
  Title,
  ControllContainer,
  ControllTitle,
  PathFucWrap,
  OutLiendButton,
  NodeSizeWrap,
  Pos,
} from "./style";
import { SideBarProps } from "../../../types/sidebar.type";
import { EOrientation, EPathFunc } from "../../../enum/sidebar.enum";

const SideBar = ({
  orientation,
  setOrientation,
  setPathFunc,
  nodeSize,
  setNodeSize,
}: SideBarProps) => {
  const handleOrientationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrientation(event.target.value as EOrientation);
  };

  const handlePathFuncChange = (newFunc: EPathFunc) => {
    setPathFunc(newFunc);
  };

  const handleNodeSizeXChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) return;
    setNodeSize({ ...nodeSize, x: newValue });
  };

  const handleNodeSizeYChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) return;
    setNodeSize({ ...nodeSize, y: newValue });
  };

  return (
    <SideBarContainer>
      <TitleBox>
        <Title>DOM Tree Visualizer</Title>
        <SubTitle>by Moon jin wi - @moonwlsdnl</SubTitle>
      </TitleBox>
      <ControllContainer>
        <ControllTitle style={{ marginBottom: "15px" }}>
          Orientation
        </ControllTitle>
        <RadioGroup value={orientation} onChange={handleOrientationChange}>
          <FormControlLabel
            value="vertical"
            control={<Radio />}
            label="Vertical"
          />
          <FormControlLabel
            value="horizontal"
            control={<Radio />}
            label="Horizontal"
          />
        </RadioGroup>
      </ControllContainer>

      <ControllContainer>
        <ControllTitle>Path Function</ControllTitle>
        <PathFucWrap>
          <OutLiendButton
            variant="outlined"
            onClick={() => handlePathFuncChange(EPathFunc.STEP)}
          >
            Step
          </OutLiendButton>
          <OutLiendButton
            variant="outlined"
            onClick={() => handlePathFuncChange(EPathFunc.DIAGONAL)}
          >
            Diagonal
          </OutLiendButton>
          <OutLiendButton
            variant="outlined"
            onClick={() => handlePathFuncChange(EPathFunc.STRAIGHT)}
          >
            Straight
          </OutLiendButton>
          <OutLiendButton
            variant="outlined"
            style={{ width: "100%" }}
            onClick={() => handlePathFuncChange(EPathFunc.ELBOW)}
          >
            Elbow
          </OutLiendButton>
        </PathFucWrap>
      </ControllContainer>

      <ControllContainer>
        <ControllTitle style={{ marginBottom: "15px" }}>
          Node Size
        </ControllTitle>
        <NodeSizeWrap>
          <Pos>X</Pos>
          <Slider
            value={nodeSize.x}
            onChange={handleNodeSizeXChange}
            min={50}
            max={500}
            step={10}
            valueLabelDisplay="auto"
          />
          <Pos>Y</Pos>
          <Slider
            value={nodeSize.y}
            onChange={handleNodeSizeYChange}
            min={50}
            max={500}
            step={10}
            valueLabelDisplay="auto"
          />
        </NodeSizeWrap>
      </ControllContainer>
    </SideBarContainer>
  );
};

export default SideBar;
