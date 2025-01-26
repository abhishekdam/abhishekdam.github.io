import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbitComponent = ({
  children,
  size = 100,
  rotation = 0,
  orbitDuration,
  shouldOrbit = false,
  shouldSpin,
  spingDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spingDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start "
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spingDuration,
            }}
          >
            {" "}
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
      </div>
    </div>
  );
};

export default HeroOrbitComponent;
