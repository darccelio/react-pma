

const formataData = ( data ) => {
  const date = new Date(data)
  const mes = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
  const dia = data.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  return `${dia}/${mes}/${date.getFullYear()}`
}

export default formataData
