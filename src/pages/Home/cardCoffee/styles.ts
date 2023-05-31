import styled from 'styled-components'

export const Wrapped = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 54px;
  padding-right: 50px;
  flex-wrap: wrap;
  row-gap: 40px;

  @media (max-width: 425px) {
    padding: 60px;
  }
`

export const CoffeeCard = styled.div`
  /* background: #ede8df;  */
  background: ${(props) => props.theme['base-card']};

  width: 290px;
  height: auto;

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p:first-of-type {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    padding: 0;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    text-align: center;

    padding: 8px 20px 30px;
  }

  @media (max-width: 1400px) {
    width: 256px;
  }

  @media (max-width: 768px) {
    p:first-of-type {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }
`

export const HeaderCoffee = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -26px;
  }

  h1 {
    padding: 4px 8px;

    margin: 12px 0 16px;
    gap: 4px;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    gap: 4px;
  }

  @media (max-width: 1290px) {
    img {
      height: 120px;
    }
  }

  @media (max-width: 1100px) {
    img {
      height: 110px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 100px;
      margin-top: -30px;
    }

    h1 {
      font-size: 8px;
    }
  }
`

const BaseInput = styled.button`
  border: 0;
  font-size: 20px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  cursor: pointer;
`

export const NumberIncrementMore = styled(BaseInput)`
  position: relative;
  left: -22.35px;
`

export const NumberIncrementLess = styled(BaseInput)`
  position: relative;
  left: 18px;
  top: -1px;
  font-size: 30px;
`
