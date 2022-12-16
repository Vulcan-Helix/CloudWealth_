// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Image5TracedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Image5TracedIcon(props: Image5TracedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 22"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.879.126C.538.578-.26 1.95.077 3.22a2.719 2.719 0 001.796 1.912c.503.17 1.276.17 1.78 0 1.31-.443 2.074-1.71 1.822-3.023a3.121 3.121 0 00-.254-.656C4.896.823 4.354.365 3.652.128c-.5-.17-1.276-.17-1.774-.002zM16.53 6.972c-1.414.17-2.82.958-3.482 1.951-.127.19-.248.347-.268.349-.02.001-.044-.444-.051-.99l-.014-.994H8.161V22h4.759l.027-4.34c.027-4.282.029-4.345.14-4.724.252-.863.645-1.386 1.257-1.676 1.198-.568 2.75-.322 3.336.527.182.263.356.72.465 1.219.081.37.094.858.12 4.703L18.291 22H23v-4.732c0-3.579-.016-4.864-.067-5.272-.375-3.041-1.585-4.483-4.154-4.952-.528-.096-1.727-.135-2.249-.072zM.381 7.325c-.013.034-.018 3.35-.011 7.368L.383 22h4.759V7.288l-2.368-.012C.907 7.266.4 7.276.38 7.325z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Image5TracedIcon;
/* prettier-ignore-end */
