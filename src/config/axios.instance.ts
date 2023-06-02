import axios, { AxiosError } from 'axios'

const axiosInstance = axios.create({})

axiosInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (err: AxiosError<any>) => {
    const res = err.response
    const msg = res?.data?.error || res?.data?.errors[0]
    const status = res?.status ? res.status : 0

    return Promise.reject(res)
  }
)
export default axiosInstance
