const SearchField=({placeholder,eventHandler}:any)=> {
    return ( 
        <input className='search App' type='search' placeholder={placeholder} onChange={eventHandler}></input>
     );
}

export default SearchField;