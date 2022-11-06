import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import styled from "styled-components";
import { COLORS } from "../../configs/colors";
import Button, { BUTTON_VARIANTS } from "../Button/Button";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
  postfixButtonProps?: {
    onClick?(e: MouseEvent<HTMLButtonElement>): void;
    children?: ReactNode;
  };
};

const StyledField = styled.input`
  background: none;
  border: none;
  padding: 26px 16px;
  width: 100%;

  color: ${COLORS.BW.black};
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;

  // FIXME: ?
  outline: none;
`;

const StyledDivider = styled.div`
  height: 1px;
  background: ${COLORS.faint.weakAdditional};
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

const Field: FC<Props> = ({
  value,
  onChange,
  postfixButtonProps,
  ...restProps
}) => (
  <>
    <FieldContainer>
      <StyledField
        type="text"
        value={value}
        onChange={onChange}
        {...restProps}
      />
      {postfixButtonProps?.children && (
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={postfixButtonProps.onClick}
        >
          {postfixButtonProps.children}
        </Button>
      )}
    </FieldContainer>
    <StyledDivider />
  </>
);

export default Field;
