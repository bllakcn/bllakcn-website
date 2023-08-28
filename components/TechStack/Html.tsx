import { SVGProps } from "react";

const HtmlSvg = ({ stroke, ...props }: SVGProps<SVGSVGElement>) => {
  if (!stroke) stroke = "#231f20";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 800 800"
      {...props}
    >
      <path
        d="M401.38 199.32H222.3l20.42 213.45h158.66v-70.98H308.6l-8.17-72h100.95v-70.47zM401.38 525.62l-79.51-21.45-4.08-55.66h-73.02l10.72 112.34L400 600.68l1.38-.38v-74.68z"
        style={{
          fill: "#e54f27",
        }}
      />
      <path
        d="M577.7 199.32H222.3l20.42 213.45h246.64l-8.68 91.4-79.3 21.45-79.51-21.45-4.08-55.66h-73.02l10.72 112.34L400 600.68l146.55-40.85 18.9-218.04H308.6l-8.17-72h271.14l6.13-70.47zM401.38 199.32v70.47M401.38 341.79v70.98M401.38 525.62 400 600.68"
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

export default HtmlSvg;
