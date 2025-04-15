/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarIcon(props: CalendarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8.143 2.571V1.286M3.857 2.571V1.286"}
        stroke={"currentColor"}
        strokeWidth={"1.029"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M1.286 4.286h9.428"}
        stroke={"currentColor"}
        strokeWidth={"1.029"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={"M10.714 2.571H1.286v7.715h9.428V2.57z"}
        stroke={"currentColor"}
        strokeWidth={"1.029"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default CalendarIcon;
/* prettier-ignore-end */
