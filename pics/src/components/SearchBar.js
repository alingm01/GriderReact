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
    <div>
      <form onSubmit={ handleSubmitForm }>
        <input value={term} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;