import styled from 'styled-components'

export const HomeConteiner = styled.main`
  background: ${(props) => props.theme.white};
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4rem;

  /*  h2 img {
    width: 100%;
    height: 34.5rem;
    position: absolute;
    left: -40px;
    right: 0px;
    top: 3.6rem;
    bottom: 0px;
  } */

  @media (min-width: 1900px) {
    padding: 0 10rem;
  }

  @media (max-width: 1240px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`

export const Intro = styled.div`
  /* padding: 5.75rem 0;  */
  margin-top: 3rem;
  margin-bottom: 5.75rem;
  display: flex;

  img:nth-child(2) {
    height: 425px;
  }

  @media (max-width: 1300px) {
    img:nth-child(2) {
      height: 325px;
    }
  }

  @media (max-width: 1100px) {
    img:nth-child(2) {
      height: 270px;
    }
  }

  @media (max-width: 768px) {
    img:nth-child(2) {
      height: 230px;
    }
  }

  @media (max-width: 425px) {
    img:nth-child(2) {
      height: 0px;
    }

    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.div`
  /* width: 100vw;
height: 7.75; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  h1:first-of-type {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    text-overflow: ellipsis;
    color: ${(props) => props.theme['base-text']};
  }

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    font-stretch: 100;
  }

  @media (max-width: 1290px) {
    h1:first-of-type {
      font-size: 2.7rem;
    }

    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 1100px) {
    h1:first-of-type {
      font-size: 2.3rem;
    }

    h1 {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    h1:first-of-type {
      font-size: 1.9rem;
    }

    h1 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 425px) {
    img:nth-child(2) {
      height: 0px;
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 58px;

  p:first-of-type {
    padding-right: 43.5px;
  }

  p {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    padding-right: 40px;
    gap: 12px;

    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 1290px) {
    img {
      width: 1.8rem;
    }

    p {
      padding-bottom: 15px;
      padding-right: 21px;
    }

    p:first-of-type {
      padding-right: 25px;
    }
  }

  @media (max-width: 1100px) {
    img {
      width: 1.7rem;
    }
  }

  @media (max-width: 425px) {
    p:first-of-type {
      padding-right: 20px;
    }

    padding-top: 40px;
  }
`

export const CoffeeList = styled.div`
  background: ${(props) => props.theme.white};

  h2:first-of-type {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 425px) {
    h2:first-of-type {
      padding-left: 6.6rem;
    }
  }

  @media (max-width: 375px) {
    h2:first-of-type {
      padding-left: 6rem;
    }
  }
`
