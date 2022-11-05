import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactHTML,
  ElementType,
} from "react";
import styled from "styled-components";
import { defineComponent } from "./helpers";
import { LEVELS } from "./constants";

export enum TYPOGRAPHY_VARIANTS {
  HEADLINE = "headline",
  SUBTITLE = "subtitle",
  BODY = "body",
  BUTTON = "button",
}

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant?: TYPOGRAPHY_VARIANTS;
  level?: typeof LEVELS[number];
};

const Typography: FC<PropsWithChildren<Props>> = ({
  variant,
  level,
  children,
  ...restProps
}) => {
  const Component = defineComponent(variant, level);

  return <Component {...restProps}>{children}</Component>;
};

const StylesTypography = styled(Typography)`
  font-size: ${(props) =>
    props.variant === TYPOGRAPHY_VARIANTS.HEADLINE &&
    props.level === "1" &&
    "80px"};
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export default StylesTypography;
