import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
const LoadButton = ({text}) => {
  return (
    <Button sx={{
        backgroundColor:'var(--purple)',
        color:'var(--white)',
        textTransform:'capitalize',
        borderRadius:'76px',
        padding:'10px 28px',
        fontSize:'18px',
        fontWeight:500,
        height:'60px',
        marginTop:{
          xs:'15px',
          md:'0'
        },
        minWidth:{
          xs:'100%',
          md:'201px'
        },
       
        '&:hover': {
          backgroundColor:'var(--purple)',
        },
      }}>{text}</Button>
  )
}

export default LoadButton