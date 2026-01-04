import { useContext } from "react";
import type { BoardContextType } from "../contexts/boardContext/interfaces";
import { BoardContext } from "../contexts/boardContext/BoardContext";

export const useBoard = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};
