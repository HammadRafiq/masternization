import { Box } from '@mui/material'
import Table from 'rc-table'
import IsLoading from "../../Components/Common/IsLoading"

const CustomTable = ({
    data = [],
    columns = [],
    loading = false
}) => {
    return (
        <Box position="relative">
            <Table
                columns={columns}
                data={data}
                className='primary-table'
            />
            <IsLoading isLoading={loading} />
        </Box>
    )
}

export default CustomTable