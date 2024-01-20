import { Box } from '@mui/material'
import React, { useState } from 'react'
import CustomTable from '../../../Components/Common/CustomTable';
import { ReactComponent as TrashIcon } from "../../../Assets/trash.svg"
import { ReactComponent as EditIcon } from "../../../Assets/edit.svg"
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import moment from 'moment/moment';

const ALL_CONTENTS = gql`
query($page: Int, $limit: Int, $screen: String, $section: String, $masterCourseId: ID){
  contents(page: $page, limit: $limit, screen: $screen, section: $section, masterCourseId: $masterCourseId) {
    total
    items {
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
}
`

const DELETE_CONTENT = gql`
mutation($id: ID){
  deleteContent(id: $id)
}
`

const limit = 5

const ListedContent = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, data, refetch } = useQuery(ALL_CONTENTS, {
    variables: {
      page: currentPage,
      limit: limit
    },
    notifyOnNetworkStatusChange: true
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
      title: 'Work Name',
      dataIndex: 'title',
    },
    {
      title: 'Type',
      dataIndex: 'page',
    },
    {
      title: 'Listing Date',
      dataIndex: 'date',
      render: (text) => <div>{moment(text).format("LL")}</div>
    },
    {
      title: 'Live Status',
      dataIndex: 'status',
      render: (text) => <div>{text?.toString()}</div>
    },
    {
      title: 'Actions',
      dataIndex: 'status',
      render: (text, record) => (
        <Box>
          <EditIcon style={{ cursor: "pointer" }} />
          <TrashIcon style={{ cursor: "pointer" }} onClick={() => deleteContentHandler(record._id)} />
        </Box>
      )
    },
  ];

  const onPageChange = (current, pageSize) => {
    setCurrentPage(current)
  }


  return (
    <Box>
      <CustomTable
        data={data?.contents?.items}
        columns={columns}
        loading={loading}
        onChange={onPageChange}
        total={data?.contents?.total}
        limit={limit}
      />
    </Box>
  )
}

export default ListedContent
