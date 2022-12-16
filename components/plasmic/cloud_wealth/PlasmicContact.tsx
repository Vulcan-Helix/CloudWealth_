// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iST1GVY7MEDdpjnrPuCNJ
// Component: lb5bojnzK58b1B
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
import Header from "../../Header"; // plasmic-import: 9KxG1LQhTfZ-fr/component
import Footer from "../../Footer"; // plasmic-import: JfbLrw7cZCfTIu/component
import CwFooter from "../../CwFooter"; // plasmic-import: wco-GCH2Qp/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cloud_wealth.module.css"; // plasmic-import: 7iST1GVY7MEDdpjnrPuCNJ/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: lb5bojnzK58b1B/css

import Group10Icon from "./icons/PlasmicIcon__Group10"; // plasmic-import: chp6hT61Ry/icon
import Frame3Icon from "./icons/PlasmicIcon__Frame3"; // plasmic-import: b08VtbKLSP/icon

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  mainSection?: p.Flex<"div">;
  reachOutHero?: p.Flex<"div">;
  rectangle23?: p.Flex<"div">;
  group18?: p.Flex<"div">;
  gradient1?: p.Flex<"div">;
  layer2?: p.Flex<"div">;
  layer1?: p.Flex<"div">;
  rectangle?: p.Flex<"div">;
  rectangle26?: p.Flex<"div">;
  frame27?: p.Flex<"div">;
  rectangle31?: p.Flex<"div">;
  rectangle32?: p.Flex<"div">;
  button3?: p.Flex<"div">;
  button4?: p.Flex<"div">;
  blockquote?: p.Flex<"blockquote">;
  button?: p.Flex<"div">;
  button2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  pill?: p.Flex<"div">;
  pill2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
  cwFooter?: p.Flex<typeof CwFooter>;
};

