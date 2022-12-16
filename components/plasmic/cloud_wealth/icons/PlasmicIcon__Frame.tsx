// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 60"}
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

      <g clipPath={"url(#bQK34454oWa)"} fill={"currentColor"}>
        <path
          d={
            "M27.685 5.707h-6.916V1.144a1.128 1.128 0 00-.335-.809A1.15 1.15 0 0019.62 0h-8.085a1.16 1.16 0 00-.816.335 1.137 1.137 0 00-.334.81v4.562H3.468a3.493 3.493 0 00-2.45.999A3.424 3.424 0 000 9.126v46.841c.004.908.37 1.777 1.02 2.416.651.64 1.531.998 2.448.997h24.217a3.48 3.48 0 002.447-.997 3.408 3.408 0 001.02-2.416V9.127a3.397 3.397 0 00-1.018-2.421 3.465 3.465 0 00-2.45-.999zM12.69 2.288h5.773v3.42H12.69v-3.42zm16.157 53.68c-.005.3-.13.587-.348.798-.217.21-.51.327-.814.326H3.468a1.158 1.158 0 01-.817-.324 1.137 1.137 0 01-.346-.8V9.125a1.127 1.127 0 01.342-.809 1.15 1.15 0 01.821-.328h24.217c.306 0 .6.12.817.332.218.213.342.502.345.805v46.841z"
          }
        ></path>

        <path
          d={
            "M24.516 30.153l-8.883-1.223.844-12.295a1.136 1.136 0 00-.228-.752 1.167 1.167 0 00-1.451-.335 1.149 1.149 0 00-.54.574l-7.9 18.726a1.107 1.107 0 00.067 1.02 1.155 1.155 0 00.883.558l7.973.855-2.904 12.69c-.06.267-.02.546.11.788.13.241.343.428.601.527a1.151 1.151 0 00.998-.079c.176-.101.322-.246.424-.42L25.366 31.85a1.135 1.135 0 000-1.072 1.16 1.16 0 00-.85-.625zm-8.152 12.782l1.468-6.404a1.132 1.132 0 00-.188-.916 1.153 1.153 0 00-.815-.471l-7.747-.822 4.65-10.954-.444 6.496c-.02.29.072.575.257.8.185.224.45.37.74.41l8.237 1.144-6.158 10.717z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"bQK34454oWa"}>
          <path fill={"currentColor"} d={"M0 0h31.153v59.38H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
