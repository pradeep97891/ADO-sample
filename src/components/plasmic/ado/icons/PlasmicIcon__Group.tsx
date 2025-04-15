/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.541 1.084A.542.542 0 01.541 0h3.082c.268 0 .491.195.534.451l.307 1.537H19.46v.002a.54.54 0 01.531.635l-.675 3.705a.534.534 0 01-.017.096l-.667 3.655a.542.542 0 01-.54.493H6.18l.175.876H17.02a.542.542 0 010 1.084H5.91a.542.542 0 01-.53-.436l-.391-1.96-.746-3.734-.007-.032-.742-3.719a.516.516 0 01-.007-.033L3.18 1.084H.542zM14.65 13.322a2.297 2.297 0 012.301 2.301c0 .635-.258 1.21-.674 1.627a2.296 2.296 0 01-3.253 0 2.294 2.294 0 01-.674-1.627 2.297 2.297 0 012.3-2.3zm.86 1.44a1.213 1.213 0 00-2.077.86 1.213 1.213 0 001.217 1.217 1.213 1.213 0 001.217-1.216c0-.336-.136-.64-.356-.86zm-7.266-1.44c.636 0 1.21.258 1.627.674a2.297 2.297 0 010 3.254 2.294 2.294 0 01-1.627.674c-.635 0-1.21-.258-1.626-.674a2.294 2.294 0 01-.674-1.627c0-.635.257-1.21.674-1.627a2.294 2.294 0 011.626-.674zm.861 1.44a1.213 1.213 0 00-1.72 0 1.213 1.213 0 00-.001 1.72 1.213 1.213 0 001.721 0 1.213 1.213 0 000-1.72zm.112-11.69l.196 2.667h4.656l.196-2.668H9.216zm.275 3.75l.195 2.668h4.106l.196-2.667H9.491zM8.6 9.49l-.195-2.667H5.429l.533 2.667h2.64zm-.275-3.75L8.13 3.07H4.68l.533 2.668h3.113zm7.022-2.669l-.195 2.668h3.173l.486-2.668h-3.464zm-.275 3.752l-.196 2.667h2.765l.486-2.667h-3.055z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
