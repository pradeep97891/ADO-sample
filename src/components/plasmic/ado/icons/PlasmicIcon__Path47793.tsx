/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path47793IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path47793Icon(props: Path47793IconProps) {
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

      <path
        d={
          "M46.153 9.668H.813a.805.805 0 01-.568-.215A.78.78 0 010 8.905V0h46.963v8.905a.769.769 0 01-.244.547.795.795 0 01-.566.216z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path47793Icon;
/* prettier-ignore-end */
