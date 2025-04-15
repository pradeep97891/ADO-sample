/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse10Icon(props: Ellipse10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.065 30.68A81.5 81.5 0 011.617 45.94L.215 9.292A44.825 44.825 0 0024.66.9l21.405 29.78z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse10Icon;
/* prettier-ignore-end */
