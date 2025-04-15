/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group47853IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group47853Icon(props: Group47853IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 5V3a2 2 0 011.998-2h1.998V0H2.998A2.997 2.997 0 000 3v2h1zm8.992-4h1.999a1.998 1.998 0 011.998 2v2h1V3a3.001 3.001 0 00-2.998-3H9.992v1zM4.996 14H2.998a1.998 1.998 0 01-1.999-2v-2H0v2a3.001 3.001 0 002.998 3h1.998v-1zm8.997-4v2a2 2 0 01-1.998 2H9.996v1h1.999a2.997 2.997 0 002.997-3v-2h-.999z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group47853Icon;
/* prettier-ignore-end */
