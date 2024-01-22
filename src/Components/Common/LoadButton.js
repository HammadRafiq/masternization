import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';
import { LoadingButton } from '@mui/lab';

const LoadButton = (
  {
    text,
    styleProps = {},
    onClick = () => null,
    loading = false,
    disabled,
    ...rest
  }
) => {

 

  return (
    <LoadingButton
      type='submit'
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      {...rest}
      sx={{
        backgroundColor: 'var(--purple)',
        color: 'var(--white)',
        textTransform: 'capitalize',
        borderRadius: '76px',
        padding: '10px 28px',
        fontSize: '18px',
        fontWeight: 500,
        height: '60px',
        ".MuiLoadingButton-loadingIndicator": {
          color: "white"
        },
        marginTop: {
          xs: '15px',
          md: '0'
        },
        minWidth: {
          xs: '100%',
          md: '201px'
        },
        '&:hover': {
          backgroundColor: 'var(--purple)',
        },
        ...styleProps
      }}
    >
      {text}
    </LoadingButton>
  )
}

export default LoadButton