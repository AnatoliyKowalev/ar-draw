import { type FC } from "react";
import { useBoard } from "../../hooks/useBoard";

const ArScene: FC = () => {
  const { img, imgW, imgH, config } = useBoard();

  return (
    <a-scene
      // embedded
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      arjs="
      trackingMethod: best;
      debugUIEnabled: false;
      "
      //  sourceType: webcam;
      // sourceWidth: 1280;
      //   sourceHeight: 720;
      //   displayWidth: 1280;
      //   displayHeight: 720;
    >
      <a-marker
        preset="hiro"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5"
      >
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
      <a-entity camera look-controls="enabled: false"></a-entity>
    </a-scene>
  );
};

export default ArScene;
