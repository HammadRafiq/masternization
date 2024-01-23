import { Box } from '@mui/material'
import Pagination from 'rc-pagination';
import '../../rc-pagination.css'
import { ReactComponent as IconPrev } from "../../Assets/pagination-prev.svg"
import { ReactComponent as IconNext } from "../../Assets/pagination-next.svg"


const CustomPagination = ({
    align = "center",
    total = 0,
    limit = 3,
    onChange = () => null
}) => {
    return (
        <Box>
            <Pagination
                className='custom-rc-pagination'
                prevIcon={<IconPrev />}
                nextIcon={<IconNext />}
                pageSize={limit}
                total={total}
                onChange={onChange}
                style={{
                    textAlign: align
                }}
            />
        </Box>
    )
}

export default CustomPagination
