import styled from 'styled-components'

export const PayContent = styled.main`
  display: flex;

  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  margin-top: 40px;

  padding: 0 4rem;

  gap: 32px;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;

    display: flex;
    align-items: center;

    margin-bottom: 15px;

    color: #403937;
  }

  @media (min-width: 1900px) {
    padding: 0 10rem;
  }

  @media (max-width: 1240px) {
    padding: 0 3rem;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    display: block;
  }

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`

export const PayMant = styled.section`
  background: ${(props) => props.theme['base-card']};

  width: 640px;
  height: auto;
  padding: 40px;
  border-radius: 6px;

  div {
    display: flex;
    gap: 8px;
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: #403937;
    display: block;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  @media (max-width: 1240px) {
    width: 550px;
    padding: 20px;
  }

  @media (max-width: 1050px) {
    width: 505px;
  }

  @media (max-width: 768px) {
    width: 640px;
    padding: 40px;

    margin-bottom: 50px;
  }

  @media (max-width: 425px) {
    width: 400px;
    padding: 15px;

    p {
      font-size: 12.5px;
    }
  }

  @media (max-width: 375px) {
    width: 350px;
  }
`

export const PayCoffee = styled.section`
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 448px;
  height: auto;
  padding: 16px 40px 40px 40px;

  border-radius: 6px 44px;

  section {
    max-height: 381.9px;
    overflow-x: scroll;
    overflow-x: hidden;

    scrollbar-width: thin;
    scrollbar-color: transparent;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #d3d3d3;
      border-radius: 1000px;
    }
  }

  @media (max-width: 425px) {
    width: 400px;
    padding: 6px 10px 20px 10px;
    border-radius: 6px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }
`

export const ButtonConfirmed = styled.button`
  width: 368px;
  height: 46px;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};
  color: white;

  border: 0;

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 425px) {
    margin-left: 5px;
  }

  @media (max-width: 375px) {
    width: 325px;
  }
`
