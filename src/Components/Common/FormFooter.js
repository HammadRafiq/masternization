import React from 'react'
import Box from '@mui/system/Box';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import { ReactComponent as BgArrow } from "../../Assets/arrow-svg.svg"
import { useForm } from 'react-hook-form';

const FormFooter = ({ title, description1, description2, label1, placeholder1, label2, placeholder2 }) => {

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
    <Box className="form-footer" sx={{
      background: 'var(--dark-purple)',
      padding: {
        xs: '72px 20px',
        md: '72px 0',
      },
      position: "relative"
    }}>
      <Box sx={{
        maxWidth: '737px',
        margin: '0 auto'
      }}>
        <h2 className="center main-heading">{title}</h2>
        <p className="center p-secondary white margin-8">{description1}</p>
        <p className="center p-secondary white margin-32">{description2}</p>
        <Box sx={{
          padding: {
            xs: '0',
            lg: '0 93px'
          },
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>

            <CustomTextField
              name={'coursename'}
              label={label1}
              placeholder={placeholder1}
              borderRadius={'8px'}
              bgColor={'#FFFFFF'}
              paddingLeft={'8px'}
              marginBottom={'24px'}
              register={register}
              required={true}
              errors={errors}
            />
            <CustomTextField
              name={'courseurl'}
              label={label2}
              placeholder={placeholder2}
              borderRadius={'8px'}
              bgColor={'#FFFFFF'}
              paddingLeft={'8px'}
              marginBottom={'24px'}
              register={register}
              required={true}
              errors={errors}
            />
            <Box sx={{
              marginTop: {
                xs: '20px',
                md: '12px'
              }, marginRight: '-10px', display: 'flex', justifyContent: 'flex-end'
            }}>
              <LoadButton text={'Submit'} />
            </Box>
          </form>
        </Box>
      </Box>
      <Box position="absolute" right={0} top={{ xs: '-100px', md: '0px' }}>
        <BgArrow />
      </Box>
    </Box >
  )
}

export default FormFooter