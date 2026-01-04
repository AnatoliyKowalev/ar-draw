import { type FC } from "react";

import ArScene from "../ArScene";
import Controls from "../Controls";
import { BoardProvider } from "../../contexts/boardContext/BoardProvider";

const Board: FC = () => {
  return (
    <BoardProvider>
      <ArScene />
      <Controls />
    </BoardProvider>
  );
};

export default Board;
