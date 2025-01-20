import { PropsWithChildren } from "react";

const HeroOrbitComponent = ({
  children,
  size = 100,
  rotation = 0,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start "
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex "
          style={{
            transform: `rotate(${rotation * -1}deg )`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbitComponent;
