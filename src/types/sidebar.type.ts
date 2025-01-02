import { EOrientation, EPathFunc } from "../enum/sidebar.enum";

export interface SideBarProps {
  orientation: EOrientation;
  setOrientation: React.Dispatch<React.SetStateAction<EOrientation>>;
  setPathFunc: React.Dispatch<React.SetStateAction<EPathFunc>>;
  nodeSize: { x: number; y: number };
  setNodeSize: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}
