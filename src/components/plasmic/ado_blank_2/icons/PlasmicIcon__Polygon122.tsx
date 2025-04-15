/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon122IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon122Icon(props: Polygon122IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.067.188a.5.5 0 01.78 0l2.958 3.7a.5.5 0 01-.39.812H.499a.5.5 0 01-.39-.812l2.958-3.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Polygon122Icon;
/* prettier-ignore-end */
