import React from 'react'
import Box from '@mui/system/Box';
import LoadButton from '../../Components/Common/LoadButton';
import CustomTextField from '../../Components/Common/CustomTextField';
import { ReactComponent as BgArrow } from "../../Assets/arrow-svg.svg"


const FormFooter = ({ title, description1, description2, label1, placeholder1, label2, placeholder2 }) => {
  return (
    <Box className="form-footer" sx={{
      background: 'var(--dark-purple)',
      padding: '72px 0',
      position: "relative"
    }}>
      <Box sx={{
        maxWidth: '737px',
        margin: '0 auto'
      }}>
        <h2 className="center">{title}</h2>
        <p className="center p-secondary white margin-8">{description1}</p>
        <p className="center p-secondary white margin-32">{description2}</p>
        <Box sx={{ padding: '0 93px' }}>
          <CustomTextField label={label1} placeholder={placeholder1} borderRadius={'8px'} bgColor={'#FFFFFF'} paddingLeft={'8px'} marginBottom={'24px'} />
          <CustomTextField label={label2} placeholder={placeholder2} borderRadius={'8px'} bgColor={'#FFFFFF'} paddingLeft={'8px'} />
          <Box sx={{ marginTop: '36px', marginRight: '-10px', display: 'flex', justifyContent: 'flex-end' }}>
            <LoadButton text={'Submit'} />
          </Box>
        </Box>
      </Box>
      <Box position="absolute" right={0} top={0}>
        <BgArrow />
      </Box>
    </Box>
  )
}

export default FormFooter