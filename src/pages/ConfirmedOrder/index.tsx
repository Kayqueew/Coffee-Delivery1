import { ConfirmedOrder, OrderDelivery, OrderSection } from './styles'
import deliveryman from '../../assets/deliveryman.svg'
import dollarSing from '../../assets/dollarSing.svg'
import localdelivery from '../../assets/localdelivery.svg'
import timerdelivery from '../../assets/timerdelivery.svg'
import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'

export function Order() {
  const { NewAddress, idNewAddress } = useContext(CyclesContext)

  const card = NewAddress.find((cycle) => cycle.id === idNewAddress)

  return (
    <ConfirmedOrder>
      <h1>uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderDelivery>
        <div>
          <OrderSection>
            <img src={localdelivery} alt="" />
            <p>
              Entrega em&nbsp;{''}
              <strong>
                {card?.Rua}, {card?.Numero}
              </strong>
              <p>
                {card?.Bairro} - {card?.Cidade}, {card?.State}
              </p>
            </p>
          </OrderSection>

          <OrderSection>
            <img src={timerdelivery} alt="" />
            <p>
              Previsão de entrega
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </p>
          </OrderSection>

          <OrderSection>
            <img src={dollarSing} alt="" />
            <p>
              Pagamento na entrega
              <p>
                <strong>{card?.Payment}</strong>
              </p>
            </p>
          </OrderSection>
        </div>
        <img src={deliveryman} alt="" />
      </OrderDelivery>
    </ConfirmedOrder>
  )
}
