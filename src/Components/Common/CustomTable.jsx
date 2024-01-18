import { Box } from '@mui/material'
import Table from 'rc-table'
import IsLoading from "../../Components/Common/IsLoading"
import Pagination from 'rc-pagination';
import '../../rc-pagination.css'
import { ReactComponent as IconPrev } from "../../Assets/pagination-prev.svg"
import { ReactComponent as IconNext } from "../../Assets/pagination-next.svg"

const CustomTable = ({
    data = [],
    columns = [],
    loading = false,
    paginationAlign = "center",
    total = 0,
    limit = 10,
    onChange = () => null
}) => {
    return (
        <Box position="relative">
            <Table
                columns={columns}
                data={data}
                className='primary-table'
            />
            <Pagination
                className='custom-rc-pagination'
                prevIcon={<IconPrev />}
                nextIcon={<IconNext />}
                pageSize={limit}
                total={total}
                onChange={onChange}
                style={{
                    textAlign: paginationAlign
                }}
            />
            <IsLoading isLoading={loading} />
        </Box>
    )
}

export default CustomTable