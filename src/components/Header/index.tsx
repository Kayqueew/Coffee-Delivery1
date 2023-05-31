import { HeaderConteiner, Local, Wrapper } from './styles'

import logo from '../../assets/logo.svg'
import Cart from '../../assets/Cart.svg'
import local from '../../assets/local.svg'

import { NavLink } from 'react-router-dom'
import { CyclesContext } from '../../context/CyclesContext'
import { useContext } from 'react'

export function Header() {
  const { CardsBuy } = useContext(CyclesContext)

  const totalItems = CardsBuy?.reduce((a: number, b: any) => a + b.quantity, 0)

  return (
    <HeaderConteiner>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <Wrapper>
        <Local>
          <img src={local} alt="" />
          Rio de Janeiro, RJ
        </Local>
        <NavLink to="/pay">
          {CardsBuy.length !== 0 ? <span>{totalItems}</span> : ''}
          <img src={Cart} alt="" />
        </NavLink>
      </Wrapper>
    </HeaderConteiner>
  )
}
