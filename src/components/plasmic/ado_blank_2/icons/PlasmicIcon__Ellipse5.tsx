/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse5Icon(props: Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 94"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.744.256A55.5 55.5 0 012.236 93.745L.903 87.583a49.195 49.195 0 0024.384-82.87L29.744.256z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
