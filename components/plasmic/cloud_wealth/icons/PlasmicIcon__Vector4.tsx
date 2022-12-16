// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 7"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.398 6.352C2.85 6.19 1.384 5.701.163 4.968.08 5.049 0 5.049 0 5.13c1.384.896 2.85 1.384 4.48 1.547 4.153.326 7.98-2.117 10.505-6.108.081-.163.163-.326.163-.57-2.525 4.072-6.515 6.678-10.75 6.352z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
