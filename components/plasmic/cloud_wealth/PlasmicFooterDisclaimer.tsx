// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: D8imCi-mX6
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

import { useScreenVariants as useScreenVariantshT8MqvJo0QuvrA } from "./PlasmicGlobalVariant__Desktop"; // plasmic-import: hT8MQVJo0quvrA/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cloud_wealth.module.css"; // plasmic-import: 7iST1GVY7MEDdpjnrPuCNJ/projectcss
import sty from "./PlasmicFooterDisclaimer.module.css"; // plasmic-import: D8imCi-mX6/css

export type PlasmicFooterDisclaimer__VariantMembers = {};
export type PlasmicFooterDisclaimer__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterDisclaimer__VariantsArgs;
export const PlasmicFooterDisclaimer__VariantProps =
  new Array<VariantPropType>();

export type PlasmicFooterDisclaimer__ArgsType = {};
type ArgPropType = keyof PlasmicFooterDisclaimer__ArgsType;
export const PlasmicFooterDisclaimer__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterDisclaimer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFooterDisclaimerProps {
  className?: string;
}

function PlasmicFooterDisclaimer__RenderFunc(props: {
  variants: PlasmicFooterDisclaimer__VariantsArgs;
  args: PlasmicFooterDisclaimer__ArgsType;
  overrides: PlasmicFooterDisclaimer__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    desktop: useScreenVariantshT8MqvJo0QuvrA()
  });

  return (
    (hasVariant(globalVariants, "desktop", "mobileOnly") ? true : false) ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        {
          "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures. Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. "
        }
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterDisclaimer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterDisclaimer__VariantsArgs;
    args?: PlasmicFooterDisclaimer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterDisclaimer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterDisclaimer__ArgsType,
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
          internalArgPropNames: PlasmicFooterDisclaimer__ArgProps,
          internalVariantPropNames: PlasmicFooterDisclaimer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterDisclaimer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterDisclaimer";
  } else {
    func.displayName = `PlasmicFooterDisclaimer.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterDisclaimer = Object.assign(
  // Top-level PlasmicFooterDisclaimer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFooterDisclaimer
    internalVariantProps: PlasmicFooterDisclaimer__VariantProps,
    internalArgProps: PlasmicFooterDisclaimer__ArgProps
  }
);

export default PlasmicFooterDisclaimer;
/* prettier-ignore-end */
