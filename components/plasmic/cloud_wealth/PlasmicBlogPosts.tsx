// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: u6j50Cc7C69Mc
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
import Button from "../../Button"; // plasmic-import: hpLAsCB6dkK5a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cloud_wealth.module.css"; // plasmic-import: 7iST1GVY7MEDdpjnrPuCNJ/projectcss
import sty from "./PlasmicBlogPosts.module.css"; // plasmic-import: u6j50Cc7C69Mc/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LSNuBBNZXUjC6e/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: hiG2ngn47z84iD/icon

export type PlasmicBlogPosts__VariantMembers = {};
export type PlasmicBlogPosts__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogPosts__VariantsArgs;
export const PlasmicBlogPosts__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogPosts__ArgsType = {};
type ArgPropType = keyof PlasmicBlogPosts__ArgsType;
export const PlasmicBlogPosts__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogPosts__OverridesType = {
  root?: p.Flex<"section">;
  h2?: p.Flex<"h2">;
};

export interface DefaultBlogPostsProps {
  className?: string;
}

function PlasmicBlogPosts__RenderFunc(props: {
  variants: PlasmicBlogPosts__VariantsArgs;
  args: PlasmicBlogPosts__ArgsType;
  overrides: PlasmicBlogPosts__OverridesType;

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
    <section
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column__fnsb0)}>
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          {"Blog"}
        </h2>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7Rv0W
          )}
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        </div>

        <div className={classNames(projectcss.all, sty.columns__ky0Pz)}>
          <div className={classNames(projectcss.all, sty.column__gDlyo)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__omKj9)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/cloud_wealth/images/fakurianDesignPPTwRTkvXqUnsplashjpg.jpeg",
                fullWidth: 1920,
                fullHeight: 1280,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__noZn1)}>
              <div className={classNames(projectcss.all, sty.column__pYzd9)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xvbt0
                  )}
                >
                  {"January 03, 2021"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__lSMgs
                  )}
                >
                  {"Convincing reasons you need to learn"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zIrEl
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__cOym)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg__xfppu)}
                      role={"img"}
                    />
                  }
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iIfHg
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__x2M1V)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___5Rh7D)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/cloud_wealth/images/fakurianDesignLfbhDph3QYUnsplashjpg.jpeg",
                fullWidth: 1920,
                fullHeight: 1080,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__yS7Mt)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__kgUj7)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uotjX
                  )}
                >
                  {"January 03, 2021"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4___3YGsT
                  )}
                >
                  {"The five devices you need to work anytime"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2Vmr1
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__kXk6Q)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg__em3Sl)}
                      role={"img"}
                    />
                  }
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g15L
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__erCwk)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ydhkj)}
              displayHeight={"230px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/cloud_wealth/images/blog2390X290Jpg.jpeg",
                fullWidth: 390,
                fullHeight: 290,
                aspectRatio: undefined
              }}
            />

            <div className={classNames(projectcss.all, sty.columns__xr87T)}>
              <div className={classNames(projectcss.all, sty.column__a9ZSj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kaku9
                  )}
                >
                  {"January 03, 2021"}
                </div>

                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__hhLB
                  )}
                >
                  {"Tiktok Illegally collecting data sharing"}
                </h4>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__qNlwS
                  )}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ....\n"
                  }
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__r4Huv)}
                  color={"softBlue" as const}
                  endIcon={
                    <ArrowRightsvgIcon
                      className={classNames(projectcss.all, sty.svg___9Mnz)}
                      role={"img"}
                    />
                  }
                  shape={"rounded" as const}
                  showEndIcon={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dbsjh
                    )}
                  >
                    {"READ MORE"}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogPosts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogPosts__VariantsArgs;
    args?: PlasmicBlogPosts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogPosts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogPosts__ArgsType,
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
          internalArgPropNames: PlasmicBlogPosts__ArgProps,
          internalVariantPropNames: PlasmicBlogPosts__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlogPosts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogPosts";
  } else {
    func.displayName = `PlasmicBlogPosts.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogPosts = Object.assign(
  // Top-level PlasmicBlogPosts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicBlogPosts
    internalVariantProps: PlasmicBlogPosts__VariantProps,
    internalArgProps: PlasmicBlogPosts__ArgProps
  }
);

export default PlasmicBlogPosts;
/* prettier-ignore-end */
