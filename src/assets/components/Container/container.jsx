import Searchbar from '../SearchBar/searchbar'

function Container({children}) {
  return (
    <div id="container">
      <Searchbar /> 

      {children}

    </div>
  )
}

export default Container