// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 5"}
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
          "M7.655 0C4.642.733 2.036 2.443 0 4.886v.082a5.74 5.74 0 01.814-.652C2.688 2.28 5.131.814 7.818.163 7.737 0 7.737 0 7.655 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
