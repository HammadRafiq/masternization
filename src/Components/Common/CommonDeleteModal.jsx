import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ReactComponent as TrashIcon } from '../../Assets/trash.svg'
import LoadButton from './LoadButton';

// Common delete modal. It maintains its internal state (open, setOpen) and UI Render (trash icon usually)

const CommonDeleteModal = ({
    title = "Delete",
    subtitle = "Are you sure you want to delete?",
    onDelete = async () => null,
    UIRender = <TrashIcon />
}) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleCancel = (e) => {
        e?.stopPropagation()
        setOpen(false)
    }

    const showModal = (e) => {
        e?.stopPropagation()
        setOpen(true)
    }

    const onSubmit = async () => {
        setLoading(true)
        await onDelete()
        handleCancel()
        setLoading(false)
    }


    return (
        <Box>
            <Box onClick={showModal} sx={{ cursor: "pointer" }}>
                {UIRender}
            </Box>
            <Modal
                open={open}
                onClose={handleCancel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='primary-modal' onClick={e => e.stopPropagation()} sx={{ padding: "20px", width: "500px" }}>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <Box sx={{ margin: "16px 0" }}>
                        <Typography fontSize={"16px"} fontWeight={500}>
                            {subtitle}
                        </Typography>
                    </Box>
                    <Box marginTop={"50px"} display={"flex"} justifyContent={"flex-end"}>
                        <LoadButton
                            text={'Cancel'}
                            onClick={handleCancel}
                            styleProps={{
                                fontSize: '12px',
                                fontWeight: 600,
                                height: '40px',
                                marginRight: "10px",
                                minWidth: '131px',
                                color: "#7B8794",
                                backgroundColor: "#fff",
                                border: "1px solid #C1C7D0",
                                '&:hover': { backgroundColor: '#fff' }
                            }}
                        />
                        <LoadButton
                            text={'Delete'}
                            onClick={onSubmit}
                            loading={loading}
                            styleProps={{
                                fontSize: '12px',
                                fontWeight: 600,
                                height: '40px',
                                minWidth: '131px',
                                backgroundColor: "#E55E5E",
                                '&:hover': { backgroundColor: '#E55E5E' }
                            }}
                        />
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default CommonDeleteModal
