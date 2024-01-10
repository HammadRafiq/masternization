import React from 'react'
import Box from '@mui/system/Box';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import ArrowDown from '../../Assets/arrow-down.svg'
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import CustomSelectField from '../Common/CustomSelectField'
import FilterSelectField from './FilterSelectField';

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const SecondaryHeader = ({ title }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data', data);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          marginBottom: {
            xs: '20px',
            md: '30px',
            lg: '40px'
          },
          marginTop: {
            xs: '20px',
            md: '20px',
            lg: '30px'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{
            color: 'var(--dark-purple)',
            fontSize: '18px',
            fontWeight: 500,
            marginRight: {
              xs: '6px',
              md: '12px'
            }
          }}>Home</Typography>
          <img src={ArrowDown} alt="Arrow Down" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{
            color: 'var(--dark-purple)',
            fontSize: {
              xs: '16px',
              md: '18px'
            },
            fontWeight: 500,
            margin: {
              xs: '0 6px',
              md: '0 12px'
            },
          }}>Blogging</Typography>
          <img src={ArrowDown} alt="Arrow Down" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{
            color: 'var(--dark-purple)',
            fontSize: {
              xs: '16px',
              md: '18px'
            },
            fontWeight: 500,
            margin: {
              xs: '0 6px',
              md: '0 12px'
            },
            color: 'var(--purple)'
          }}>{title}</Typography>
        </Box>

      </Box>
      <Box sx={{ maxWidth: '761px', margin: '0 auto 40px' }}>
        <h3 className="center">{title}</h3>
        <p className="center p-primary mt-16 mb-40">Blogging is a way of creating and sharing content on the internet to connect with an audience.</p>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="secondary-header" sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: { xs: '50px', md: '72px' } }}>
          <Box></Box>
          <Box sx={{
            position: 'relative',
            display: {
              lg: 'flex',
              md: 'flex',
              xs: 'block'
            }, maxHeight: {
              md: '60px',
              lg: '60px'
            }, minWidth: {
              xs: '100%',
              md: '60%'
            }, gap: '16px',

          }}>

            <CustomTextField
              name={'searchcourse'}
              label={''}
              sx={{ maxHeight: '60px !important' }}
              placeholder={'Search courses'}
              borderRadius={'40px'}
              bgColor={'#EBEBEC'}
              paddingLeft={'20px'}
              register={register}
              required={true}
              errors={errors}
              styles={{ position: 'absolute', top: '-15px', left: { xs: '25px', md: '50px' } }}
            />
            <LoadButton text={'Search'} />

          </Box>
          <Box className="filter-select-bar">
            <FilterSelectField />
          </Box>
        </Box>
      </form>
    </>
  )
}

export default SecondaryHeader