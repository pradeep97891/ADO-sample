/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path47792IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path47792Icon(props: Path47792IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.963 9.668H0V.763A.769.769 0 01.245.216.795.795 0 01.813 0h45.34a.805.805 0 01.567.216.78.78 0 01.246.547v8.905h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path47792Icon;
/* prettier-ignore-end */
