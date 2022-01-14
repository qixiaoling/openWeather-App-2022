import React, {useState} from 'react';

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
            <button onClick={handleOnClick}>GO!</button>
        </form>
    )
}
export default SearchBar;