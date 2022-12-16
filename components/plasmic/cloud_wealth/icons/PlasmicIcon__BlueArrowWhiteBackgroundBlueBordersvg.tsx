// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlueArrowWhiteBackgroundBlueBordersvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BlueArrowWhiteBackgroundBlueBordersvgIcon(
  props: BlueArrowWhiteBackgroundBlueBordersvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 49"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"24.5"}
        cy={"24.5"}
        r={"22.133"}
        fill={"#fff"}
        stroke={"#0F5CBF"}
        strokeWidth={"4.733"}
      ></circle>

      <path
        d={
          "M15 22.5a1.5 1.5 0 000 3v-3zm20.06 2.56a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L31.88 24l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM15 25.5h19v-3H15v3z"
        }
        fill={"#0F5CBF"}
      ></path>
    </svg>
  );
}

export default BlueArrowWhiteBackgroundBlueBordersvgIcon;
/* prettier-ignore-end */
