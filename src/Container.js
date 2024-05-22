import React from 'react'
import SearchBar from './components/SearchBar'
import Users from './components/Users'
import Buttons from './components/Buttons'
import {data} from  "./components/data"


const Container = () => {
  return (
    <div className='container'>
         <SearchBar/>
      <Users users={data}/>
      <Buttons/>
    </div>
  )
}

export default Container