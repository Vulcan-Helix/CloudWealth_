// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: 9KxG1LQhTfZ-fr
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cloud_wealth.module.css"; // plasmic-import: 7iST1GVY7MEDdpjnrPuCNJ/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: 9KxG1LQhTfZ-fr/css

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  navbar?: p.Flex<"nav">;
  navigation?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  navigationItems?: p.Flex<"div">;
  navigationItems2?: p.Flex<"nav">;
  about?: p.Flex<"div">;
  rectangle3?: p.Flex<"div">;
  calculators?: p.Flex<"div">;
  rectangle4?: p.Flex<"div">;
  features?: p.Flex<"div">;
  rectangle5?: p.Flex<"div">;
  partners?: p.Flex<"div">;
  rectangle6?: p.Flex<"div">;
  reachOut?: p.Flex<"div">;
  rectangle7?: p.Flex<"div">;
  frame1?: p.Flex<"div">;
  frame2?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <nav
      data-plasmic-name={"navbar"}
      data-plasmic-override={overrides.navbar}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.navbar
      )}
    >
      <div
        data-plasmic-name={"navigation"}
        data-plasmic-override={overrides.navigation}
        className={classNames(projectcss.all, sty.navigation)}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"190px" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/cloud_wealth/images/cwLogoBlue1Svg.svg",
            fullWidth: 300,
            fullHeight: 73,
            aspectRatio: 4.130435
          }}
        />

        <div
          data-plasmic-name={"navigationItems"}
          data-plasmic-override={overrides.navigationItems}
          className={classNames(projectcss.all, sty.navigationItems)}
        >
          <p.Stack
            as={"nav"}
            data-plasmic-name={"navigationItems2"}
            data-plasmic-override={overrides.navigationItems2}
            hasGap={true}
            className={classNames(projectcss.all, sty.navigationItems2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sIJH
              )}
            >
              {"Home"}
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"about"}
              data-plasmic-override={overrides.about}
              hasGap={true}
              className={classNames(projectcss.all, sty.about)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pRqvu
                )}
              >
                {"About"}
              </div>

              {false ? (
                <div
                  data-plasmic-name={"rectangle3"}
                  data-plasmic-override={overrides.rectangle3}
                  className={classNames(projectcss.all, sty.rectangle3)}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"calculators"}
              data-plasmic-override={overrides.calculators}
              hasGap={true}
              className={classNames(projectcss.all, sty.calculators)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mlJrH
                )}
              >
                {"Calculators"}
              </div>

              {false ? (
                <div
                  data-plasmic-name={"rectangle4"}
                  data-plasmic-override={overrides.rectangle4}
                  className={classNames(projectcss.all, sty.rectangle4)}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"features"}
              data-plasmic-override={overrides.features}
              hasGap={true}
              className={classNames(projectcss.all, sty.features)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d4CwD
                )}
              >
                {"Features"}
              </div>

              {false ? (
                <div
                  data-plasmic-name={"rectangle5"}
                  data-plasmic-override={overrides.rectangle5}
                  className={classNames(projectcss.all, sty.rectangle5)}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"partners"}
              data-plasmic-override={overrides.partners}
              hasGap={true}
              className={classNames(projectcss.all, sty.partners)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3KuH8
                )}
              >
                {"Reach Out"}
              </div>

              {false ? (
                <div
                  data-plasmic-name={"rectangle6"}
                  data-plasmic-override={overrides.rectangle6}
                  className={classNames(projectcss.all, sty.rectangle6)}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"reachOut"}
              data-plasmic-override={overrides.reachOut}
              hasGap={true}
              className={classNames(projectcss.all, sty.reachOut)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zFfKj
                )}
              >
                {"Dashboard"}
              </div>

              {false ? (
                <div
                  data-plasmic-name={"rectangle7"}
                  data-plasmic-override={overrides.rectangle7}
                  className={classNames(projectcss.all, sty.rectangle7)}
                />
              ) : null}
            </p.Stack>
          </p.Stack>
        </div>

        <div
          data-plasmic-name={"frame1"}
          data-plasmic-override={overrides.frame1}
          className={classNames(projectcss.all, sty.frame1)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cIEy
            )}
          >
            {"Login"}
          </div>
        </div>

        <div
          data-plasmic-name={"frame2"}
          data-plasmic-override={overrides.frame2}
          className={classNames(projectcss.all, sty.frame2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vVcnS
            )}
          >
            {"Register"}
          </div>
        </div>
      </div>
    </nav>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  navbar: [
    "navbar",
    "navigation",
    "img",
    "navigationItems",
    "navigationItems2",
    "about",
    "rectangle3",
    "calculators",
    "rectangle4",
    "features",
    "rectangle5",
    "partners",
    "rectangle6",
    "reachOut",
    "rectangle7",
    "frame1",
    "frame2"
  ],
  navigation: [
    "navigation",
    "img",
    "navigationItems",
    "navigationItems2",
    "about",
    "rectangle3",
    "calculators",
    "rectangle4",
    "features",
    "rectangle5",
    "partners",
    "rectangle6",
    "reachOut",
    "rectangle7",
    "frame1",
    "frame2"
  ],
  img: ["img"],
  navigationItems: [
    "navigationItems",
    "navigationItems2",
    "about",
    "rectangle3",
    "calculators",
    "rectangle4",
    "features",
    "rectangle5",
    "partners",
    "rectangle6",
    "reachOut",
    "rectangle7"
  ],
  navigationItems2: [
    "navigationItems2",
    "about",
    "rectangle3",
    "calculators",
    "rectangle4",
    "features",
    "rectangle5",
    "partners",
    "rectangle6",
    "reachOut",
    "rectangle7"
  ],
  about: ["about", "rectangle3"],
  rectangle3: ["rectangle3"],
  calculators: ["calculators", "rectangle4"],
  rectangle4: ["rectangle4"],
  features: ["features", "rectangle5"],
  rectangle5: ["rectangle5"],
  partners: ["partners", "rectangle6"],
  rectangle6: ["rectangle6"],
  reachOut: ["reachOut", "rectangle7"],
  rectangle7: ["rectangle7"],
  frame1: ["frame1"],
  frame2: ["frame2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  navbar: "nav";
  navigation: "div";
  img: typeof p.PlasmicImg;
  navigationItems: "div";
  navigationItems2: "nav";
  about: "div";
  rectangle3: "div";
  calculators: "div";
  rectangle4: "div";
  features: "div";
  rectangle5: "div";
  partners: "div";
  rectangle6: "div";
  reachOut: "div";
  rectangle7: "div";
  frame1: "div";
  frame2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navbar") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("navbar"),
  {
    // Helper components rendering sub-elements
    navigation: makeNodeComponent("navigation"),
    img: makeNodeComponent("img"),
    navigationItems: makeNodeComponent("navigationItems"),
    navigationItems2: makeNodeComponent("navigationItems2"),
    about: makeNodeComponent("about"),
    rectangle3: makeNodeComponent("rectangle3"),
    calculators: makeNodeComponent("calculators"),
    rectangle4: makeNodeComponent("rectangle4"),
    features: makeNodeComponent("features"),
    rectangle5: makeNodeComponent("rectangle5"),
    partners: makeNodeComponent("partners"),
    rectangle6: makeNodeComponent("rectangle6"),
    reachOut: makeNodeComponent("reachOut"),
    rectangle7: makeNodeComponent("rectangle7"),
    frame1: makeNodeComponent("frame1"),
    frame2: makeNodeComponent("frame2"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
