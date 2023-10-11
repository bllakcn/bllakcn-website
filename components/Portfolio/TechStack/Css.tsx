"use client";

import { FC, SVGProps, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const CssSvg: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  const { theme } = useTheme();
  const [stroke, setStroke] = useState("#fff");

  useEffect(() => {
    if (theme === "light") {
      setStroke("#231f20");
    } else {
      setStroke("#fff");
    }
  }, [theme]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_3"
      data-name="Layer 3"
      viewBox="0 0 800 800"
      {...props}
    >
      <path
        d="M401.38 269.79v-70.47H222.3l6.74 70.47h172.34M401.38 525.62l-79.51-21.45-4.08-55.66h-73.02l10.72 112.34L400 600.68l1.38-.38v-74.68zM401.38 412.26v-70.47l-164.82.51 6.75 70.47"
        className="cls-2"
        style={{ fill: "#415ba9" }}
      />
      <path
        d="M577.7 199.32H222.3l6.74 70.47H498.7l-4.08 72H235.93l6.79 70.98h246.64l-8.68 91.4-79.3 21.45-79.51-21.45-4.08-55.66h-73.02l10.72 112.34L400 600.68l146.55-40.85 18.9-218.04 6.12-72 6.13-70.47zM401.38 199.32v70.47M401.38 341.79v70.98M401.38 525.62 400 600.68"
        className="cls-1"
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

export default CssSvg;
