// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: JfbLrw7cZCfTIu
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
import sty from "./PlasmicFooter.module.css"; // plasmic-import: JfbLrw7cZCfTIu/css

import Group9Icon from "./icons/PlasmicIcon__Group9"; // plasmic-import: O_IQvBk0Ex/icon
import Line5Icon from "./icons/PlasmicIcon__Line5"; // plasmic-import: Ig28sg-IsK/icon
import Image5TracedIcon from "./icons/PlasmicIcon__Image5Traced"; // plasmic-import: is6zIJv7P1/icon

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  footer?: p.Flex<"div">;
  rectangle21?: p.Flex<"div">;
  cwLogoSolidWhite1?: p.Flex<"div">;
  b?: p.Flex<"div">;
  c?: p.Flex<"div">;
  globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital?: p.Flex<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;

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
      {(hasVariant(globalVariants, "desktop", "mobileOnly") ? true : false) ? (
        <div
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          className={classNames(projectcss.all, sty.footer)}
        >
          <div
            data-plasmic-name={"rectangle21"}
            data-plasmic-override={overrides.rectangle21}
            className={classNames(projectcss.all, sty.rectangle21)}
          />

          <div
            data-plasmic-name={"cwLogoSolidWhite1"}
            data-plasmic-override={overrides.cwLogoSolidWhite1}
            className={classNames(projectcss.all, sty.cwLogoSolidWhite1)}
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
                {(
                  hasVariant(globalVariants, "desktop", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <Group9Icon
                    className={classNames(projectcss.all, sty.svg__ysQyw)}
                    role={"img"}
                  />
                ) : null}
              </div>
            </div>
          </div>

          {(
            hasVariant(globalVariants, "desktop", "mobileOnly") ? true : true
          ) ? (
            <Line5Icon
              className={classNames(projectcss.all, sty.svg__wdjYd)}
              role={"img"}
            />
          ) : null}

          <div
            data-plasmic-name={
              "globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital"
            }
            data-plasmic-override={
              overrides.globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital
            }
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital
            )}
          >
            {
              "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures. Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. "
            }
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7Cx
            )}
          >
            {
              "Privacy Policy            Terms & Conditions            Cookie Policy"
            }
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aYr6F
            )}
          >
            {"Home\n\nAbout\n\nCalculators\n\nFeatures\n\nPartners"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__iljB3
            )}
          >
            {
              "Estate Planning\n\nFinancial Planning\n\nFudiciary Services\n\nProducts\n\nResources"
            }
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__rb5J
            )}
          >
            {
              "Our Technology\n\nDocumentation\n\nPresentations\n\nTutorials\n\nVersion History"
            }
          </div>

          {(
            hasVariant(globalVariants, "desktop", "mobileOnly") ? true : true
          ) ? (
            <Image5TracedIcon
              className={classNames(projectcss.all, sty.svg__izO1)}
              role={"img"}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "footer",
    "rectangle21",
    "cwLogoSolidWhite1",
    "b",
    "c",
    "globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital"
  ],
  footer: [
    "footer",
    "rectangle21",
    "cwLogoSolidWhite1",
    "b",
    "c",
    "globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital"
  ],
  rectangle21: ["rectangle21"],
  cwLogoSolidWhite1: ["cwLogoSolidWhite1", "b", "c"],
  b: ["b", "c"],
  c: ["c"],
  globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital:
    [
      "globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital"
    ]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  footer: "div";
  rectangle21: "div";
  cwLogoSolidWhite1: "div";
  b: "div";
  c: "div";
  globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footer: makeNodeComponent("footer"),
    rectangle21: makeNodeComponent("rectangle21"),
    cwLogoSolidWhite1: makeNodeComponent("cwLogoSolidWhite1"),
    b: makeNodeComponent("b"),
    c: makeNodeComponent("c"),
    globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital:
      makeNodeComponent(
        "globallyIncubateStandardsCompliantChannelsBeforeScalableBenefitsQuicklyDisseminateSuperiorDeliverablesWhereasWebEnabledApplicationsQuicklyDriveClicksAndMortarCatalystsForChangeBeforeVerticalArchitecturesCrediblyReintermediateBackendIdeasForCrossPlatformModelsContinuallyReintermediateIntegratedProcessesThroughTechnicallySoundIntellectualCapital"
      ),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
