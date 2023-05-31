import {
  SelectedCoffees,
  WrapCoffee,
  ButtonLess,
  ButtonMore,
  ButtonRemove,
} from './styles'
/* import { Cards } from '../../../Home/cardCoffee' */
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import { useForm } from 'react-hook-form'

interface test {
  id: string
  coffee: any
  price: number
  name: string
  inputValue: any
}

export function CardSelected({ id, coffee, price, name, inputValue }: test) {
  const { deleteCard, handleIncrementClick } = useContext(CyclesContext)

  const { register, setValue, getValues } = useForm({
    defaultValues: { numbers: inputValue },
  })

  function handleDecrementClick(fieldName: any, increment: number) {
    const currentValue = getValues(fieldName)

    if (currentValue + increment < 1) {
      DeleteCard()
    } else {
      setValue(fieldName, currentValue + increment)
    }

    handleIncrementClick(increment, id)
  }

  function DeleteCard() {
    deleteCard(id)
  }

  const total = price * inputValue

  return (
    <SelectedCoffees>
      <img src={coffee} alt="" />
      <WrapCoffee>
        <div>
          <p>{name}</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <div>
          <input
            type="number"
            {...register('numbers')}
            value={getValues('numbers')}
            disabled
          />
          <ButtonLess
            type="button"
            onClick={() => handleDecrementClick('numbers', -1)}
          >
            <Minus size={14} color="#8047f8" />
          </ButtonLess>

          <ButtonMore
            type="button"
            onClick={() => handleDecrementClick('numbers', +1)}
          >
            <Plus size={14} color="#8047f8" />
          </ButtonMore>

          <ButtonRemove onClick={DeleteCard}>
            <Trash size={16} color="#8047f8" />
            REMOVER
          </ButtonRemove>
        </div>
      </WrapCoffee>
    </SelectedCoffees>
  )
}
