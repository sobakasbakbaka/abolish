import { ElementType } from "react";
import { Levels, TYPOGRAPHY_VARIANTS } from "./Typography";

export const defineComponent = (
  variant?: TYPOGRAPHY_VARIANTS,
  level?: Levels
): ElementType => {
  if (variant === TYPOGRAPHY_VARIANTS.BODY) {
    return "p";
  }

  if (variant === TYPOGRAPHY_VARIANTS.SUBTITLE) {
    return "p";
  }

  if (variant === TYPOGRAPHY_VARIANTS.HEADLINE) {
    return level ? `h${level}` : "h1";
  }

  if (variant === TYPOGRAPHY_VARIANTS.BUTTON) {
    return "div";
  }

  return "div";
};
