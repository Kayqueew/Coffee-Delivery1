import { ButtonPay, LabelPay } from './styles'
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import money from '../../../../assets/money.svg'
import credit from '../../../../assets/credit-card.svg'

export function Payment() {
  const { register } = useFormContext()

  const [buttonChecked, setButtonChecked] = useState('')

  function handleButtonChecked(payment: string) {
    setButtonChecked(payment)

    if (payment.length === 0) {
      alert('ddf')
    }
  }

  return (
    <>
      <ButtonPay>
        <LabelPay htmlFor="debitCard" checked={buttonChecked === 'debit card'}>
          <img src={credit} alt="" /> CARTÂO DE DÉBITO
          <input
            type="radio"
            id="debitCard"
            value={'Cartão de débito'}
            onClick={() => handleButtonChecked('debit card')}
            {...register('Payment')}
          />
        </LabelPay>

        <LabelPay
          htmlFor="creditCard"
          checked={buttonChecked === 'credit card'}
        >
          {' '}
          <img src={credit} alt="" /> CARTÃO DE CRÉDITO
          <input
            type="radio"
            id="creditCard"
            value={'Cartão de crédito'}
            onClick={() => handleButtonChecked('credit card')}
            {...register('Payment')}
          />
        </LabelPay>

        <LabelPay htmlFor="money" checked={buttonChecked === 'money'}>
          {' '}
          <img src={money} alt="" /> DINHEIRO
          <input
            type="radio"
            id="money"
            value={'Dinheiro'}
            onClick={() => handleButtonChecked('money')}
            {...register('Payment')}
          />
        </LabelPay>
      </ButtonPay>
    </>
  )
}
