/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3230IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3230Icon(props: Ellipse3230IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <ellipse
        cx={"12.991"}
        cy={"13"}
        rx={"12.991"}
        ry={"13"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse3230Icon;
/* prettier-ignore-end */
