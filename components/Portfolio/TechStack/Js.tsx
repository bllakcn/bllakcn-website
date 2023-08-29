import { SVGProps } from "react";

const JsSvg = ({ stroke, ...props }: SVGProps<SVGSVGElement>) => {
  if (!stroke) stroke = "#231f20";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      data-name="Layer 2"
      viewBox="0 0 800 800"
      {...props}
    >
      <path
        d="m395.92 533.54-71.12-19.19-3.66-49.78h-65.32l9.6 100.48 129.26 35.63 1.24-.34v-66.8zM394.68 199.32H277.43L254 432.59h141.92V369.1h-70.05l12.01-98.36 58.04-3.13-1.24-68.29z"
        style={{
          fill: "#e5a327",
        }}
      />
      <path
        d="M531.39 199.32H277.43L254 432.59h220.61l-7.76 81.76-70.93 19.19-71.12-19.19-3.66-49.78h-65.32l9.6 100.48 129.26 35.63 131.09-36.54 16.9-195.04h-216.8l12.01-98.36 58.76-3.13 75.82 3.88 8.02 66.23H546l-14.61-138.4zM395.92 199.32v68.29M395.92 369.1v63.49M395.92 533.54l-1.24 67.14"
        style={{
          fill: "none",
          stroke: stroke,
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

export default JsSvg;
