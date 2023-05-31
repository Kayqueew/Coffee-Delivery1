export interface Coffee {
  id: string
  name: string
  coffee: any
  price: number
  quantity: number
  inputValue: any
  valorTotal: any
}

export interface Address {
  id: string
  Cep: string
  Rua: string
  Numero: string
  Complemento: string
  Bairro: string
  Cidade: string
  State: string
  Payment: string
}

export interface inputNumber {
  inputNumber: number
}

interface CyclesState {
  CardsBuy: Coffee[]
  CardId: string | null
  NewAddress: Address[]
  idNewAddress: string | null
  inputNumber: inputNumber[]
}

export enum ActionTypes {
  "ADD_NEW_BUY_CARD" = 'ADD_NEW_BUY_CARD',
  "DELETE_CARD" = 'DELETE_CARD',
  "ADD_NEW_ADDRESS" = 'ADD_NEW_ADDRESS',
  "INPUT_NUMBER" = 'INPUT_NUMBER',
  "ADD_NEW_INCREMENT" = 'ADD_NEW_INCREMENT'
}

export function cardsReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_BUY_CARD:
      const totalCard = state.CardsBuy.find(
        (card) => card.id === action.payload.id,
      )

      if (totalCard) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          CardsBuy: [...state.CardsBuy, action.payload.newBuyCard],
          CardId: action.payload.newBuyCard.id,
        }
      }

    case ActionTypes.DELETE_CARD:
      const Delete = state.CardsBuy.filter((card) => {
        return card.id != action.payload.idCard
      })

      return {
        ...state,
        CardsBuy: Delete,
      }

    case ActionTypes.ADD_NEW_ADDRESS:
      const DeleteAll = state.CardsBuy.filter((card) => {
        return card.quantity != 1
      })

      return {
        ...state,
        NewAddress: [...state.NewAddress, action.payload.Address],
        idNewAddress: action.payload.Address.id,
        CardsBuy: DeleteAll,
      }

    case ActionTypes.ADD_NEW_INCREMENT:

      const value = state.CardsBuy.find((card) => card.id === action.payload.id)
      const NewInputValue = value?.inputValue + action.payload.increment

      return {
        ...state,
        CardsBuy: state.CardsBuy.map((cycle) => {
          if (cycle.id === action.payload.id) {
            return {...cycle,  inputValue: NewInputValue}
          } else {
            return cycle
          }
        })
      }
      
    default:
      return state
  }
}
