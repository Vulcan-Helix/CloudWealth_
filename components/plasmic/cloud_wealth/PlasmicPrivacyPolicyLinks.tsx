// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: fiOxnTwhXt
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
import sty from "./PlasmicPrivacyPolicyLinks.module.css"; // plasmic-import: fiOxnTwhXt/css

export type PlasmicPrivacyPolicyLinks__VariantMembers = {};
export type PlasmicPrivacyPolicyLinks__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicyLinks__VariantsArgs;
export const PlasmicPrivacyPolicyLinks__VariantProps =
  new Array<VariantPropType>();

export type PlasmicPrivacyPolicyLinks__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicyLinks__ArgsType;
export const PlasmicPrivacyPolicyLinks__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicyLinks__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPrivacyPolicyLinksProps {
  className?: string;
}

function PlasmicPrivacyPolicyLinks__RenderFunc(props: {
  variants: PlasmicPrivacyPolicyLinks__VariantsArgs;
  args: PlasmicPrivacyPolicyLinks__ArgsType;
  overrides: PlasmicPrivacyPolicyLinks__OverridesType;

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
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "desktop", "mobileOnly") ? true : true) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gXcDl
          )}
        >
          {
            "Privacy Policy            Terms & Conditions            Cookie Policy"
          }
        </div>
      ) : null}
      {(hasVariant(globalVariants, "desktop", "mobileOnly") ? true : false) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5D0L
          )}
        >
          {hasVariant(globalVariants, "desktop", "mobileOnly") ? (
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#000000" }}
              >
                {"Privacy Policy-T's & C's   Cookie Policy"}
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#000000" }}
              >
                {"Privacy Policy-T's & C's   Cookie Policy"}
              </span>
            </React.Fragment>
          )}
        </div>
      ) : null}
    </div>
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
  PlasmicPrivacyPolicyLinks__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicyLinks__VariantsArgs;
    args?: PlasmicPrivacyPolicyLinks__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicyLinks__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPrivacyPolicyLinks__ArgsType,
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
          internalArgPropNames: PlasmicPrivacyPolicyLinks__ArgProps,
          internalVariantPropNames: PlasmicPrivacyPolicyLinks__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPrivacyPolicyLinks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicyLinks";
  } else {
    func.displayName = `PlasmicPrivacyPolicyLinks.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivacyPolicyLinks = Object.assign(
  // Top-level PlasmicPrivacyPolicyLinks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPrivacyPolicyLinks
    internalVariantProps: PlasmicPrivacyPolicyLinks__VariantProps,
    internalArgProps: PlasmicPrivacyPolicyLinks__ArgProps
  }
);

export default PlasmicPrivacyPolicyLinks;
/* prettier-ignore-end */
