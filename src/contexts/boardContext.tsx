import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface BoardContextType {
  img: null | string;
  imgW: number;
  imgH: number;
  config: TypeConfig;
  changeConfig: (value: Partial<TypeConfig>) => void;
  setImg: (value: null | string) => void;
  setImgW: (value: number) => void;
  setImgH: (value: number) => void;
}

type TypeConfig = {
  scale: number;
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  opacity: number;
};

export const DEFAULT_CONFIG = {
  scale: 1,
  x: 0,
  y: 0,
  z: 0,
  rotX: -90,
  rotY: 0,
  rotZ: 0,
  opacity: 0.8,
};

const BoardContext = createContext<BoardContextType | null>(null);

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider: React.FC<BoardProviderProps> = ({ children }) => {
  const [img, setImg] = useState<null | string>(null);
  const [imgW, setImgW] = useState<number>(1);
  const [imgH, setImgH] = useState<number>(1);
  const [config, setConfig] = useState<TypeConfig>(DEFAULT_CONFIG);

  const changeConfig = useCallback(
    (newConfig: Partial<TypeConfig>) =>
      setConfig((prev) => ({ ...prev, ...newConfig })),
    [config]
  );

  return (
    <BoardContext.Provider
      value={{
        config,
        img,
        imgW,
        imgH,
        setImg,
        setImgW,
        setImgH,
        changeConfig,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};
