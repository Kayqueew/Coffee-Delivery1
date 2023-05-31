import styled from 'styled-components'

export const SelectedCoffees = styled.div`
  width: 368px;

  display: flex;
  gap: 20px;

  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e6e5e5;

  img {
    height: 64px;
    width: 64px;
    padding-top: 8px;
  }

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    width: 325px;
    gap: 10px;
  }
`

export const WrapCoffee = styled.div`
  div:first-of-type {
    display: flex;
    justify-content: space-between;
  }

  div {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  p:first-of-type {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: #403937;

    width: 212px;

    padding-top: 9.5px;
  }

  p {
    width: 65px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 130%;

    color: #574f4d;

    padding-top: 8px;
  }

  input {
    width: 72px;
    height: 32px;

    /* margin-left: -30px;
 */
    text-align: center;

    border: 0;
    padding: 8px;

    padding-left: 19px;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-title']};

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      visibility: hidden;
      max-height: 0;
    }
  }

  input:focus-visible {
    outline: none;
  }

  @media (max-width: 425px) {
    input {
      padding-left: 5px;
    }
  }

  @media (max-width: 375px) {
    p:first-of-type {
      width: 195px;
    }
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 8px;
  gap: 4px;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  border: 0;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }
`

export const ButtonLess = styled.button`
  border: 0;
  height: 0;

  margin-left: -73px;
  margin-top: 7px;
  margin-right: 16px;

  cursor: pointer;
`
export const ButtonMore = styled.button`
  border: 0;
  height: 0;

  margin-top: 7px;
  margin-right: 15px;

  cursor: pointer;
`
