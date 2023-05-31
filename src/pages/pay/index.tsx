import { useContext } from 'react'
import { CurrencyDollar } from 'phosphor-react'
import * as zod from 'zod'

import { CyclesContext } from '../../context/CyclesContext'
import { CardSelected } from './componets/cardSelected'
import { PriceCoffee } from './componets/pricesCoffee'
import { Payment } from './componets/payment'
import { AddRess } from './componets/address'
import { useForm, FormProvider } from 'react-hook-form'

import { PayContent, PayCoffee, PayMant, ButtonConfirmed } from './styles'
import { useNavigate } from 'react-router-dom'

const newAddressFormValition = zod.object({
  CepInput: zod.string().min(8),
  RuaInput: zod.string().min(1),
  NumeroInput: zod.string().min(3),
  ComplementoInput: zod.string().min(0),
  BairroInput: zod.string().min(1),
  CidadeInput: zod.string().min(1),
  StateInput: zod.string().min(1),
  Payment: zod.string(),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValition>

export function Pay() {
  const Navigate = useNavigate()
  const { CardsBuy, CreateAddress, CardId } = useContext(CyclesContext)

  const activeCard = CardsBuy.find((cycle) => cycle.id === CardId)

  const newAddressForm = useForm<NewAddressFormData>({
    /* resolver: zodResolver(newAddressFormValition),  */
    /*  defaultValues: {
        CepInput: '',
        RuaInput: '',
        NumeroInput: '',
        BairroInput: '', 
        CidadeInput: '', 
        StateInput: '',
      }, */
  })

  const { handleSubmit, reset } = newAddressForm

  function handleCreateAddress(date: NewAddressFormData) {
    if (date.Payment === null) {
      alert('Escolha a forma de pagamento')
      /* Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
        }) */
    }
    if (activeCard === undefined) {
      alert('Selecione um produto')
    } else {
      CreateAddress(date)
      Navigate('/confirmedorder')
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateAddress)}>
      <PayContent>
        <article>
          <h1>Complete o seu pedido</h1>
          <FormProvider {...newAddressForm}>
            <AddRess /> {/* endereços */}
          </FormProvider>

          <PayMant>
            <div>
              <CurrencyDollar size={22} color="#8047f8" />
              <h1>
                Pagamento
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </h1>
            </div>

            <FormProvider {...newAddressForm}>
              <Payment /> {/* pagamentos */}
            </FormProvider>
          </PayMant>
        </article>

        <article>
          <h1>Cafés selecionados</h1>

          <PayCoffee>
            <section>
              {CardsBuy.map((item) => {
                return (
                  <div key={item.id}>
                    <CardSelected
                      id={item.id}
                      coffee={item.coffee}
                      name={item.name}
                      price={item.price}
                      inputValue={item.inputValue}
                    />
                  </div>
                )
              })}
            </section>

            <PriceCoffee />

            <ButtonConfirmed type="submit">CONFIRMAR PEDIDO</ButtonConfirmed>
          </PayCoffee>
        </article>
      </PayContent>
    </form>
  )
}
