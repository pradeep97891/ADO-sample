/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _81427E67DaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _81427E67DaIcon(props: _81427E67DaIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h22v24H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _81427E67DaIcon;
/* prettier-ignore-end */
