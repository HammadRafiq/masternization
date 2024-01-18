import { Box } from '@mui/material'
import React, { useState } from 'react'
import CustomTable from '../../../Components/Common/CustomTable';
import { ReactComponent as TrashIcon } from "../../../Assets/trash.svg"
import { ReactComponent as EditIcon } from "../../../Assets/edit.svg"
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import CustomPagination from '../../../Components/Common/CustomPagination';

const ALL_MASTERCOURSES = gql`
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

const DELETE_CONTENT = gql`
mutation($id: ID){
  deleteContent(id: $id)
}
`
const limit = 3

const ListedMasterCourses = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, data, refetch } = useQuery(ALL_MASTERCOURSES, {
    variables: {
      page: currentPage,
      limit: limit
    },
    notifyOnNetworkStatusChange: true // Refetches data on query invalidation
  })
  const { enqueueSnackbar } = useSnackbar()

  const [deleteContent, { loading: loading1, data: data1 }] = useMutation(DELETE_CONTENT)

  const deleteContentHandler = (id) => {
    deleteContent({
      variables: {
        id: id
      },
      onCompleted: () => {
        enqueueSnackbar("Content deleted successfully", {
          variant: "success"
        })
        refetch()
      }
    })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Desc',
      dataIndex: 'desc',
    },
  ];

  const onPageChange = (current, pageSize) => {
    setCurrentPage(current)
  }


  return (
    <Box>
      <CustomTable
        data={data?.masterCourses?.items}
        columns={columns}
        loading={loading}
        onChange={onPageChange}
        total={data?.masterCourses?.total}
        limit={limit}
      />
    </Box>
  )
}

export default ListedMasterCourses
