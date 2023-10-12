import React from 'react';
import Box from '@mui/material/Box';
import Ferrari from '../assets/ferrari.jpg';
import {
  Typography,
  Autocomplete,
  TextField,
  Grid,
  Button,
} from '@mui/material';

const header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '70vh',
        backgroundImage: `url(${Ferrari})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          width: '65%',
          height: '17em',
        }}
      >
        <Typography
          variant='h1'
          sx={{ color: '#ECF1F2', textAlign: 'left', width: '90%' }}
        >
          Transportation Done Right
        </Typography>
        <Typography
          variant='h3'
          sx={{ color: '#ECF1F2', textAlign: 'left', width: '88%' }}
        >
          Secure your vehicle shipping today!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#ECF1F2',
          border: '2px solid #050707',
          padding: '15px',
          borderRadius: '5px',
          width: '23%',
          height: '19em',
        }}
      >
        <Typography
          variant='h4'
          sx={{ color: '#050707', width: '100%', textAlign: 'left' }}
        >
          Get a FREE Quote
        </Typography>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            fontSize: '16px',
            color: '#050707',
            marginBottom: '15px',
          }}
        >
          <span style={{ color: 'red' }}>*</span> INDICATES REQUIRED FIELD!
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <TextField
                label='Transport car FROM'
                placeholder='Zip code'
                variant='filled'
                fullWidth
                required
                color='secondary'
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#1B1E1E',
                  },
                  '& label.Mui-focused': {
                    color: '#1B1E1E',
                  },
                  '& .MuiFormLabel-root': {
                    color: '#ECF1F2',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#ECF1F2',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'yellow',
                    },
                  },
                  '& .MuiInputBase-root': {
                    color: '#ECF1F2',
                  },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <TextField
                label='Transport car TO'
                placeholder='Zip code'
                variant='filled'
                fullWidth
                required
                color='secondary'
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#1B1E1E',
                  },
                  '& label.Mui-focused': {
                    color: '#1B1E1E',
                  },
                  '& .MuiFormLabel-root': {
                    color: '#ECF1F2',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#ECF1F2',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'yellow',
                    },
                  },
                  '& .MuiInputBase-root': {
                    color: '#ECF1F2',
                  },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <Button
                type='submit'
                value='Send'
                variant='contained'
                fullWidth
                color='primary'
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default header;
