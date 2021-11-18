import { useState, useContext} from 'react';
import './style.css';
import { Contexto } from '../../Context';

const Search = () => {

    const [searchValue, setSearchValue] = useState('');

    const [context, setContext] = useContext(Contexto);
    
    const handleChange = event => {
        setSearchValue(event.target.value);
        console.log(`Search - handleChange: ${searchValue}`);
    };

    const eventClick = () => {
        console.log(`eventClick - ${searchValue}`);
        setContext(searchValue);
    }

    return (
        <>
            <div className="div-search">
                <input type='search' onChange={handleChange} />
                <input type='button' value='procurar' onClick={eventClick} />
            </div>
        </>
    );
}

export default Search;