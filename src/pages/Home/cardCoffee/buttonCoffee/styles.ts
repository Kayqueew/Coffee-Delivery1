import styled from 'styled-components'

export const ValueCoffee = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;

  label {
    padding-right: 3px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #574f4d;
  }

  label:nth-child(2) {
    padding-right: 23px;

    font-family: 'baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 31.1px;
    text-align: right;

    color: #574f4d;
  }

  input {
    width: 72px;
    height: 38px;

    text-align: center;

    border: 0;
    padding: 8px;

    padding-left: 20px;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-title']};

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      visibility: hidden;
      max-height: 0;
    }

    @media (max-width: 425px) {
      padding: 0;
    }
  }

  input:focus-visible {
    outline: none;
  }

  button:nth-child(6) {
    cursor: pointer;
    background: ${(props) => props.theme['purple-dark']};
    width: 38px;
    height: 38px;
    margin-left: 10px;
    border: 0;
    border-radius: 6px;
  }

  button:hover:nth-child(6) {
    background: ${(props) => props.theme.purple};
  }
`

export const ButtonLess = styled.button`
  display: inline-flex;
  position: absolute;

  margin-left: 9px;
  margin-top: 14px;
  border: 0;
  background: none;

  cursor: pointer;
`
export const ButtonMore = styled.button`
  display: inline-flex;
  position: absolute;

  margin-left: -26px;
  margin-top: 14px;

  border: 0;
  background: none;

  cursor: pointer;
`
