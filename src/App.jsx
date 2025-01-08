import { Navbar } from "./Components/Navbar"
import { Newsboard } from "./Components/Newsboard"
import { useState } from "react"


export const App = () => {
  const [category, setCategory] = useState('general');
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <Navbar setCategory={setCategory} setSearchResults={setSearchResults}/>
      <Newsboard category={category} searchResults={searchResults}/>
    </div>
  )
}

export default App