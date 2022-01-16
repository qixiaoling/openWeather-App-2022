import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar ({setLocationBar}) {
    const [query, setQuery] = useState('');

    function handleOnClick (e) {
        e.preventDefault();//this was the reden nothing was rendered out!!!
        console.log(query);
        setLocationBar(query);

    }

    return (
        <form className='searchbar-form'>
           <input type="text"
                  placeholder="find a city"
                  value={query}
                  onChange={(e)=>setQuery(e.currentTarget.value)}
           />
            <button className='btn search-btn' onClick={handleOnClick}>GO!</button>
        </form>
    )
}
export default SearchBar;