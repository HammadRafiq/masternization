import { Box } from '@mui/material'
import React from 'react'
import CustomTable from '../../../Components/Common/CustomTable';
import { ReactComponent as TrashIcon } from "../../../Assets/trash.svg"
import { ReactComponent as EditIcon } from "../../../Assets/edit.svg"
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';

const ALL_CONTENTS = gql`
query($page: Int, $limit: Int, $screen: String, $section: String, $masterCourseId: ID){
  contents(page: $page, limit: $limit, screen: $screen, section: $section, masterCourseId: $masterCourseId) {
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

const ListedContent = () => {
  const { loading, data, refetch } = useQuery(ALL_CONTENTS, {
    variables: {},
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
      dataIndex: 'type',
    },
    {
      title: 'Listing Date',
      dataIndex: 'date',
    },
    {
      title: 'Live Status',
      dataIndex: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'status',
      render: (text, record) => (
        <Box>
          <EditIcon style={{ cursor: "pointer" }} />
          <TrashIcon style={{ cursor: "pointer", marginLeft:'15px' }} onClick={() => deleteContentHandler(record._id)} />
        </Box>
      )
    },
  ];

  return (
    <Box>
      <CustomTable
        data={data?.contents?.items}
        columns={columns}
        loading={loading}
      />
    </Box>
  )
}

export default ListedContent
