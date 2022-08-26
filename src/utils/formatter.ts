const currencyFormat = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const priceFormatter = (price: number) => {
  return currencyFormat.format(price)
}

const dateFormat = new Intl.DateTimeFormat('pt-BR')

export const dateFormatter = (value: string) => {
  return dateFormat.format(new Date(value))
}
