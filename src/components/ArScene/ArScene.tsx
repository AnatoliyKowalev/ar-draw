import React, { type FC } from "react";
import { useBoard } from "../../hooks/useBoard";

const ArScene: FC = () => {
  const { img, imgW, imgH, config } = useBoard();

  return (
    <a-scene>
      <a-marker preset="hiro">
        {img ? (
          <a-image
            id="ar-image"
            src={img}
            width={`${imgW}`}
            height={`${imgH}`}
            position={`${config.x} ${config.z} ${config.y}`}
            rotation={`${config.rotX} ${config.rotZ} ${config.rotY}`}
            opacity={config.opacity}
            scale={`${config.scale} ${config.scale} ${config.scale}`}
          ></a-image>
        ) : null}
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ArScene;
