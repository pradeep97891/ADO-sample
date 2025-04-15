/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle292IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle292Icon(props: Rectangle292IconProps) {
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

      <path d={"M46.963 0H0v9.665h46.963V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Rectangle292Icon;
/* prettier-ignore-end */
