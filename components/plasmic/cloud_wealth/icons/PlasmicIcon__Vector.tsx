// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 8"}
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
          "M15.474 7.004c-1.222.244-2.444.244-3.747.163C6.841 6.76 2.607 3.99 0 0c.081.163.081.407.163.57C2.769 4.398 6.84 7.004 11.646 7.411a9.925 9.925 0 002.199 0c.814-.081 1.71-.244 2.524-.489-.244 0-.57.082-.895.082z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
