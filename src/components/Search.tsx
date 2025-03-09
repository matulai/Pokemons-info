import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Search = () => {
  const navigate = useNavigate();

  const [ text, setText] = useState('');

  function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (text) {
        navigate(`/pokemon/${text}`);
      }
    }
  };

  return(
    <div className='search-input'>
      <div className='search-input-text'>Search pokemon</div>
      <input 
        type='search'
        onChange={e => setText(e.target.value)}
        onKeyDown={onEnter}
        className='search-input-pokemons'
        placeholder='search pokemon'
      />
    </div>
  )
}

export default Search;