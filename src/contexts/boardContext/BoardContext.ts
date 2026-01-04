import { createContext } from "react";
import type { BoardContextType } from "./interfaces";

export const BoardContext = createContext<BoardContextType | null>(null);
