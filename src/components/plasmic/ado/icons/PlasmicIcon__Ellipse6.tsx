/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse6Icon(props: Ellipse6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 96 111"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M67.885 109.601A55.506 55.506 0 0114.94 93.383a55.5 55.5 0 0180.82-76.085l-4.573 4.34a49.196 49.196 0 10-24.709 81.817l1.407 6.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse6Icon;
/* prettier-ignore-end */
