import { useContext } from 'react'
import { PricesCoffee } from './styles'
import { CyclesContext } from '../../../../context/CyclesContext'

export function PriceCoffee() {
  const { CardsBuy, CardId } = useContext(CyclesContext)

  const activeCard = CardsBuy.find((cycle) => cycle.id === CardId)

  const total = CardsBuy?.reduce(
    (a: number, b: any) => a + b.price * b.inputValue,
    0,
  )
  /* const entrega = 3.5 */

  if (activeCard === undefined) {
    var entrega = 0
  } else {
    var entrega = 3.5
  }

  const valueTotal = entrega + total

  return (
    <PricesCoffee>
      <div>
        <p>Total de itens</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <div>
        <p>Entrega</p>
        <p>R$ 3,50</p>
      </div>

      <div>
        <h1>Total</h1>

        <h1>R$ {valueTotal.toFixed(2)}</h1>
      </div>
    </PricesCoffee>
  )
}
