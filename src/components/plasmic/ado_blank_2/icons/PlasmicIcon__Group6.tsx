/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.784 16.604H.512a.5.5 0 00-.512.488.5.5 0 00.512.488h11.272a.5.5 0 00.513-.488.5.5 0 00-.513-.488zM24.074.643a4.827 4.827 0 00-4.18-.274L15.21 2.342 11.668.997A8.003 8.003 0 007.795 0h-2.16a.51.51 0 00-.485.334c-.07.2.002.419.179.545l4.949 3.539-5.304 2.23a.528.528 0 01-.52-.068L2.652 5.205a1.59 1.59 0 00-.96-.322H.513a.516.516 0 00-.447.25.468.468 0 00.01.495l2.566 3.985c.482.723 1.312 1.13 2.166 1.13.365 0 .734-.075 1.081-.231l18.15-8.118a.99.99 0 00.553-.888.993.993 0 00-.517-.861zm-.51.885l-18.111 8.1c-.697.312-1.534.078-1.942-.533L1.428 5.86h.262c.115 0 .23.038.32.107l1.804 1.376c.441.337 1.04.417 1.567.202l6.111-2.571a.49.49 0 00.303-.392.478.478 0 00-.202-.446L7.173.976h.623c1.178 0 2.338.3 3.424.897l3.81 1.453c.128.05.271.046.398-.007l4.874-2.052a3.713 3.713 0 013.267.245c0 .009-.002.015-.006.017z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
