// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DawnCheckMarksvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DawnCheckMarksvg2Icon(props: DawnCheckMarksvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 71"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"35.5"} cy={"35.5"} r={"35.5"} fill={"#0F5CBF"}></circle>

      <path
        d={"M18.933 35.497l12.623 11.834L56.8 23.664"}
        stroke={"#fff"}
        strokeWidth={"4.733"}
      ></path>
    </svg>
  );
}

export default DawnCheckMarksvg2Icon;
/* prettier-ignore-end */
