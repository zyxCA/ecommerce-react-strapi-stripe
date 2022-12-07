import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { makeRequest } from "../makeRequest"
const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await makeRequest.get(
          url
        )
        setData(response.data.data)

      } catch (error) {
        setErr(true)
      }
      setLoading(false)
    }
    fetchData()

  }, [url])
  // console.log(data)
  return { data, loading, err }
}
export default useFetch