export interface DefaultContactProps {}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div
              data-plasmic-name={"reachOutHero"}
              data-plasmic-override={overrides.reachOutHero}
              className={classNames(projectcss.all, sty.reachOutHero)}
            >
              <div
                data-plasmic-name={"rectangle23"}
                data-plasmic-override={overrides.rectangle23}
                className={classNames(projectcss.all, sty.rectangle23)}
              />

              <div
                data-plasmic-name={"group18"}
                data-plasmic-override={overrides.group18}
                className={classNames(projectcss.all, sty.group18)}
              >
                <div
                  data-plasmic-name={"gradient1"}
                  data-plasmic-override={overrides.gradient1}
                  className={classNames(projectcss.all, sty.gradient1)}
                >
                  <div
                    data-plasmic-name={"layer2"}
                    data-plasmic-override={overrides.layer2}
                    className={classNames(projectcss.all, sty.layer2)}
                  >
                    <div
                      data-plasmic-name={"layer1"}
                      data-plasmic-override={overrides.layer1}
                      className={classNames(projectcss.all, sty.layer1)}
                    >
                      <div
                        data-plasmic-name={"rectangle"}
                        data-plasmic-override={overrides.rectangle}
                        className={classNames(projectcss.all, sty.rectangle)}
                      />
                    </div>
                  </div>
                </div>

                <div
                  data-plasmic-name={"rectangle26"}
                  data-plasmic-override={overrides.rectangle26}
                  className={classNames(projectcss.all, sty.rectangle26)}
                />
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h7Skn
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#197BD2" }}
                  >
                    {"Reach Out"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#197BD2" }}
                  >
                    {"to Us "}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#A8A0D9" }}
                  >
                    {"Today"}
                  </span>
                </React.Fragment>
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame27"}
                data-plasmic-override={overrides.frame27}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame27)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cgbUu
                  )}
                >
                  {
                    "Let’s connect and discuss your financial options and plan for your future as well as the future of the next generations to come."
                  }
                </div>
              </p.Stack>

              <div
                data-plasmic-name={"rectangle31"}
                data-plasmic-override={overrides.rectangle31}
                className={classNames(projectcss.all, sty.rectangle31)}
              />

              <div
                data-plasmic-name={"rectangle32"}
                data-plasmic-override={overrides.rectangle32}
                className={classNames(projectcss.all, sty.rectangle32)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"button3"}
                  data-plasmic-override={overrides.button3}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.button3)}
                >
                  <div
                    data-plasmic-name={"button4"}
                    data-plasmic-override={overrides.button4}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.button4
                    )}
                  >
                    {"Contact Sales"}
                  </div>
                </p.Stack>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z2SbY
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__iTxmb
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#FEFEFE" }}
                        >
                          {"Specialized Sales Support"}
                        </span>
                      </React.Fragment>
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FEFEFE" }}
                  >
                    {""}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <blockquote
                      data-plasmic-name={"blockquote"}
                      data-plasmic-override={overrides.blockquote}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.blockquote
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#FEFEFE" }}
                        >
                          {
                            "For business with more than 5 advisors and 5 assistants, we have a tailored and bespoke offering with discounted licensing fees. Make an appointment with a sales specialist to explore this option. "
                          }
                        </span>
                      </React.Fragment>
                    </blockquote>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Vy9P
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__gs3QK
                      )}
                    >
                      <React.Fragment>
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                          style={{ color: "#FFFFFF" }}
                        >
                          {"How About We Show You?"}
                        </span>
                      </React.Fragment>
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {""}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {
                      "Not sure if this will work for your business? Why not book a demo for us to show you how effective the tool is for Financial Advisors, Trustees and FIduciary Specialists. "
                    }
                  </span>
                </React.Fragment>
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__z1JpT)}
                displayHeight={"60px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"41.782px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cloud_wealth/images/frame7.svg",
                  fullWidth: 41.782,
                  fullHeight: 60,
                  aspectRatio: 0.7
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__xDh93)}
                displayHeight={"60px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"68.93px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cloud_wealth/images/frame6.svg",
                  fullWidth: 68.93,
                  fullHeight: 60,
                  aspectRatio: 1.15
                }}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                hasGap={true}
                className={classNames(projectcss.all, sty.button)}
              >
                <div
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.button2
                  )}
                >
                  {"Meet with an Advisor"}
                </div>
              </p.Stack>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mHfKx
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Contact the right people"}
                    </h1>
                  }
                  <React.Fragment>
                    {
                      "\nLeverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"pill"}
                data-plasmic-override={overrides.pill}
                hasGap={true}
                className={classNames(projectcss.all, sty.pill)}
              >
                <div
                  data-plasmic-name={"pill2"}
                  data-plasmic-override={overrides.pill2}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.pill2
                  )}
                >
                  {"get in touch"}
                </div>
              </p.Stack>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__thTnm
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__hOHpU
                      )}
                    >
                      {"Sales & Development"}
                    </h6>
                  }
                  <React.Fragment>{"sales@cloudwealth.io"}</React.Fragment>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xAKdr
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__oVvIf
                      )}
                    >
                      {"Financial Advisors"}
                    </h6>
                  }
                  <React.Fragment>{"advisors@cloudwealth.io"}</React.Fragment>
                </React.Fragment>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b2RW8
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h6
                      className={classNames(
                        projectcss.all,
                        projectcss.h6,
                        projectcss.__wab_text,
                        sty.h6__dOx4Q
                      )}
                    >
                      {"Customer Care"}
                    </h6>
                  }
                  <React.Fragment>{"care@cloudwealth.io"}</React.Fragment>
                </React.Fragment>
              </div>

              <Group10Icon
                className={classNames(projectcss.all, sty.svg___7Hikd)}
                role={"img"}
              />

              <Group10Icon
                className={classNames(projectcss.all, sty.svg__vymRc)}
                role={"img"}
              />

              <Group10Icon
                className={classNames(projectcss.all, sty.svg___3Nt7S)}
                role={"img"}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__duc8T)}
                displayHeight={"37px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"42px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cloud_wealth/images/frame5.svg",
                  fullWidth: 42,
                  fullHeight: 37,
                  aspectRatio: 1.135135
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__eTf4A)}
                displayHeight={"25px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"43px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/cloud_wealth/images/frame4.svg",
                  fullWidth: 43,
                  fullHeight: 25,
                  aspectRatio: 1.72
                }}
              />

              <Frame3Icon
                className={classNames(projectcss.all, sty.svg___0SoxB)}
                role={"img"}
              />
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />

          <CwFooter
            data-plasmic-name={"cwFooter"}
            data-plasmic-override={overrides.cwFooter}
            className={classNames("__wab_instance", sty.cwFooter)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "mainSection",
    "reachOutHero",
    "rectangle23",
    "group18",
    "gradient1",
    "layer2",
    "layer1",
    "rectangle",
    "rectangle26",
    "frame27",
    "rectangle31",
    "rectangle32",
    "button3",
    "button4",
    "blockquote",
    "button",
    "button2",
    "h1",
    "pill",
    "pill2",
    "footer",
    "cwFooter"
  ],
  header: ["header"],
  mainSection: [
    "mainSection",
    "reachOutHero",
    "rectangle23",
    "group18",
    "gradient1",
    "layer2",
    "layer1",
    "rectangle",
    "rectangle26",
    "frame27",
    "rectangle31",
    "rectangle32",
    "button3",
    "button4",
    "blockquote",
    "button",
    "button2",
    "h1",
    "pill",
    "pill2"
  ],
  reachOutHero: [
    "reachOutHero",
    "rectangle23",
    "group18",
    "gradient1",
    "layer2",
    "layer1",
    "rectangle",
    "rectangle26",
    "frame27",
    "rectangle31",
    "rectangle32",
    "button3",
    "button4",
    "blockquote",
    "button",
    "button2",
    "h1",
    "pill",
    "pill2"
  ],
  rectangle23: ["rectangle23"],
  group18: [
    "group18",
    "gradient1",
    "layer2",
    "layer1",
    "rectangle",
    "rectangle26"
  ],
  gradient1: ["gradient1", "layer2", "layer1", "rectangle"],
  layer2: ["layer2", "layer1", "rectangle"],
  layer1: ["layer1", "rectangle"],
  rectangle: ["rectangle"],
  rectangle26: ["rectangle26"],
  frame27: ["frame27"],
  rectangle31: ["rectangle31"],
  rectangle32: ["rectangle32", "button3", "button4"],
  button3: ["button3", "button4"],
  button4: ["button4"],
  blockquote: ["blockquote"],
  button: ["button", "button2"],
  button2: ["button2"],
  h1: ["h1"],
  pill: ["pill", "pill2"],
  pill2: ["pill2"],
  footer: ["footer"],
  cwFooter: ["cwFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  mainSection: "div";
  reachOutHero: "div";
  rectangle23: "div";
  group18: "div";
  gradient1: "div";
  layer2: "div";
  layer1: "div";
  rectangle: "div";
  rectangle26: "div";
  frame27: "div";
  rectangle31: "div";
  rectangle32: "div";
  button3: "div";
  button4: "div";
  blockquote: "blockquote";
  button: "div";
  button2: "div";
  h1: "h1";
  pill: "div";
  pill2: "div";
  footer: typeof Footer;
  cwFooter: typeof CwFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContact__ArgsType,
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    mainSection: makeNodeComponent("mainSection"),
    reachOutHero: makeNodeComponent("reachOutHero"),
    rectangle23: makeNodeComponent("rectangle23"),
    group18: makeNodeComponent("group18"),
    gradient1: makeNodeComponent("gradient1"),
    layer2: makeNodeComponent("layer2"),
    layer1: makeNodeComponent("layer1"),
    rectangle: makeNodeComponent("rectangle"),
    rectangle26: makeNodeComponent("rectangle26"),
    frame27: makeNodeComponent("frame27"),
    rectangle31: makeNodeComponent("rectangle31"),
    rectangle32: makeNodeComponent("rectangle32"),
    button3: makeNodeComponent("button3"),
    button4: makeNodeComponent("button4"),
    blockquote: makeNodeComponent("blockquote"),
    button: makeNodeComponent("button"),
    button2: makeNodeComponent("button2"),
    h1: makeNodeComponent("h1"),
    pill: makeNodeComponent("pill"),
    pill2: makeNodeComponent("pill2"),
    footer: makeNodeComponent("footer"),
    cwFooter: makeNodeComponent("cwFooter"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */