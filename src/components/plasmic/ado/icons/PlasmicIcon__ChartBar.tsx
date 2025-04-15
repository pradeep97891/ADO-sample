/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartBarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartBarIcon(props: ChartBarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 18.75h-.75v-15A.75.75 0 0019.5 3h-5.25a.75.75 0 00-.75.75V7.5H9a.75.75 0 00-.75.75V12H4.5a.75.75 0 00-.75.75v6H3a.75.75 0 100 1.5h18a.75.75 0 100-1.5zM15 4.5h3.75v14.25H15V4.5zM9.75 9h3.75v9.75H9.75V9zm-4.5 4.5h3v5.25h-3V13.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartBarIcon;
/* prettier-ignore-end */
