import styled from 'styled-components'

export const HeaderConteiner = styled.header`
  background: ${(props) => props.theme.white};
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;

  @media (min-width: 1900px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 1240px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 2rem 1rem;
  }
`
export const Wrapper = styled.div`
  display: flex;
  gap: 12px;

  span {
    position: absolute;
    top: 1.7rem;
    right: 3.6rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 999px;
    text-align: center;
    padding: 0.1rem;
    font-size: 0.8rem;

    color: white;
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 1240px) {
    span {
      right: 2.7rem;
    }
  }

  @media (max-width: 768px) {
    span {
      right: 1.7rem;
    }
  }

  @media (max-width: 425px) {
    span {
      right: 0.7rem;
    }
  }
`

export const Local = styled.div`
  width: 8.93rem;
  height: 2.3rem;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;

  line-height: 1.13rem;
  font-size: 0.843rem;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`
