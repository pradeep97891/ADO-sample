/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame56554IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame56554Icon(props: Frame56554IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.635 3.619l-.587.003a.587.587 0 00.584.584l.003-.587zm1.99.597a.587.587 0 00.007-1.175l-.006 1.175zM2.214 1.622a.587.587 0 00-1.175.006l1.175-.006zM1.175 7.636a.587.587 0 00-1.175 0h1.175zm10.28 6.614a.587.587 0 00-.589-1.017l.588 1.017zm1.778-3.384a.587.587 0 101.017.588l-1.017-.588zM2.263 2.21a.587.587 0 10.827.834l-.826-.834zm10.747.052C10.018-.73 5.184-.76 2.212 2.212l.83.83C5.548.537 9.64.552 12.18 3.092l.83-.83zm-10.798-.05l-.992.991.83.831.992-.992-.83-.83zm-.58 1.994l1.994.01.006-1.175-1.994-.01-.006 1.175zm.59-.59l-.01-1.994-1.174.006.01 1.994 1.175-.006zm5.414-2.441a6.461 6.461 0 016.461 6.461h1.175A7.636 7.636 0 007.636 0v1.175zm0 12.922a6.461 6.461 0 01-6.461-6.461H0a7.636 7.636 0 007.636 7.636v-1.175zm3.23-.864c-.95.55-2.052.864-3.23.864v1.175a7.6 7.6 0 003.818-1.022l-.588-1.017zm3.231-5.597c0 1.178-.314 2.28-.864 3.23l1.017.588a7.604 7.604 0 001.022-3.818h-1.175zM3.09 3.044a6.439 6.439 0 014.546-1.87V0a7.614 7.614 0 00-5.372 2.21l.826.834z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M7.265 4.44v3.676l2.298 2.298"}
        stroke={"currentColor"}
        strokeWidth={"1.188"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Frame56554Icon;
/* prettier-ignore-end */
