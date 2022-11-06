import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  MouseEvent,
} from "react";
import styled from "styled-components";
import { COLORS } from "../../configs/colors";
import Typography, { TYPOGRAPHY_VARIANTS } from "../Typography/Typography";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  OUTLINE = "outline",
  TEXT = "text",
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BUTTON_VARIANTS;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  isBlock?: boolean;
};

const backgroundsVariant: Record<string, string> = {
  [BUTTON_VARIANTS.TEXT]: "none",
  [BUTTON_VARIANTS.PRIMARY]: COLORS.primary.strong,
  [BUTTON_VARIANTS.OUTLINE]: COLORS.primary.weak,
};

const colorsVariant: Record<string, string> = {
  [BUTTON_VARIANTS.PRIMARY]: COLORS.BW.white,
  [BUTTON_VARIANTS.OUTLINE]: COLORS.BW.black,
  [BUTTON_VARIANTS.TEXT]: COLORS.primary.strong,
};

const Button: FC<PropsWithChildren<Props>> = ({
  variant,
  onClick,
  isBlock,
  children,
  disabled,
  ...restProps
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    onClick && onClick(e);
  };

  return (
    <button disabled={disabled} onClick={onClick} {...restProps}>
      <Typography variant={TYPOGRAPHY_VARIANTS.BUTTON}>{children}</Typography>
    </button>
  );
};

const StyledButton = styled(Button)`
  background: ${({ variant }) =>
    variant ? backgroundsVariant[variant] : COLORS.primary.strong};
  border: ${({ variant }) =>
    variant === BUTTON_VARIANTS.OUTLINE
      ? "2px solid" + " " + COLORS.primary.strongBg
      : "none"};
  color: ${({ variant }) =>
    variant ? colorsVariant[variant] : COLORS.BW.white};
  text-transform: uppercase;
  border-radius: 12px;
  font-weight: ${({ variant }) =>
    variant === BUTTON_VARIANTS.TEXT ? "500" : "600"};
  font-size: ${({ variant }) =>
    variant === BUTTON_VARIANTS.TEXT ? "32px" : "16px"};
  line-height: 130%;
  padding: 17.5px 40px;
  cursor: ${(props) => !props.disabled && "pointer"};
  width: ${(props) => props.isBlock && "100%"};
  white-space: nowrap;
  height: fit-content;
`;

export default StyledButton;
