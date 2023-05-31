import styled from 'styled-components'

export const Address = styled.section`
  background: ${(props) => props.theme['base-card']};

  width: 640px;
  height: auto;
  padding: 40px;
  border-radius: 6px;

  margin-bottom: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 16px;

  div:first-of-type {
    margin-bottom: 10px;
    display: flex;
    gap: 8px;

    h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;

      color: #403937;
      display: block;
    }

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;

      color: #574f4d;
    }
  }

  @media (max-width: 1240px) {
    width: 550px;
    padding: 20px;
  }

  @media (max-width: 1050px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 640px;
    padding: 40px;
  }

  @media (max-width: 425px) {
    width: 400px;
    padding: 15px;
  }

  @media (max-width: 375px) {
    width: 350px;
    padding: 15px;
  }
`

const BaseInput = styled.input`
  border: 0;
  outline: none;

  height: 42px;

  padding: 12px;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    visibility: hidden;
    max-height: 0;
  }

  background: ${(props) => props.theme['base-input']};
  border: 1px solid #e6e5e5;
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: #8d8686;
`

export const CepInput = styled(BaseInput)`
  width: 200px;

  @media (max-width: 1240px) {
    width: 150px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }
`

export const RuaInput = styled(BaseInput)`
  width: 100%;
`
export const NúmeroInput = styled(BaseInput)`
  width: 200px;
  margin-right: 12px;

  @media (max-width: 1240px) {
    width: 150px;
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    width: 130px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-right: 12px;
  }

  @media (max-width: 425px) {
    width: 110px;
    margin-right: 12px;
  }

  @media (max-width: 375px) {
    width: 90px;
  }
`

export const ComplementoInput = styled(BaseInput)`
  width: 348px;

  @media (max-width: 1050px) {
    width: 320px;
  }

  @media (max-width: 425px) {
    width: 248px;
  }

  @media (max-width: 375px) {
    width: 218px;
  }
`

export const BairroInput = styled(BaseInput)`
  width: 200px;
  margin-right: 12px;

  @media (max-width: 1240px) {
    width: 150px;
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    width: 130px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin-right: 12px;
  }

  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 12px;
  }
`

export const CidadeInput = styled(BaseInput)`
  width: 276px;
  margin-right: 12px;

  @media (max-width: 1240px) {
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    width: 249px;
  }

  @media (max-width: 768px) {
    margin-right: 12px;
  }

  @media (max-width: 425px) {
    width: 298px;
  }

  @media (max-width: 375px) {
    width: 248px;
  }
`

export const StateInput = styled(BaseInput)`
  width: 60px;
  text-transform: uppercase;
`
