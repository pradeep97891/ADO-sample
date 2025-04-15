/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse8Icon(props: Ellipse8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 148"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.817 6.41A81.5 81.5 0 0180.84 147.117L59.086 117.59a44.824 44.824 0 00-12.18-78.536 44.825 44.825 0 00-31.833 1.148L.817 6.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse8Icon;
/* prettier-ignore-end */
