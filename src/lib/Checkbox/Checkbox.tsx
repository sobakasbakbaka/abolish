import {
  ChangeEvent,
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import styled from "styled-components";
import { COLORS } from "../../configs/colors";
import Typography, { TYPOGRAPHY_VARIANTS } from "../Typography/Typography";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  checked?: boolean;
  onChange?(e: ChangeEventHandler<HTMLInputElement>): void;
  label?: string;
};

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CustomMarker = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background: ${COLORS.secondary.strong};
  visibility: hidden;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  border: 2px solid ${COLORS.secondary.weak};
  border-radius: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${CustomMarker} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Title = styled.div`
  margin-left: 8px;
`;

const Checkbox: FC<Props> = ({
  checked = false,
  onChange,
  label,
  disabled,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    onChange && onChange(e);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <StyledCheckbox checked={checked}>
        <CustomMarker />
      </StyledCheckbox>
      {label && (
        <Title>
          <Typography variant={TYPOGRAPHY_VARIANTS.SUBTITLE} level="2">
            {label}
          </Typography>
        </Title>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
