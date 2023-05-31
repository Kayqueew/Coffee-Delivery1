import { CoffeeCard, HeaderCoffee, Wrapped } from './styles'
import { ButtonCoffee } from './buttonCoffee'
import { Card } from '../../../produtos/products'

interface Coffee {
  id: string
  coffee: any
  tag: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  price: number
}

export const Cards: Coffee[] = Card

export function CoffeeCards() {
  return (
    <Wrapped>
      {Cards.map((line) => {
        return (
          <CoffeeCard key={line.id}>
            <HeaderCoffee>
              <img src={line.coffee} alt="" />
              {line.tag2 ? (
                <div>
                  <h1>{line?.tag}</h1>
                  <h1>{line?.tag2}</h1>

                  {line.tag3 ? <h1>{line?.tag3}</h1> : null}
                </div>
              ) : (
                <h1>{line.tag}</h1>
              )}
            </HeaderCoffee>

            <p>{line.name}</p>
            <p>{line.description}</p>

            <ButtonCoffee id={line.id} valor={line.price} />
          </CoffeeCard>
        )
      })}
    </Wrapped>
  )
}
