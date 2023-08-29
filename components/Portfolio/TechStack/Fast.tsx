import { SVGProps } from "react";

const FastSvg = ({ stroke, ...props }: SVGProps<SVGSVGElement>) => {
  if (!stroke) stroke = "#231f20";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 10"
      viewBox="0 0 800 800"
      {...props}
    >
      <path
        d="M600.51 400c0 110.74-89.77 200.51-200.51 200.51S199.49 510.74 199.49 400 289.26 199.49 400 199.49 600.51 289.26 600.51 400ZM394.19 539.93c.22.06.44.13.67.19 31.41-56.51 62.81-113.01 94.47-169.98h-88.77c2.71-37.52 5.39-74.69 8.07-111.86-.22-.03-.45-.07-.67-.1-31.1 56.53-62.2 113.06-93.55 170.04 29.55.49 58.59.97 87.84 1.45-2.71 37.11-5.38 73.69-8.06 110.26Z"
        style={{
          fill: "#06998c",
          stroke: stroke,
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

export default FastSvg;
