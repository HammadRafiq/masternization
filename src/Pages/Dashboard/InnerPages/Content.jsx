import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import { useForm, useFieldArray } from 'react-hook-form';
import CustomTextField from '../../../Components/Dashboard/Common/CustomTextField'
import CustomSelectField from '../../../Components/Common/CustomSelectField';
import CustomRadioField from '../../../Components/Dashboard/Common/CustomRadioField';
import LoadButton from '../../../Components/Common/LoadButton';
import { useDropzone } from 'react-dropzone';
import AddCircle from '../../../Assets/dashboard/add-circle.svg'
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';


const availabilityOptions = [
  { value: 'FREE', label: 'Free' },
  { value: 'FREEMIUM', label: 'Freemium' },
  { value: 'PAID', label: 'Paid' },
];

const typeOptions = [
  { value: 'TOOL', label: 'Tool' },
  { value: 'RESOURCE', label: 'Resource' },
];

const subPages = [
  { value: 'DASHBOARD', label: 'Dashboard' },
  { value: 'COURSES', label: 'Courses' },
  { value: 'TUTORIALS', label: 'Tutorials' },
  { value: 'BOOKS', label: 'Books' },
  { value: 'TOOLS', label: 'Tools' },
  { value: 'YOUTUBE_CHANNELS', label: 'Youtube Channels' },
  { value: 'GROUPS', label: 'Groups' },
  { value: 'JOBS', label: 'Jobs' },
];

const chooseSection = [
  { value: 'SUCCESS_STORIES', label: 'Success Stories' },
  { value: 'HOW_TO_START', label: 'How To Start' },
  { value: 'HOW_TO_GET_JOB', label: 'How To Get Job' },
  { value: 'HOW_TO_START_BUSINESS', label: 'How To Start Business' },
];

const GET_MASTERCOURSES = gql`
  query($limit: Int, $page: Int){
  masterCourses(limit: $limit, page: $page) {
    total
    items {
      _id
      desc
      name
      icon {
        alt
        src
      }
    }
  }
}
`

const SINGLE_CONTENT = gql`
  query($id: ID!){
    contentById(id: $id) {
      _id
      availability
      desc
      location
      masterCourseId
      owner
      page
      section
      title
      type
      url
      date
      status
      icon {
        alt
        src
      }
    }
  }
`

const ADD_CONTENT = gql`
  mutation($content: addContentPayload!){
    addContent(content: $content) {
      _id
      availability
      desc
      location
    }
  }
`

const UPDATE_CONTENT = gql`
  mutation($content: updateContentPayload){
    updateContent(content: $content) {
      _id
      masterCourseId
      title
      page
    }
  }
`

