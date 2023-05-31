import styled from 'styled-components'

export const PricesCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 368px;

  margin: 24px 0 15px;

  div {
    display: flex;
    justify-content: space-between;
  }

  p:first-of-type {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    color: #574f4d;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: #574f4d;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;

    color: #403937;
  }

  @media (max-width: 425px) {
    margin-left: 5px;
  }

  @media (max-width: 375px) {
    width: 325px;
  }
`
