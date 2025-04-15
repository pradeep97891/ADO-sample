/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Clip0245136IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Clip0245136Icon(props: Clip0245136IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 123 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M123 0H0v49.903h123V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Clip0245136Icon;
/* prettier-ignore-end */
