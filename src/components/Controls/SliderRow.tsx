import React, { useCallback, type FC, type FormEvent } from "react";
import { DEFAULT_CONFIG, useBoard } from "../../contexts/boardContext";

interface SliderRowProps {
  type: TypeSlider;
  min?: string;
  max?: string;
  step?: string;
}

type TypeSlider =
  | "scale"
  | "x"
  | "y"
  | "z"
  | "rotX"
  | "rotY"
  | "rotZ"
  | "opacity";

const SliderRow: FC<SliderRowProps> = ({
  type,
  min = "-10",
  max = "10",
  step = "0.01",
}) => {
  const { config, changeConfig } = useBoard();

  const value = config[type];

  const handleChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      changeConfig({
        [type]: +e.currentTarget.value,
      });
    },
    [type]
  );

  const handleReset = useCallback(
    () =>
      changeConfig({
        [type]: DEFAULT_CONFIG[type],
      }),
    [type]
  );

  const handleIncrement = useCallback(
    () =>
      changeConfig({
        [type]: Number((config[type] + 0.1).toFixed(2)),
      }),
    [config, type]
  );

  const handleDecrement = useCallback(
    () =>
      changeConfig({
        [type]: Number((config[type] - 0.1).toFixed(2)),
      }),
    [config, type]
  );

  return (
    <div>
      <span className="capitalize">{`${type}: ${value}`}</span>
      <div>
        <input
          onInput={handleChange}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
        />
        <div className="flex items-center gap-1 [&>button]:cursor-pointer [&>button]:w-6 [&>button]:border-1">
          <button onClick={handleReset}>R</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
};

export default SliderRow;
