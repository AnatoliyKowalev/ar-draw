import React, { type FC } from "react";

import ArScene from "../ArScene";
import { BoardProvider } from "../../contexts/boardContext";
import Controls from "../Controls";

const Board: FC = () => {
  return (
    <BoardProvider>
      <ArScene />
      <Controls />
    </BoardProvider>
  );
};

export default Board;
