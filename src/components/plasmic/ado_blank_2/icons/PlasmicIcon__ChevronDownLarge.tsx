/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronDownLargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronDownLargeIcon(props: ChevronDownLargeIconProps) {
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
        d={"M2.305 3.5l-.805.805 4.5 4.5 4.5-4.5-.805-.805L6 7.195 2.305 3.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDownLargeIcon;
/* prettier-ignore-end */
