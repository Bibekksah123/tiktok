import { axiosInstance } from "@/config/axiosInstance"

 export const getAllVideos =async () => {
  try {
    const { data } = await axiosInstance.get("/videos")
    return data
  } catch (error) {
    console.log("Something went wrong !",error)
  }
}