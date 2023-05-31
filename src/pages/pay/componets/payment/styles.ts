import styled from 'styled-components'

interface PaymentButtonProps {
  checked: boolean
}

export const ButtonPay = styled.div`
  margin-top: 29px;

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 20px;
  }
`

export const LabelPay = styled.label<PaymentButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 178.67px;
  height: 51px;

  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  background: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  box-shadow: ${(props) =>
    props.checked ? '0 0 0 1px' + props.theme.purple : 'none'};

  input {
    opacity: 0;
    cursor: pointer;
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  @media (max-width: 1050px) {
    font-size: 10px;
  }

  @media (max-width: 425px) {
    width: 290px;
    font-size: 13.5px;
  }
`
