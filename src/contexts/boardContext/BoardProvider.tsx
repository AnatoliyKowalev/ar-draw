import { useState, type FC } from "react";
import { BoardContext } from "./BoardContext";
import { DEFAULT_CONFIG } from "./constants";
import type { BoardProviderProps, TypeConfig } from "./interfaces";

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
  const [img, setImg] = useState<string | null>(null);
  const [imgW, setImgW] = useState(1);
  const [imgH, setImgH] = useState(1);
  const [config, setConfig] = useState<TypeConfig>(DEFAULT_CONFIG);

  return (
    <BoardContext.Provider
      value={{
        img,
        imgW,
        imgH,
        config,
        setImg,
        setImgW,
        setImgH,
        setConfig,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
