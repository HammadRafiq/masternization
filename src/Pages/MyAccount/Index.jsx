import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';
import SavedCourses from '../../Components/MyAccount/SavedCourses';
import OffersCard from '../../Components/MyAccount/OffersCard';
import ListedWorkCard from '../../Components/MyAccount/ListedWorkCard';
import CustomTextField from '../../Components/Common/CustomTextField';
import CustomSelectField from '../../Components/Common/CustomSelectField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoadButton from '../../Components/Common/LoadButton';
import CalendarIcon from '../../Assets/calendar.svg'
import ClockIcon from '../../Assets/clock.svg'
import { useForm } from 'react-hook-form';

const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const MyAccount = () => {

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
            <Box className="pl-100 pr-100" sx={{ flexGrow: 1, paddingTop: '80px' }}>
                <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column', border: '1px solid var(--stroke-card)', borderRadius: '16px', padding: '40px' }}>
                    <h5 class="small-tagline mb-16">Hello!</h5>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant="h2" sx={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: '72px' }}>
                                Welcome back, <br />Michael.
                            </Typography>
                        </Box>
                        <Box>
                            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'start' }}>
                                <img src={CalendarIcon} alt="Calendar" />
                                <Typography variant="h6" sx={{
                                    color: 'var(--body-text)',
                                    fontSize: '20px',
                                    fontWeight: 400,
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize',
                                    lineHeight: '24px'
                                }}>
                                    Saturday, 24th August 2023
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'start', marginTop: '16px' }}>
                                <img src={ClockIcon} alt="Calendar" />
                                <Typography variant="h6" sx={{
                                    color: 'var(--body-text)',
                                    fontSize: '20px',
                                    fontWeight: 400,
                                    letterSpacing: '-0.6px',
                                    textTransform: 'capitalize',
                                    lineHeight: '24px'
                                }}>
                                    14:42 PM
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ border: '1px solid var(--stroke-card)', borderRadius: '16px', padding: '40px', marginTop: '40px' }}>
                    <Typography variant="h2" sx={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: '48px', marginBottom: '24px' }}>
                        Your Offers
                    </Typography>
                    <Grid container spacing={2.5}>
                        <OffersCard />
                        <OffersCard />
                        <OffersCard />
                    </Grid>
                </Box>
                <Box sx={{ border: '1px solid var(--stroke-card)', borderRadius: '16px', padding: '40px', marginTop: '40px' }}>
                    <Box sx={{ borderBottom: '1px solid rgba(38, 38, 38, 0.30)', paddingBottom: '40px' }}>
                        <Typography variant="h2" sx={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: '48px', marginBottom: '16px' }}>
                            Your Vault
                        </Typography>
                        <Typography variant="body2" className="p-secondary">
                            Everything you save will appear here.
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', letterSpacing: '-0.72px', margin: '32px 0 24px', color: 'var(--dark-purple)' }}>
                            My Saved Courses
                        </Typography>
                        <Grid container spacing={2.5}>
                            <SavedCourses />
                            <SavedCourses />
                            <SavedCourses />
                        </Grid>
                    </Box>
                    <Box sx={{ marginTop: '40px' }}>
                        <Typography variant="h2" sx={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: '48px', marginBottom: '16px' }}>
                            Blogging
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', letterSpacing: '-0.72px', margin: '32px 0 24px', color: 'var(--dark-purple)' }}>
                            Courses
                        </Typography>
                        <Grid container spacing={2.5}>
                            <SavedCourses />
                            <SavedCourses />
                        </Grid>
                        <Typography variant="h3" sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '32px', letterSpacing: '-0.72px', margin: '32px 0 24px', color: 'var(--dark-purple)' }}>
                            Resources
                        </Typography>
                        <Grid container spacing={2.5}>
                            <SavedCourses />
                            <SavedCourses />
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{
                    background: 'rgba(107, 99, 251, 0.10)',
                    border: '1px solid var(--purple)',
                    borderRadius: '16px',
                    marginTop: '40px'
                }}>
                    <Box sx={{
                        padding: '40px',
                    }}>
                        <Typography variant="h2" sx={{
                            fontSize: '64px',
                            fontWeight: 700,
                            lineHeight: '72px',
                            letterSpacing: '-1.92px'
                        }}>
                            Creator Dashboard
                        </Typography>
                        <Typography variant="body2" className="p-secondary" sx={{ padding: '16px 0 48px', borderBottom: '1px solid rgba(38, 38, 38, 0.30)' }}>
                            The Creator Dashboard allows you to manage all your work that is listed on Masternization. You can Feature and Promote your work, list new work using the Submission Form below the dashboard and get view and subscriber statistics through the Creator Dashboard.
                        </Typography>
                        <Typography variant="h2" sx={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1.2px', lineHeight: '48px', margin: '40px 0 24px' }}>
                            My Listed Works
                        </Typography>
                        <ListedWorkCard />
                        <ListedWorkCard />
                    </Box>
                    <Box sx={{
                        background: 'var(--dark-purple)',
                        padding: '40px 40px 100px',
                        borderRadius: '16px'
                    }}>
                        <Typography variant="h2" sx={{
                            fontSize: '64px',
                            fontWeight: 700,
                            lineHeight: '72px',
                            letterSpacing: '-1.92px',
                            color: '#fff'
                        }}>
                            Submit Your Work
                        </Typography>
                        <Box>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ margin: '16px 0' }} className="p-secondary white">
                                            If your course/tutorial/book/tool/resource/YouTube channel/group is not listed on our platform kindly fill the form below for potential listing.
                                        </Typography>

                                        <CustomTextField
                                            name={'workname'}
                                            label={'Work name'}
                                            placeholder={'Enter the name of your work'}
                                            borderRadius={'8px'}
                                            bgColor={'#FFFFFF'}
                                            paddingLeft={'0px'}
                                            marginBottom={'24px'}
                                            register={register}
                                            required={true}
                                            errors={errors}
                                        />

                                        <CustomTextField
                                            name={'workurl'}
                                            label={'Work URL'}
                                            placeholder={'Paste the URL of your work'}
                                            borderRadius={'8px'}
                                            bgColor={'#FFFFFF'}
                                            paddingLeft={'0px'}
                                            marginBottom={'24px'}
                                            register={register}
                                            required={true}
                                            errors={errors}
                                        />

                                        <CustomSelectField
                                            name="selectcategory"
                                            label="Category"
                                            control={control}
                                            defaultValue=""
                                            options={selectOptions}
                                            errors={!!errors.name}
                                        />

                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h5" sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '24px', color: '#fff', margin: '16px 0 24px' }}>
                                            Work Confirmation Step
                                        </Typography>
                                        <p className="p-14">
                                            We recommend including a link to Masternization homepage on your work's website. The link could say for example that you are represented on Masternization or your work(s) are also available on Masternization.
                                        </p>
                                        <p className="p-14">
                                            This will allow us to confirm that you own the work(s) you are submitting for potential listing on Masternization, which will in turn allow you to access Creator benefits.
                                        </p>
                                        <p className="p-14">
                                            We will review your information and link within 10 working days, after which we will list your work(s) on Masternization on their respective categories.
                                        </p>
                                        <p className="p-14">
                                            Please email us at partners@masternization.com if you have any questions.
                                        </p>
                                        <CustomTextField
                                            name="pageurl"
                                            label={''}
                                            placeholder={'Enter the URL of the page where the link is included'}
                                            borderRadius={'8px'}
                                            bgColor={'#FFFFFF'}
                                            paddingLeft={'0px'}
                                            marginBottom={'30px'}
                                            register={register}
                                            required={true}
                                            errors={errors}
                                        />

                                        <FormControlLabel control={<Checkbox sx={{
                                            color: '#fff !important',
                                            borderRadius: '0px',
                                        }} />} label="I have included a link on my work/website" />
                                        <FormControlLabel control={<Checkbox sx={{
                                            color: '#fff !important',
                                            borderRadius: '0px',
                                        }} />} label="I have read and agree to the Terms of Service and Privacy Policy." />
                                        <Box sx={{ marginTop: '25px' }}>
                                            <LoadButton text={'Submit'} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MyAccount