import styled from 'styled-components'

export const ConfirmedOrder = styled.div`
  background: ${(props) => props.theme.white};
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  height: 34.5rem;
  padding: 0 4rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};

    padding-top: 3rem;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    font-size: 1.25rem;
  }

  @media (min-width: 1900px) {
    padding: 0 10rem;
  }

  @media (max-width: 1240px) {
    padding: 0 2rem;
  }

  @media (max-width: 425px) {
    padding: 0 1rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`

export const OrderDelivery = styled.div`
  display: flex;

  div {
    margin-top: 40px;
    width: 526px;
    height: 280px;
    margin-right: 120px;
    border: 1px solid #dbac2c;

    border-radius: 6px 36px;
    border: double 1px transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  img:nth-child(2) {
    margin-top: 15px;
  }

  @media (max-width: 1100px) {
    img:nth-child(2) {
      height: 250px;
      margin-top: 40px;
    }
  }

  @media (max-width: 1015px) {
    img:nth-child(2) {
      height: 220px;
      margin-top: 35px;
    }

    div {
      height: 230px;
    }
  }

  @media (max-width: 970px) {
    img:nth-child(2) {
      height: 205px;
      margin-top: 30px;
    }

    div {
      height: 200px;
    }
  }

  @media (max-width: 845px) {
    img:nth-child(2) {
      height: 190px;
      margin-top: 35px;
    }
  }

  @media (max-width: 768px) {
    img:nth-child(2) {
      height: 180px;
      margin-top: 55px;
    }
  }

  @media (max-width: 425px) {
    img:nth-child(2) {
      height: 0px;
    }

    div {
      margin-right: 0;
    }
  }
`

export const OrderSection = styled.section`
  margin: 40px;
  display: flex;
  gap: 12px;

  p {
    gap: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 1015px) {
    p {
      font-size: 14px;
    }

    img:nth-child(1) {
      height: 23px;
    }

    margin: 30px;
  }

  @media (max-width: 970px) {
    margin: 20px;
  }

  @media (max-width: 425px) {
    p {
      font-size: 15px;
    }
  }
`
