import { AppBar, Container, Divider, Icon, InputAdornment, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './main.scss'
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import InboxIcon from '@mui/icons-material/Inbox';

import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { AddCircle, Search } from '@mui/icons-material';
import axios from 'axios';
function App() {
  const xn=['Name','Node','Items','Quantity','Date'];
  const [x,X]=useState([{'name':"a"}]);
   useEffect(()=>{
    xAPI()
  },[])
  const xAPI=()=>{
    axios.get("http://localhost/php/store/a.php").then((resp)=>{
      X(resp.data);console.log(resp.data[0]['name']);
    }).catch((error)=>console.log(error))
  }
  return (
    <div>
      {/* <button onClick={()=>f()}>sss</button> */}
      <div className='appbar'>
          
        <PersonIcon/> &nbsp;&nbsp;&nbsp;&nbsp;
           IW Bin List <div className='ico'>
           <GpsNotFixedIcon/>&nbsp;&nbsp;
           <InboxIcon /> &nbsp;&nbsp;
           <AddCircle/></div>
      </div>
       <Divider/>
       
      <div className='t'> <p>Bins</p> <p >Items</p></div>
             <br/>
             
       
      <TextField
        id="search"
        className="search"
        type="search"
        label="Search"
        // value={searchTerm}/
        // sx={{ width:  }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <tr>
      {xn.map((v,i)=>{
        return           <th>{v}</th>
        
      })}
      </tr>
      {x.map((v, i) => {
      return  <tr>
      <th>{x[i]['name']}</th>
      <th>{x[i]['node']}</th>
      <th>{x[i]['items']}</th>
      <th>{x[i]['quantity']}</th>
      <th>{x[i]['date']}</th>
    </tr>
    })}
   
      <table>
        
                {/* <tr>
          <th>{x!={}?x[0]['name']:0}</th>
          <th>{x!={}?x[0]['node']:0}</th>
       
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr> */}
      </table>
    </div>
  )
}

export default App