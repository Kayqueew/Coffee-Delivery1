import { MapPinLine } from 'phosphor-react'
import {
  Address,
  BairroInput,
  CepInput,
  CidadeInput,
  ComplementoInput,
  NúmeroInput,
  RuaInput,
  StateInput,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function AddRess() {
  const { register } = useFormContext()

  return (
    <Address>
      <div>
        <MapPinLine size={22} color="#c47f17" />
        <h1>
          Endereço da Entrega
          <p>Informe o endereço onde deseja receber o pedido</p>
        </h1>
      </div>

      <CepInput
        id="CepInput"
        placeholder="CEP"
        required
        pattern="\d{5}-?\d{3}"
        {...register('CepInput')}
      />

      <RuaInput
        type="text"
        placeholder="Rua"
        required
        {...register('RuaInput')}
      />

      <div>
        <NúmeroInput
          type="Number"
          placeholder="Número"
          pattern="\d{3}"
          required
          {...register('NumeroInput')}
        />

        <ComplementoInput
          type="text"
          placeholder="Complemento"
          {...register('ComplementoInputt')}
        />
      </div>

      <div>
        <BairroInput
          type="text"
          placeholder="Bairro"
          required
          {...register('BairroInput')}
        />

        <CidadeInput
          type="text"
          placeholder="Cidade"
          required
          {...register('CidadeInput')}
        />

        <StateInput
          type="text"
          maxLength={2}
          placeholder="UF"
          required
          {...register('StateInput')}
        />
      </div>
    </Address>
  )
}
