import { getAllVideos } from '@/api/video'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function useFetchAllVideos() {
  const {data,isError,isFetched,isFetching } = useQuery({
    queryKey: ["videos"],
    queryFn: getAllVideos,
    cacheTime:0,
  })
  return { data, isError, isFetched, isFetching }
}

export default useFetchAllVideos