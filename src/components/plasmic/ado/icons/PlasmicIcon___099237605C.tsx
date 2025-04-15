/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _099237605CIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _099237605CIcon(props: _099237605CIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h1.18v1.392H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default _099237605CIcon;
/* prettier-ignore-end */
