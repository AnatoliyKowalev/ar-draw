import React, { type FC } from "react";
import SliderRow from "./SliderRow";
import { useBoard } from "../../hooks/useBoard";

const Controls: FC = () => {
  const { img, setImg, setImgW, setImgH } = useBoard();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const src = event.target?.result;
      if (!src) return;

      setImg(src as string);

      const img = new Image();
      img.src = src as string;

      img.onload = () => {
        const aspect = img.width / img.height;

        setImgH(1);
        setImgW(aspect);

        //     const arImage = document.getElementById("ar-image") as any;
        // if (!arImage) return;

        // const mesh = arImage.getObject3D("mesh");
        // if (mesh) {
        //   mesh.material.map.needsUpdate = true;
        // }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      id="controls"
      className="fixed bottom-0 left-0 w-full px-5 py-2 bg-white shadow-lg rounded-t-[10px] flex gap-4 items-center justify-center [&>label]:cursor-pointer overflow-auto"
    >
      {img ? (
        <>
          <SliderRow type="scale" min="1" max="50" />
          <SliderRow type="x" min="-10" max="10" />
          <SliderRow type="y" min="-20" max="20" />
          <SliderRow type="z" min="-10" max="10" />
          <SliderRow type="opacity" min="0" max="1" />
          <SliderRow type="rotX" min="-180" max="180" />
          <SliderRow type="rotY" min="-180" max="180" />
          <SliderRow type="rotZ" min="-180" max="180" />

          {/* <label>
            Opacity: <span id="opacity-value">0.8</span>
            <div className="slider-row">
              <button
                className="step-btn"
                data-target="opacity-slider"
                data-dir="-"
              >
                −
              </button>
              <input
                type="range"
                id="opacity-slider"
                min="0"
                max="1"
                step="0.01"
                value="0.8"
              />
              <button
                className="step-btn"
                data-target="opacity-slider"
                data-dir="+"
              >
                +
              </button>
            </div>
          </label>  */}
        </>
      ) : (
        <label className="font-bold text-[green] text-center">
          Pick image
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default Controls;
