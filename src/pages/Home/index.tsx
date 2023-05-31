import { CoffeeList, HomeConteiner, Intro, Items, Title } from './styles'
import Coffe from '../../assets/CoffeImagem.svg'
import cartItems from '../../assets/cart Items.svg'
import coffe from '../../assets/coffe.svg'
import packaging from '../../assets/packaging.svg'
import timer from '../../assets/timer.svg'
/* import back from '../../assets/background.svg' */
import { CoffeeCards } from './cardCoffee/index'

export function Home() {
  return (
    <HomeConteiner>
      {/*  <h2>
        <img src={back} alt="" />
      </h2> */}
      <Intro>
        <Title>
          <h1>Encontre o Café perfeito para qualquer hora do dia</h1>
          <h1>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora{' '}
          </h1>
          <Items>
            <p>
              <img src={cartItems} alt="" /> Compra Simples e segura{' '}
            </p>
            <p>
              <img src={packaging} alt="" /> Embalagem mantém o café intacto
            </p>
            <p>
              <img src={timer} alt="" /> Entrega rápida e rastreada
            </p>
            <p>
              <img src={coffe} alt="" /> O café chega fresquinho até você
            </p>
          </Items>
        </Title>
        <img src={Coffe} alt="" />
      </Intro>

      <CoffeeList>
        <h2>Nossos cafés</h2>
        <CoffeeCards />
      </CoffeeList>
    </HomeConteiner>
  )
}