const Content = () => {
  const [files, setFiles] = React.useState([]);
  const { data, loading } = useQuery(GET_MASTERCOURSES, {
    variables: {
      page: 1,
      limit: 30
    }
  })
  const [contentById, { data: data2 }] = useLazyQuery(SINGLE_CONTENT)
  const [addContent, { data: data1, loading: loading1 }] = useMutation(ADD_CONTENT)
  const [updateContent, { data: data3, loading: loading3 }] = useMutation(UPDATE_CONTENT)

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({
    defaultValues: {},
    shouldUnregister: true
  });

  const { enqueueSnackbar } = useSnackbar()
  const { contentId } = useParams()
  const navigate = useNavigate()

  const choosePage = watch("page");
  const chooseSection1 = watch("section")

  useEffect(() => { // Fetching single content data when user wants to edit the record
    if (contentId) {
      contentById({
        variables: {
          id: contentId
        },
        onCompleted: (data) => {
          Object.entries(data.contentById ?? []).map(entry => {
            if (entry[1]) { // Not adding null/undefined values to react-hook-form
              setValue(entry[0], entry[1])
            }
          })
        }
      })
    }
  }, [contentId])

  const onSubmit = (data) => {
    delete data.status
    delete data.__typename
    delete data._id
    delete data.date
    if (!(data?.icon instanceof File)) { // If default icon value exists coming from backend then delete else send File object to backend
      delete data.icon
    }
    if (contentId) {
      updateContent({
        variables: {
          content: {
            ...data,
            id: contentId,
          }
        },
        onCompleted: (data) => {
          enqueueSnackbar("Content updated successfully", {
            variant: "success"
          })
          navigate("/dashboard/listed-works")
        },
        onError: () => { }
      })
    }
    else {
      addContent({
        variables: {
          content: data
        },
        onCompleted: (data) => {
          enqueueSnackbar("Content added successfully", {
            variant: "success"
          })
          navigate("/dashboard/listed-works")
        },
        onError: () => { }
      })
    }
  }

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file),
    })));
    const lastFile = acceptedFiles[acceptedFiles.length - 1];
    setValue('icon', lastFile);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
    multiple: false,
  });


  return (
    <Box sx={{ padding: '30px' }}>
      <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.72px' }}>
        Upload New Content
        <Box className="dashboard-content" sx={{ padding: '24px 24px 32px', margin: '20px 0', border: '1px solid var(--stroke-card)', borderRadius: '16px' }}>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="dashboard-select-field">
                  <CustomSelectField
                    name="masterCourseId"
                    label="Choose Master Course"
                    register={register}
                    control={control}
                    defaultValue=""
                    required={true}
                    options={data?.masterCourses?.items?.map(item => ({
                      value: item._id,
                      label: item.name
                    }))}
                    errors={!!errors.name}
                  />
                </Box>

                <Box sx={{ marginTop: '16px' }} className="dashboard-select-field">
                  <CustomSelectField
                    name="page"
                    label="Choose Page"
                    register={register}
                    control={control}
                    defaultValue=""
                    required={true}
                    options={subPages}
                    errors={!!errors.name}
                  />
                </Box>

                {choosePage === 'DASHBOARD' && (
                  <Box sx={{ marginTop: '16px' }} className="dashboard-select-field">
                    <CustomSelectField
                      name="section"
                      register={register}
                      label="Choose Section"
                      control={control}
                      defaultValue=""
                      options={chooseSection}
                      errors={!!errors.name}
                    />
                  </Box>
                )}

                <CustomTextField
                  name="title"
                  label="Work Title"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'16px'}
                />

                {choosePage !== "YOUTUBE_CHANNELS" && chooseSection1 !== "HOW_TO_START" && chooseSection1 !== "HOW_TO_START_BUSINESS" && (
                  <CustomTextField
                    name="owner"
                    label="Work Owner"
                    type="text"
                    register={register}
                    required={true}
                    errors={errors}
                    mt={'16px'}
                  />
                )}

                <CustomTextField
                  name="url"
                  label="Work URL"
                  type="text"
                  register={register}
                  required={true}
                  errors={errors}
                  mt={'16px'}
                />
                {/* Custom Radio Field */}

                {(choosePage === "COURSES" || choosePage === "TUTORIALS") && (
                  <CustomRadioField
                    name={'availability'}
                    label={'Availability'}
                    register={register}
                    required={true}
                    errors={errors}
                    control={control}
                    options={availabilityOptions}
                  />
                )}

                {choosePage === "TOOLS" && (
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
                )}
                <Box sx={{ marginTop: '32px' }}>
                  <LoadButton
                    text={contentId ? 'Update Content' : 'Post Content'}
                    padding={'10px 112px'}
                    loading={loading1 || loading3}
                  />
                </Box>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              {(choosePage !== 'BOOKS' && choosePage !== 'JOBS' && chooseSection1 !== "SUCCESS_STORIES") && (
                <CustomTextField
                  name="desc"
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
              {chooseSection1 !== "HOW_TO_START" && (
                <Box sx={{ display: 'flex', marginTop: '60px' }}>
                  <label class="form-label" for="workurl">Work URL</label>
                  <div {...getRootProps()} style={{ display: 'inline-block' }}>
                    <input {...getInputProps()} name="icon" />
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
                    {/* If Content is being edited and no image has been selected by user then show the image coming from API */}
                    {files.length < 1 && contentId && (
                      <img
                        alt={data2?.contentById?.icon?.alt}
                        src={data2?.contentById?.icon?.src}
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                      />
                    )}
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