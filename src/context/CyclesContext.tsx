import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { v4 } from 'uuid'

import { Cards } from '../../src/pages/Home/cardCoffee/index'
import { cardsReducer, ActionTypes, Coffee, Address } from '../reduces/cycles'

export interface coffee {
  id: string
  coffee?: any
  tag: any
  tag2?: string
  name: string
  description: string
}

interface CyclesContextType {
  createNewCardCoffee: (id: string, date: any) => void
  CardsBuy: Coffee[]
  CardId: string
  Cards: coffee[]
  deleteCard: (id: string) => void
  CreateAddress: (id: any) => void
  NewAddress: Address[]
  idNewAddress: string
  handleIncrementClick: (increment: number, id: any) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface TestContex {
  children: ReactNode
}

export function CyclesContextProvider({ children }: TestContex) {
  const [CardState, dispatch] = useReducer(
    cardsReducer,
    {
      CardsBuy: [],
      CardId: null,
      NewAddress: [],
      idNewAddress: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@Coffee-delivery:Cards-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { CardsBuy, CardId, NewAddress, idNewAddress } = CardState

  useEffect(() => {
    const stateJSOM = JSON.stringify(CardState)

    localStorage.setItem('@Coffee-delivery:Cards-state-1.0.0', stateJSOM)
  }, [CardState])

  function createNewCardCoffee(id: string, data: any) {
    const card = Cards.find((cycle) => cycle.id === id)

    const newBuyCard = {
      id: card?.id,
      coffee: card?.coffee,
      name: card?.name,
      price: card?.price,
      quantity: 1,
      inputValue: data?.numberCoffee,
    }

    dispatch({
      type: ActionTypes.ADD_NEW_BUY_CARD,
      payload: {
        newBuyCard,
        id,
      },
    })
  }

  function deleteCard(idCard: string) {
    dispatch({
      type: ActionTypes.DELETE_CARD,
      payload: {
        idCard,
      },
    })
  }

  function CreateAddress(id: any) {
    const Address = {
      id: v4(),
      Cep: id.CepInput,
      Rua: id.RuaInput,
      Numero: id.NumeroInput,
      Complemento: id.ComplementoInput,
      Bairro: id.BairroInput,
      Cidade: id.CidadeInput,
      State: id.StateInput,
      Payment: id.Payment,
    }

    dispatch({
      type: ActionTypes.ADD_NEW_ADDRESS,
      payload: {
        Address,
      },
    })
  }

  function handleIncrementClick(increment: number, id: any) {
    dispatch({
      type: ActionTypes.ADD_NEW_INCREMENT,
      payload: {
        increment,
        id,
      },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        createNewCardCoffee,
        CardsBuy,
        CardId,
        Cards,
        deleteCard,
        CreateAddress,
        NewAddress,
        idNewAddress,
        handleIncrementClick,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
