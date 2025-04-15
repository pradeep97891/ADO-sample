/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _03B5E9F825IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _03B5E9F825Icon(props: _03B5E9F825IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24.6v17.69H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _03B5E9F825Icon;
/* prettier-ignore-end */
