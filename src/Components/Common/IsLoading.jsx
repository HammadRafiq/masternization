import { Box, CircularProgress } from "@mui/material";

const IsLoading = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(255,255,255,0.7)",
                zIndex: 9999,
            }}
        >
            <CircularProgress
                sx={{
                    position: "relative",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                }}
            />
        </Box>
    );
};

export default IsLoading;
