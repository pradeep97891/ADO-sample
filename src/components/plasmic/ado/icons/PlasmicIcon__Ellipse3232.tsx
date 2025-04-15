/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3232IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3232Icon(props: Ellipse3232IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"15.5"} cy={"15.5"} r={"15.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse3232Icon;
/* prettier-ignore-end */
