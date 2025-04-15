/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.834 0H3.357C1.507 0 0 1.447 0 3.226v17.52c0 1.779 1.506 3.226 3.357 3.226H16.65c1.852 0 3.358-1.447 3.358-3.225V6.629L13.834 0zm.49 3.075l2.82 3.029h-2.82V3.075zm2.326 19.196H3.357c-.876 0-1.588-.684-1.588-1.524V3.226c0-.841.712-1.526 1.588-1.526h9.197v6.103h5.684v12.944c0 .84-.713 1.524-1.588 1.524z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
