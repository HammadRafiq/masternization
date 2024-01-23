import { Box, Checkbox, CircularProgress, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../../Components/Common/CustomTable';
import { ReactComponent as TrashIcon } from "../../../Assets/trash.svg"
import { ReactComponent as EditIcon } from "../../../Assets/edit.svg"
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import moment from 'moment/moment';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ALL_CONTENTS = gql`
query($page: Int, $limit: Int, $screen: String, $section: String, $masterCourseId: ID){
  contents(page: $page, limit: $limit, screen: $screen, section: $section, masterCourseId: $masterCourseId) {
    total
    items {
      _id
      serialNum
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

const UPDATE_STATUS_CONTENT = gql`
  mutation($id: ID!, $status: Boolean!){
    updateStatusContent(id: $id, status: $status) {
      _id
      status
      page
    }
  }
`

const DELETE_CONTENT = gql`
  mutation($id: ID){
    deleteContent(id: $id)
  }
`

const limit = 10

const ListedContent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [statusLoading, setStatusLoading] = useState("")

  const { loading, data, previousData, refetch } = useQuery(ALL_CONTENTS, {
    variables: {
      page: currentPage,
      limit: limit
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache"
  })
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const [deleteContent, { loading: loading1, data: data1 }] = useMutation(DELETE_CONTENT)
  const [updateStatusContent, { loading: loading2 }] = useMutation(UPDATE_STATUS_CONTENT)

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

  const {
    watch,
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
    },
    shouldUnregister: true
  })

  const updateLiveStatus = (id, status) => {
    setStatusLoading(id)
    updateStatusContent({
      variables: {
        id,
        status
      },
      onCompleted: (data) => {
        enqueueSnackbar("Content status updated successfully", {
          variant: "success"
        })
        setValue(id, data?.updateStatusContent?.status)
        setStatusLoading("")
      },
      onError: () => {
        setStatusLoading("")
      },
    })
  }

  // On every data change, update the live status checkbox values
  useEffect(() => {
    if (data?.contents?.items) {
      data?.contents?.items?.map(item => {
        setValue(item._id, Boolean(item.status))
      })
    }
  }, [data?.contents?.items])

  const columns = [
    {
      title: 'Serial #',
      dataIndex: 'serialNum',
      width: "10%"
    },
    {
      title: 'Work Name',
      dataIndex: 'title',
      width: "30%"
    },
    {
      title: 'Type',
      dataIndex: 'page',
      width: "20%"
    },
    {
      title: 'Listing Date',
      dataIndex: 'date',
      width: "15%",
      render: (text) => <div>{text ? moment(text).format("LL") : ""}</div>
    },
    {
      title: 'Live Status',
      dataIndex: 'status',
      width: "10%",
      render: (text, record) => statusLoading === record._id ? (
        <Box py={"8px"}>
          <CircularProgress size={20} />
        </Box>
      ) : (
        <FormControlLabel
          control={
            <Controller
              name={`${record._id}`}
              control={control}
              render={({ field: { value, ref, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  inputRef={ref}
                  checked={!!value}
                  color="primary"
                  size={"medium"}
                  onChange={e => {
                    onChange(e.target.checked)
                    updateLiveStatus(record._id, e.target.checked)
                  }}
                />
              )}
            />
          }
          label="Checkbox"
          labelPlacement="end"
        />
      )
    },
    {
      title: 'Actions',
      dataIndex: 'status',
      width: "10%",
      render: (text, record) => (
        <Box>
          <EditIcon style={{ cursor: "pointer" }} onClick={() => navigate(`/dashboard/edit-content/${record._id}`)} />
          <TrashIcon style={{ cursor: "pointer", marginLeft: '15px' }} onClick={() => deleteContentHandler(record._id)} />
        </Box>
      )
    },
  ];

  const onPageChange = (current, pageSize) => {
    setCurrentPage(current)
  }

  const onSubmit = (data) => {
  }


  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomTable
          data={data?.contents?.items ?? previousData?.contents?.items}
          columns={columns}
          loading={loading}
          onChange={onPageChange}
          total={data?.contents?.total ?? previousData?.contents?.total}
          limit={limit}
        />
      </form>
    </Box>
  )
}

export default ListedContent
