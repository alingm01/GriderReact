import './SearchBar.css'
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleSubmitForm = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={ handleSubmitForm }>
        <label>
          Enter Search Term
        </label>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchBar;