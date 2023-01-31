import { useField } from 'formik';
import styled from 'styled-components';

import IconChecked from '../../assets/images/check.svg';

import { StyledText } from './TextInput';

const CheckBox = ({ name, text }) => {
  const [field] = useField(name);
  return (
    <CheckboxContainer>
      <StyledCheckbox type="checkbox" {...field} />
      <CheckBoxText>
        {text}
        <p>*</p>
      </CheckBoxText>
    </CheckboxContainer>
  );
};

export default CheckBox;

const StyledCheckbox = styled.input`
  appearance: none;
  border: 1px solid gainsboro;
  border-radius: 6px;
  width: 26px;
  height: 26px;
  &:checked {
    background-image: url(${IconChecked});
    background-size: 70% 75%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: transparent;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 18px;
    margin-top: 21px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 26px;
    margin-top: 25px;
  }
`;

const CheckBoxText = styled(StyledText)`
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    margin: 0 0 0 9px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 18px;
    margin: 0 0 0 12px;
  }
`;
