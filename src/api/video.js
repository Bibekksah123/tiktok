import { axiosInstance } from "@/config/axiosInstance"

 export const getAllVideos =async () => {
  try {
    const { data } = await axiosInstance.get("/videos")
    console.log(data)
    return data
  } catch (error) {
    console.log("Something went wrong !",error)
  }
}