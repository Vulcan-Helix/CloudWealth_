// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: 2ULwZ9_GVV
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
import sty from "./PlasmicDisclaimer.module.css"; // plasmic-import: 2ULwZ9_GVV/css

export type PlasmicDisclaimer__VariantMembers = {};
export type PlasmicDisclaimer__VariantsArgs = {};
type VariantPropType = keyof PlasmicDisclaimer__VariantsArgs;
export const PlasmicDisclaimer__VariantProps = new Array<VariantPropType>();

export type PlasmicDisclaimer__ArgsType = {};
type ArgPropType = keyof PlasmicDisclaimer__ArgsType;
export const PlasmicDisclaimer__ArgProps = new Array<ArgPropType>();

export type PlasmicDisclaimer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDisclaimerProps {
  className?: string;
}

function PlasmicDisclaimer__RenderFunc(props: {
  variants: PlasmicDisclaimer__VariantsArgs;
  args: PlasmicDisclaimer__ArgsType;
  overrides: PlasmicDisclaimer__OverridesType;

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
    (hasVariant(globalVariants, "desktop", "mobileOnly") ? true : true) ? (
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
  PlasmicDisclaimer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDisclaimer__VariantsArgs;
    args?: PlasmicDisclaimer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDisclaimer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDisclaimer__ArgsType,
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
          internalArgPropNames: PlasmicDisclaimer__ArgProps,
          internalVariantPropNames: PlasmicDisclaimer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDisclaimer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDisclaimer";
  } else {
    func.displayName = `PlasmicDisclaimer.${nodeName}`;
  }
  return func;
}

export const PlasmicDisclaimer = Object.assign(
  // Top-level PlasmicDisclaimer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDisclaimer
    internalVariantProps: PlasmicDisclaimer__VariantProps,
    internalArgProps: PlasmicDisclaimer__ArgProps
  }
);

export default PlasmicDisclaimer;
/* prettier-ignore-end */
