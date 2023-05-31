import { useForm } from 'react-hook-form'

import { ButtonLess, ButtonMore, ValueCoffee } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

interface CoffeeId {
  id: string
  valor: number
}

export function ButtonCoffee({ id, valor }: CoffeeId) {
  const { createNewCardCoffee } = useContext(CyclesContext)

  const { register, handleSubmit, reset, setValue, getValues } = useForm({
    defaultValues: { numberCoffee: 0 },
  })

  function handleDecrementClick(fieldName: any, increment: number) {
    const currentValue = getValues(fieldName)

    if (currentValue + increment >= 0) {
      setValue(fieldName, currentValue + increment)
    }
  }

  function handleCreateNewCoffee(data: any) {
    createNewCardCoffee(id, data)
    reset()
  }

  return (
    <ValueCoffee>
      <form onSubmit={handleSubmit(handleCreateNewCoffee)}>
        <label htmlFor="numberCoffee">R$ </label>
        <label htmlFor="numberCoffee">{valor.toFixed(2)}</label>

        <ButtonLess
          type="button"
          onClick={() => handleDecrementClick('numberCoffee', -1)}
        >
          <Minus size={14} color="#8047f8" />
        </ButtonLess>

        <input
          type="number"
          id="numberCoffee"
          min={1}
          max={100}
          {...register('numberCoffee')}
          value={getValues('numberCoffee')}
        />

        <ButtonMore
          type="button"
          onClick={() => handleDecrementClick('numberCoffee', +1)}
        >
          <Plus size={14} color="#8047f8" />
        </ButtonMore>

        <button type="submit">
          <ShoppingCartSimple size={19} color="white" weight="fill" />
        </button>
      </form>
    </ValueCoffee>
  )
}
