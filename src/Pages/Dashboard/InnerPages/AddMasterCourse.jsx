import React, { useEffect, useState } from 'react'
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
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';


const ADD_MASTERCOURSE = gql`
    mutation ADD_MASTER_COURSE($name: String!, $desc: String!, $icon: Upload){
    addMasterCourse(name: $name, desc: $desc, icon: $icon) {
        _id
        desc
        name
        icon {
            alt
            src
        }
    }
    }
`

const UPDATE_MASTERCOURSE = gql`
    mutation($id: ID!, $name: String!, $desc: String!, $icon: Upload){
    updateMasterCourse(id: $id, name: $name, desc: $desc, icon: $icon) {
        _id
        desc
        name
        icon {
            alt
            src
        }
    }
    }
`


const SINGLE_MASTERCOURSE = gql`
  query($id: ID!){
    masterCourseById(id: $id) {
        _id
        desc
        name
        icon {
          alt
          src
        }
    }
  }
`



const AddMasterCourse = () => {
    const [addMasterCourse, { loading, data }] = useMutation(ADD_MASTERCOURSE)
    const [updateMasterCourse, { loading: loading1, data: data1 }] = useMutation(UPDATE_MASTERCOURSE)
    const [masterCourseById, { data: data2 }] = useLazyQuery(SINGLE_MASTERCOURSE)

    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const { masterCourseId } = useParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        defaultValues: {
        },
    });

    const onSubmit = (data) => {
        delete data.__typename
        delete data._id
        delete data.date
        if (!(data?.icon instanceof File)) { // If default icon value exists coming from backend then delete else send File object to backend
            delete data.icon
        }
        if (masterCourseId) {
            updateMasterCourse({
                variables: {
                    ...data,
                    id: masterCourseId
                },
                onCompleted: (data) => {
                    enqueueSnackbar("Master course updated successfully", {
                        variant: "success"
                    })
                    navigate("/dashboard/listed-master-courses")
                },
                onError: () => { },
            })
        }
        else {
            addMasterCourse({
                variables: data,
                onCompleted: (data) => {
                    enqueueSnackbar("Master course added successfully", {
                        variant: "success"
                    })
                    reset()
                },
                onError: () => { }
            })
        }
    };

    {/* Drop Zone Image Upload */ }

    const [files, setFiles] = React.useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file),
        })));
        const lastFile = acceptedFiles[acceptedFiles.length - 1];
        setValue('icon', lastFile)
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxFiles: 1,
        multiple: false,
    });

    useEffect(() => { // Fetching single master course data when user wants to edit the record
        if (masterCourseId) {
            masterCourseById({
                variables: {
                    id: masterCourseId
                },
                onCompleted: (data) => {
                    Object.entries(data.masterCourseById ?? []).map(entry => {
                        if (entry[1]) { // Not adding null/undefined values to react-hook-form
                            setValue(entry[0], entry[1])
                        }
                    })
                }
            })
        }
    }, [masterCourseId])


    return (
        <Box sx={{ padding: '40px' }}>
            <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '28px', letterSpacing: '-0.72px' }}>
                Create New Master Course
                <Box className="dashboard-content" sx={{ padding: '24px 24px 32px', margin: '20px 0', border: '1px solid var(--stroke-card)', borderRadius: '16px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2.5}>
                            <Grid item xs={12} md={6}>
                                <CustomTextField
                                    name="name"
                                    label="Master Course Name"
                                    type="text"
                                    register={register}
                                    required={true}
                                    errors={errors}
                                    mt={'0px'}
                                />
                                {/* Drop Zone Image Upload Code */}
                                <Box sx={{ display: 'flex', marginTop: '30px' }}>
                                    <label class="form-label" for="workurl">Icon</label>
                                    <div {...getRootProps()} style={{ display: 'inline-block' }}>
                                        <input {...getInputProps()} />
                                        <Box>
                                            <img className="ml-16" src={AddCircle} style={{ cursor: 'pointer' }} alt="upload image" />
                                        </Box>
                                    </div>
                                    <Box sx={{ marginLeft: '20px' }}>
                                        {files.map((file) => (
                                            <img
                                                key={file.name}
                                                src={file.preview}
                                                alt={file.name}
                                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                            />
                                        ))}
                                        {/* If Master Course is being edited and no image has been selected by user then show the image coming from API */}
                                        {files.length < 1 && masterCourseId && (
                                            <img
                                                alt={data2?.masterCourseById?.icon?.alt}
                                                src={data2?.masterCourseById?.icon?.src}
                                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                                {errors.files && <span style={{ color: 'red' }}>Please upload an image</span>}
                                {/* End of Image Drop Zone Section */}

                            </Grid>

                            <Grid item xs={12} md={6}>
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
                                <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'end' }}>
                                    <LoadButton text={masterCourseId ? "Update" : "Create"} padding={'10px 112px'} loading={loading || loading1} />
                                </Box>

                            </Grid>
                        </Grid>

                    </form>
                </Box>
            </Typography >
        </Box >
    )
}

export default AddMasterCourse;