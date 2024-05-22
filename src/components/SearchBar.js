import { faCircleCheck, faUser } from '@fortawesome/free-regular-svg-icons'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const SearchBar = () => {
  return (
    <div>
  

        <label htmlFor='findMem'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
            <input id='findMem' type='search'/>
        </label>
    </div>
  )
}

export default SearchBar