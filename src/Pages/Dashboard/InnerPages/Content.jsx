import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import CustomTextField from '../../../Components/Dashboard/Common/CustomTextField'
import CustomSelectField from '../../../Components/Common/CustomSelectField';
import CustomRadioField from '../../../Components/Dashboard/Common/CustomRadioField';
import LoadButton from '../../../Components/Common/LoadButton';
import { useDropzone } from 'react-dropzone';
import AddCircle from '../../../Assets/dashboard/add-circle.svg'


const availabilityOptions = [
  { value: 'free', label: 'Free' },
  { value: 'freemium', label: 'Freemium' },
  { value: 'paid', label: 'Paid' },
];

const typeOptions = [
  { value: 'tool', label: 'Tool' },
  { value: 'resource', label: 'Resource' },
];

const masterCourses = [
  { value: 'blogging', label: 'Blogging' },
  { value: 'webdevelopment', label: 'Web Development' },
  { value: 'datamining', label: 'Data Mining' },
  { value: 'animation', label: 'Animation' },
  { value: 'photoshop', label: 'Photoshop' },
  { value: 'graphicdesign', label: 'Graphic Design' },
];

const subPages = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'courses', label: 'Courses' },
  { value: 'tutorials', label: 'Tutorials' },
  { value: 'books', label: 'Books' },
  { value: 'tools', label: 'Tools' },
  { value: 'youtubechannels', label: 'Youtube Channels' },
  { value: 'groups', label: 'Groups' },
  { value: 'jobs', label: 'Jobs' },
];

const chooseSection = [
  { value: 'bloggingsuccessstores', label: 'Blogging Success Stories' },
  { value: 'startblogging', label: 'Start Blogging' },
  { value: 'bloggingjobs', label: 'Blogging Jobs' },
  { value: 'bloggingbusinesses', label: 'Blogging Businesses' },
];



const Content = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    defaultValues: {
    },
    shouldUnregister: true
  });

  const masterCourse = watch("mastercourse");
  const choosePage = watch("choosepage");
  const chooseType = watch("type");
  const chooseSection1 = watch("choosesection")


  {/*
useEffect(() => {
    if (choosePage !== "dashboard") {
      unregister("choosesection")
    }
    if (chooseSection1 === "bloggingsuccessstories") {
      unregister("description")
    }
    if (chooseSection1 === "startblogging") {
      unregister("workowner")
    }
    if (chooseSection1 === "bloggingbusinesses") {
      unregister("workowner")
    }


    if (choosePage === "jobs" || choosePage === "books") {
      unregister("description")

    }
    if (choosePage === 'youtubechannels') {
      unregister("workowner")
    }
    if (choosePage !== "courses" && choosePage !== "tutorials") {
      unregister("availability")
    }
    if (choosePage !== "tools") {
      unregister("type")
    }
     }, [choosePage, chooseSection1])
  */}
  useEffect(() => {
    if (chooseSection1 === "startblogging") {

    }
    if (chooseSection1 !== "startblogging") {


    }
  }, [chooseSection1])

  const onSubmit = (data) => {
    //alert(JSON.stringify(data, null, 2))
    console.log('Form Data', data);
  };

  {/* Drop Zone Image Upload */ }

  const [files, setFiles] = React.useState([]);

  const onDrop = (acceptedFiles) => {

    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));

    acceptedFiles.forEach((file) => {
      register(`file${file.name}`, { value: file });
    });

  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
    multiple: false,
  });


  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.72px' }}>
        Upload New Content
        <Box className="dashboard-content" sx={{ padding: '24px 24px 32px', margin: '20px 0', border: '1px solid var(--stroke-card)', borderRadius: '16px' }}>

          <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit(onSubmit)}>

                <Box className="dashboard-select-field">
                  <CustomSelectField
                    name="mastercourse"
                    label="Choose Master Course"
                    control={control}
                    defaultValue=""
                    options={masterCourses}
                    errors={!!errors.name}
                  />
                </Box>

                <Box sx={{ marginTop: '16px' }} className="dashboard-select-field">
                  <CustomSelectField
                    name="choosepage"
                    label="Choose Page"
                    control={control}
                    defaultValue=""
                    options={subPages}
                    errors={!!errors.name}
                  />
                </Box>

                <Box sx={{ marginTop: '16px' }} className="dashboard-select-field">
                  <CustomSelectField
                    name="choosesection"
                    label="Choose Section"
                    control={control}
                    defaultValue=""
                    options={chooseSection}
                    errors={!!errors.name}
                  />
                </Box>

                <CustomTextField
                  name="worktitle"
                  label="Work Title"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'16px'}
                />

                {choosePage !== "youtubechannels" && chooseSection1 !== "startblogging" && chooseSection1 !== "bloggingbusinesses" && (
                  <CustomTextField
                    name="workowner"
                    label="Work Owner"
                    type="text"
                    register={register}
                    required={true}
                    errors={errors}
                    mt={'16px'}
                  />
                )}

                <CustomTextField
                  name="workurl"
                  label="Work URL"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'16px'}
                />
                {/* Custom Radio Field */}

                <CustomRadioField
                  name={'availability'}
                  label={'Availability'}
                  register={register}
                  required={true}
                  errors={errors}
                  control={control}
                  options={availabilityOptions}
                />

                <Box>
                  <CustomRadioField
                    name={'type'}
                    label={'Type'}
                    register={register}
                    required={true}
                    errors={errors}
                    control={control}
                    options={typeOptions}
                  />
                </Box>

                <Box sx={{ marginTop: '32px' }}>
                  <LoadButton text={'Post Content'} padding={'10px 112px'} />
                </Box>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              {(choosePage !== 'books' && choosePage !== 'jobs' && chooseSection1 !== "bloggingsuccessstories") && (
                <CustomTextField
                  name="description"
                  label="Description"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'0px'}
                  multiline={true}
                  rows={6}
                />
              )}


              {/*
              {choosePage !== 'courses' && choosePage !== 'books' && (
                <CustomTextField
                  name="location"
                  label="Location"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'16px'}
                />
              )}
              */}


              {/* Drop Zone Image Upload Code */}
              {chooseSection1 !== "startblogging" && (
                <Box sx={{ display: 'flex', marginTop: '60px' }}>
                  <label class="form-label" for="workurl">Work URL</label>
                  <div {...getRootProps()} style={{ display: 'inline-block' }}>
                    <input {...getInputProps()} name="featuredimage" />
                    <Box>
                      <img className="ml-16" src={AddCircle} style={{ cursor: 'pointer' }} alt="upload image" />
                    </Box>
                  </div>
                  <Box className="testing123" sx={{ marginLeft: '20px' }}>


                    {files.map((file) => (
                      <img
                        key={file.name}
                        src={file.preview}
                        alt={file.name}
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                      />
                    ))}


                  </Box>
                </Box>


              )}
              {errors.files && <span style={{ color: 'red' }}>Please upload an image</span>}

              {/* End of Image Drop Zone Section */}

            </Grid>
          </Grid>

        </Box>
      </Typography >
    </Box >
  )
}

export default Content