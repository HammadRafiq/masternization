import { Box, Checkbox, CircularProgress, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTable from '../../../Components/Common/CustomTable';
import { ReactComponent as TrashIcon } from "../../../Assets/trash.svg"
import { ReactComponent as EditIcon } from "../../../Assets/edit.svg"
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';
import CustomPagination from '../../../Components/Common/CustomPagination';
import moment from 'moment';
import CommonDeleteModal from '../../../Components/Common/CommonDeleteModal';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ALL_MASTERCOURSES = gql`
  query($limit: Int, $page: Int){
    masterCourses(limit: $limit, page: $page) {
      total
      items {
        _id
        desc
        name
        status
        date
        icon {
          alt
          src
        }
      }
    }
  }
`

const UPDATE_STATUS_MASTERCOURSE = gql`
  mutation($id: ID!, $status: Boolean!){
    updateStatusMasterCourse(id: $id, status: $status) {
      _id
      status
    }
  }
`

const DELETE_MASTERCOURSE = gql`
mutation($id: ID){
  deleteMasterCourse(id: $id)
}
`
const limit = 10

const ListedMasterCourses = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [statusLoading, setStatusLoading] = useState("")

  const { loading, data, previousData, refetch } = useQuery(ALL_MASTERCOURSES, {
    variables: {
      page: currentPage,
      limit: limit
    },
    notifyOnNetworkStatusChange: true // Refetches data on query invalidation
  })
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
    },
    shouldUnregister: true
  })

  const [deleteMasterCourse, { loading: loading1, data: data1 }] = useMutation(DELETE_MASTERCOURSE)
  const [updateStatusMasterCourse, { loading: loading2 }] = useMutation(UPDATE_STATUS_MASTERCOURSE)

  const updateLiveStatus = (id, status) => {
    setStatusLoading(id)
    updateStatusMasterCourse({
      variables: {
        id,
        status
      },
      onCompleted: (data) => {
        enqueueSnackbar("MasterCourse status updated successfully", {
          variant: "success"
        })
        setValue(id, data?.updateStatusMasterCourse?.status)
        setStatusLoading("")
      },
      onError: () => {
        setStatusLoading("")
      },
    })
  }

  const deleteMasterCourseHandler = (id) => {
    deleteMasterCourse({
      variables: {
        id: id
      },
      onCompleted: () => {
        enqueueSnackbar("MasterCourse deleted successfully", {
          variant: "success"
        })
        refetch()
      }
    })
  }

  // On every data change, update the live status checkbox values
  useEffect(() => {
    if (data?.masterCourses?.items) {
      data?.masterCourses?.items?.map(item => {
        setValue(item._id, Boolean(item.status))
      })
    }
  }, [data?.masterCourses?.items])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: "20%"
    },
    {
      title: 'Desc',
      dataIndex: 'desc',
      width: "35%",
      render: (text) => <div style={{ overflow: "hidden", display: "-webkit-box", lineClamp: 2, WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{text}</div>
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
      width: "15%",
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
      width: "15%",
      render: (text, record) => (
        <Box display={"flex"}>
          <EditIcon style={{ cursor: "pointer", marginRight: "5px" }} onClick={() => navigate(`/dashboard/edit-master-course/${record._id}`)} />
          <CommonDeleteModal onDelete={() => deleteMasterCourseHandler(record._id)} />
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
        data={data?.masterCourses?.items ?? previousData?.masterCourses?.items}
        columns={columns}
        loading={loading}
        onChange={onPageChange}
        total={data?.masterCourses?.total ?? previousData?.masterCourses?.total}
        limit={limit}
      />
    </Box>
  )
}

export default ListedMasterCourses
