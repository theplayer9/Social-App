import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor='purple' flex={2} padding={2} sx={{ display: { xs: "none", sm: "block"}}} >Rightbar</Box>
  )
}

export default Rightbar