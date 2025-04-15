/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse2Icon(props: Ellipse2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 157 60"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.821 56.838a81.5 81.5 0 01155.2-.493l-8.806 2.858A72.238 72.238 0 0078.271 9.258 72.242 72.242 0 009.645 59.64L.82 56.838z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse2Icon;
/* prettier-ignore-end */
