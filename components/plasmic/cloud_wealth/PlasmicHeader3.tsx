// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: e0WvtLOnNo
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
import sty from "./PlasmicHeader3.module.css"; // plasmic-import: e0WvtLOnNo/css

import GroupIcon from "./icons/PlasmicIcon__Group"; // plasmic-import: ge1llm3Q95/icon
import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: mu_ZRWub1v/icon
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: 8vfqKcq9HM/icon
import Group5Icon from "./icons/PlasmicIcon__Group5"; // plasmic-import: 8HveAwQ1ga/icon
import Vector4Icon from "./icons/PlasmicIcon__Vector4"; // plasmic-import: P2sxp2YEod/icon

export type PlasmicHeader3__VariantMembers = {
  unnamedVariant: "unnamedVariant";
};
export type PlasmicHeader3__VariantsArgs = {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicHeader3__VariantsArgs;
export const PlasmicHeader3__VariantProps = new Array<VariantPropType>(
  "unnamedVariant"
);

export type PlasmicHeader3__ArgsType = {};
type ArgPropType = keyof PlasmicHeader3__ArgsType;
export const PlasmicHeader3__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader3__OverridesType = {
  root?: p.Flex<"div">;
  desktopNavigationLoggedOut?: p.Flex<"div">;
  cwLogoBlue1?: p.Flex<"div">;
  b?: p.Flex<"div">;
  c?: p.Flex<"div">;
  group?: p.Flex<"div">;
  group2?: p.Flex<"div">;
  group3?: p.Flex<"div">;
  navigation?: p.Flex<"div">;
  home?: p.Flex<"div">;
  rectangle2?: p.Flex<"div">;
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
  reachOut2?: p.Flex<"div">;
  rectangle8?: p.Flex<"div">;
  advisors?: p.Flex<"div">;
  rectangle9?: p.Flex<"div">;
  frame1?: p.Flex<"div">;
  frame2?: p.Flex<"div">;
};

export interface DefaultHeader3Props {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  className?: string;
}

function PlasmicHeader3__RenderFunc(props: {
  variants: PlasmicHeader3__VariantsArgs;
  args: PlasmicHeader3__ArgsType;
  overrides: PlasmicHeader3__OverridesType;

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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "unnamedVariant",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.unnamedVariant
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootunnamedVariant]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"desktopNavigationLoggedOut"}
        data-plasmic-override={overrides.desktopNavigationLoggedOut}
        className={classNames(projectcss.all, sty.desktopNavigationLoggedOut)}
      >
        <div
          data-plasmic-name={"cwLogoBlue1"}
          data-plasmic-override={overrides.cwLogoBlue1}
          className={classNames(projectcss.all, sty.cwLogoBlue1)}
        >
          <div
            data-plasmic-name={"b"}
            data-plasmic-override={overrides.b}
            className={classNames(projectcss.all, sty.b)}
          >
            <div
              data-plasmic-name={"c"}
              data-plasmic-override={overrides.c}
              className={classNames(projectcss.all, sty.c)}
            >
              <div
                data-plasmic-name={"group"}
                data-plasmic-override={overrides.group}
                className={classNames(projectcss.all, sty.group)}
              >
                <div
                  data-plasmic-name={"group2"}
                  data-plasmic-override={overrides.group2}
                  className={classNames(projectcss.all, sty.group2)}
                >
                  <GroupIcon
                    className={classNames(projectcss.all, sty.svg__kib5J)}
                    role={"img"}
                  />

                  <VectorIcon
                    className={classNames(projectcss.all, sty.svg__cPpIx)}
                    role={"img"}
                  />

                  <Group2Icon
                    className={classNames(projectcss.all, sty.svg__mvoR)}
                    role={"img"}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qS5Wr)}
                    displayHeight={"32.355px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"34.627px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/cloud_wealth/images/group3.svg",
                      fullWidth: 34.627,
                      fullHeight: 32.355,
                      aspectRatio: 1.060606
                    }}
                  />

                  <div
                    data-plasmic-name={"group3"}
                    data-plasmic-override={overrides.group3}
                    className={classNames(projectcss.all, sty.group3)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__vPvga)}
                      displayHeight={"21px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"18px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/cloud_wealth/images/vector2.svg",
                        fullWidth: 18,
                        fullHeight: 21,
                        aspectRatio: 0.857143
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__scjjk)}
                      displayHeight={"12.195px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"17.265px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/cloud_wealth/images/group4.svg",
                        fullWidth: 17.265,
                        fullHeight: 12.195,
                        aspectRatio: 1.384615
                      }}
                    />

                    <Group5Icon
                      className={classNames(projectcss.all, sty.svg__evEz)}
                      role={"img"}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__pOc7M)}
                      displayHeight={"9px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"19px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/cloud_wealth/images/vector3.svg",
                        fullWidth: 19,
                        fullHeight: 9,
                        aspectRatio: 2.111111
                      }}
                    />

                    <Vector4Icon
                      className={classNames(projectcss.all, sty.svg___5FKQo)}
                      role={"img"}
                    />
                  </div>

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__boXpn)}
                    displayHeight={"16px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"31px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/cloud_wealth/images/vector5.svg",
                      fullWidth: 31,
                      fullHeight: 16,
                      aspectRatio: 1.9375
                    }}
                  />
                </div>

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__la8T)}
                  displayHeight={"31px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"52px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/cloud_wealth/images/vector6.svg",
                    fullWidth: 52,
                    fullHeight: 31,
                    aspectRatio: 1.677419
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__m9Zgt)}
                  displayHeight={"30px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"43px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/cloud_wealth/images/vector7.svg",
                    fullWidth: 43,
                    fullHeight: 30,
                    aspectRatio: 1.433333
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__mPkI)}
                  displayHeight={"30px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"43px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/cloud_wealth/images/vector8.svg",
                    fullWidth: 43,
                    fullHeight: 30,
                    aspectRatio: 1.433333
                  }}
                />
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eg70)}
                displayHeight={"16.043px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"119.472px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cloud_wealth/images/group6.svg",
                  fullWidth: 119.472,
                  fullHeight: 16.043,
                  aspectRatio: 7.058824
                }}
              />
            </div>
          </div>
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"navigation"}
          data-plasmic-override={overrides.navigation}
          hasGap={true}
          className={classNames(projectcss.all, sty.navigation)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            hasGap={true}
            className={classNames(projectcss.all, sty.home)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qbcp1
              )}
            >
              {"Home"}
            </div>

            <div
              data-plasmic-name={"rectangle2"}
              data-plasmic-override={overrides.rectangle2}
              className={classNames(projectcss.all, sty.rectangle2)}
            />
          </p.Stack>

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
                sty.text__musZq
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
                sty.text__bzB5H
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
                sty.text__psOG
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
                sty.text___22U7C
              )}
            >
              {"Partners"}
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
                sty.text__pw8E0
              )}
            >
              {"Reach Out"}
            </div>

            {false ? (
              <div
                data-plasmic-name={"rectangle7"}
                data-plasmic-override={overrides.rectangle7}
                className={classNames(projectcss.all, sty.rectangle7)}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={"div"}
            data-plasmic-name={"reachOut2"}
            data-plasmic-override={overrides.reachOut2}
            hasGap={true}
            className={classNames(projectcss.all, sty.reachOut2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__whrlQ
              )}
            >
              {"Dashboard"}
            </div>

            {false ? (
              <div
                data-plasmic-name={"rectangle8"}
                data-plasmic-override={overrides.rectangle8}
                className={classNames(projectcss.all, sty.rectangle8)}
              />
            ) : null}
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"advisors"}
          data-plasmic-override={overrides.advisors}
          hasGap={true}
          className={classNames(projectcss.all, sty.advisors)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qXdp9
            )}
          >
            {"Advisors"}
          </div>

          {false ? (
            <div
              data-plasmic-name={"rectangle9"}
              data-plasmic-override={overrides.rectangle9}
              className={classNames(projectcss.all, sty.rectangle9)}
            />
          ) : null}
        </p.Stack>

        <div
          data-plasmic-name={"frame1"}
          data-plasmic-override={overrides.frame1}
          className={classNames(projectcss.all, sty.frame1)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___29RLi
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
              sty.text__qkroe
            )}
          >
            {"Register"}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "desktopNavigationLoggedOut",
    "cwLogoBlue1",
    "b",
    "c",
    "group",
    "group2",
    "group3",
    "navigation",
    "home",
    "rectangle2",
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
    "reachOut2",
    "rectangle8",
    "advisors",
    "rectangle9",
    "frame1",
    "frame2"
  ],
  desktopNavigationLoggedOut: [
    "desktopNavigationLoggedOut",
    "cwLogoBlue1",
    "b",
    "c",
    "group",
    "group2",
    "group3",
    "navigation",
    "home",
    "rectangle2",
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
    "reachOut2",
    "rectangle8",
    "advisors",
    "rectangle9",
    "frame1",
    "frame2"
  ],
  cwLogoBlue1: ["cwLogoBlue1", "b", "c", "group", "group2", "group3"],
  b: ["b", "c", "group", "group2", "group3"],
  c: ["c", "group", "group2", "group3"],
  group: ["group", "group2", "group3"],
  group2: ["group2", "group3"],
  group3: ["group3"],
  navigation: [
    "navigation",
    "home",
    "rectangle2",
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
    "reachOut2",
    "rectangle8"
  ],
  home: ["home", "rectangle2"],
  rectangle2: ["rectangle2"],
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
  reachOut2: ["reachOut2", "rectangle8"],
  rectangle8: ["rectangle8"],
  advisors: ["advisors", "rectangle9"],
  rectangle9: ["rectangle9"],
  frame1: ["frame1"],
  frame2: ["frame2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  desktopNavigationLoggedOut: "div";
  cwLogoBlue1: "div";
  b: "div";
  c: "div";
  group: "div";
  group2: "div";
  group3: "div";
  navigation: "div";
  home: "div";
  rectangle2: "div";
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
  reachOut2: "div";
  rectangle8: "div";
  advisors: "div";
  rectangle9: "div";
  frame1: "div";
  frame2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader3__VariantsArgs;
    args?: PlasmicHeader3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader3__ArgsType,
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
          internalArgPropNames: PlasmicHeader3__ArgProps,
          internalVariantPropNames: PlasmicHeader3__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader3";
  } else {
    func.displayName = `PlasmicHeader3.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader3 = Object.assign(
  // Top-level PlasmicHeader3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    desktopNavigationLoggedOut: makeNodeComponent("desktopNavigationLoggedOut"),
    cwLogoBlue1: makeNodeComponent("cwLogoBlue1"),
    b: makeNodeComponent("b"),
    c: makeNodeComponent("c"),
    group: makeNodeComponent("group"),
    group2: makeNodeComponent("group2"),
    group3: makeNodeComponent("group3"),
    navigation: makeNodeComponent("navigation"),
    home: makeNodeComponent("home"),
    rectangle2: makeNodeComponent("rectangle2"),
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
    reachOut2: makeNodeComponent("reachOut2"),
    rectangle8: makeNodeComponent("rectangle8"),
    advisors: makeNodeComponent("advisors"),
    rectangle9: makeNodeComponent("rectangle9"),
    frame1: makeNodeComponent("frame1"),
    frame2: makeNodeComponent("frame2"),

    // Metadata about props expected for PlasmicHeader3
    internalVariantProps: PlasmicHeader3__VariantProps,
    internalArgProps: PlasmicHeader3__ArgProps
  }
);

export default PlasmicHeader3;
/* prettier-ignore-end */