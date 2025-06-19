import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'


const Searchbox = (props) => {
  return (
    <div className='col col-sm-4'>
        <div className='searchbar-assembly'>
            <input 
                className='form-control'  
                value={props.value}
                onChange={(event) => {props.setSearchValue(event.target.value)}}
                placeholder='Type to Search'
            ></input>
            <FaMagnifyingGlass className='magnifying-glass'/>
        </div>
    </div>
  )
}

export default Searchbox