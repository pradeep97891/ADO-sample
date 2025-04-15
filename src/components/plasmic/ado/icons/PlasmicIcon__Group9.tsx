/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.913 12.701c-.445-.067-.821-.238-1.204-.548-.123-.098-1.951-1.91-4.07-4.03L.792 4.267l-.046-.215C.103 1.066-.017.478.002.377A.537.537 0 01.317.022.66.66 0 01.553.004c.092.012 3.01.634 3.632.771.083.022 7.737 7.645 7.99 7.963.855 1.07.687 2.634-.37 3.464a2.564 2.564 0 01-1.892.5zm.682-.992c.745-.156 1.256-.9 1.13-1.644-.07-.426-.18-.592-.842-1.265l-.588-.6-1.04 1.044-1.042 1.041.615.613c.533.532.64.624.815.7.337.154.603.185.952.111zM8.488 6.392c-.606-.606-1.923-1.914-2.924-2.906L3.738 1.685l-1.295-.279a37.653 37.653 0 00-1.308-.27c-.003.004.116.595.27 1.309l.275 1.301 2.913 2.919L7.508 9.58 8.55 8.539l1.04-1.041-1.102-1.106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
