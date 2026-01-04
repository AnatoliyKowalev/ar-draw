import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface BoardContextType {
  img: null | string;
  imgW: number;
  imgH: number;
  config: TypeConfig;
  // changeConfig: (value: Partial<TypeConfig>) => void;
  setConfig: Dispatch<SetStateAction<TypeConfig>>;
  setImg: (value: null | string) => void;
  setImgW: (value: number) => void;
  setImgH: (value: number) => void;
}

export type TypeConfig = {
  scale: number;
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  opacity: number;
};

export interface BoardProviderProps {
  children: ReactNode;
}
