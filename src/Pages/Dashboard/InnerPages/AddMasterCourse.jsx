import React, { useState } from 'react'
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
import { gql, useMutation } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const availabilityOptions = [
    { value: 'free', label: 'Free' },
    { value: 'freemium', label: 'Freemium' },
    { value: 'paid', label: 'Paid' },
];

const typeOptions = [
    { value: 'tool', label: 'Tool' },
    { value: 'resource', label: 'Resource' },
];

const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

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


const AddMasterCourse = () => {
    const [addMasterCourse, { loading, data }] = useMutation(ADD_MASTERCOURSE)
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
        },
    });

    const onSubmit = (data) => {
        addMasterCourse({
            variables: data,
            onCompleted: (data) => {
                enqueueSnackbar("Master course added successfully", {
                    variant: "success"
                })
                navigate("/dashboard/listed-master-courses")
            },
            onError: () => { }
        })
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
                                    <label class="form-label" for="workurl">Work URL</label>
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
                                    <LoadButton text={'Create'} padding={'10px 112px'} loading={loading} />
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