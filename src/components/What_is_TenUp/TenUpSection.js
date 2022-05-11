import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function TenUpSection() {
  return (
    <>
    <Box sx={{
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 1000,
        
    }}>
    <Typography variant="h2" component="h1" gutterBottom>
        my name is usman
    </Typography>
    <Divider sx={{
        width: '100%',
        height: '1px',
        backgroundColor: '#f5f5f5',
        margin: '0px',
        padding: '0px',
        borderRadius:"50%",
    }}>
        <Divider>
            <Divider>
                <Divider>
                    <Divider>
                        </Divider>
                    </Divider>
                    
                            </Divider>
        </Divider>
    </Divider>
    </Box>
    
    </>
  )
}

export default TenUpSection