import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import styled from "styled-components";
import { COLORS } from "../../configs/colors";

export enum BUTTONS_VARIANT {
  PRIMARY = "primary",
  OUTLINE = "outline",
  TEXT = "text",
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BUTTONS_VARIANT;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isBlock?: boolean;
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
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  background: ${(props) => {
    switch (props.variant) {
      case BUTTONS_VARIANT.PRIMARY: {
        return COLORS.primary.strong;
      }
      case BUTTONS_VARIANT.OUTLINE: {
        return COLORS.primary.weak;
      }
      case BUTTONS_VARIANT.TEXT: {
        return "none";
      }
      default:
        return COLORS.primary.strong;
    }
  }};
  border: ${(props) =>
    props.variant === BUTTONS_VARIANT.OUTLINE
      ? "2px solid" + " " + COLORS.primary.strongBg
      : "none"};
  text-transform: uppercase;
  border-radius: 12px;
  color: ${(props) => {
    switch (props.variant) {
      case BUTTONS_VARIANT.OUTLINE: {
        return COLORS.BW.black;
      }
      case BUTTONS_VARIANT.TEXT: {
        return COLORS.primary.strong;
      }
      default:
        return COLORS.BW.white;
    }
  }};
  font-weight: ${(props) =>
    props.variant === BUTTONS_VARIANT.TEXT ? "500" : "600"};
  font-size: ${(props) =>
    props.variant === BUTTONS_VARIANT.TEXT ? "32px" : "16px"};
  line-height: 130%;
  padding: 17.5px 40px;
  cursor: ${(props) => !props.disabled && "pointer"};
  width: ${(props) => props.isBlock && '100%'};
`;

export default StyledButton;
