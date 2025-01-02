import { create } from "zustand";
import { DOMNode, DOMTreeStore, initialDOMTree } from "../types/dom.typs";

const useStore = create<DOMTreeStore>((set) => ({
  domTree: initialDOMTree,
  setDOMTree: (newTree: DOMNode) => set({ domTree: newTree }),
}));

export default useStore;
