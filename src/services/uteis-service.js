

const FormataData = ( data ) => {

  if(data == null || data.length < 1)
    return '';
  
  const date = new Date(data)
  const mes = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
  const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  return `${dia}/${mes}/${date.getFullYear()}`
}

export default FormataData
