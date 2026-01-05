import { type ChangeEvent, type FC } from "react";
import SliderRow from "./SliderRow";
import { useBoard } from "../../hooks/useBoard";

const Controls: FC = () => {
  const { img, setImg, setImgW, setImgH } = useBoard();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      className="fixed bottom-0 left-0 w-full px-5 py-2 bg-white rounded-t-[10px] flex gap-4 items-center justify-center [&>label]:cursor-pointer overflow-auto shadow-[0_4px_30px_-10px_rgba(0,0,0,0.45)]"
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
        </>
      ) : (
        <label className="">
          <div className="font-bold text-center flex items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 text-zinc-500 transition-colors duration-200 px-4 py-2">
            Pick image
          </div>
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
