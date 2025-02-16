import { Button } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login';

const ButtonOpen = () => {

  const [loginModal,setLoginModal] = useState(false);

  const handleOpenLogin=()=>setLoginModal(true);
  
  const handleCloseLogin=()=>setLoginModal(false);
  return (
    <div>
      <Button onClick={handleOpenLogin}>Sign In</Button>
      <Login open={loginModal}/>
    </div>
  )
}

export default ButtonOpen
