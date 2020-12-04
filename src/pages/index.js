import React, { useEffect, useState } from "react"
import { Layout } from "../components"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"
import { FcSearch } from "react-icons/fc"

export default () => {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState("react")
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  )

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url)
      setData(result.data)
    }
    fetchData()
  }, [url])

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.search) {
        setUrl(`https://hn.algolia.com/api/v1/search?query=${values.search}`)
      }
    },
  })

  const validationSchema = yup.object({
    search: yup.string().required("Required"),
  })

  const props = {
    id: "search",
    name: "search",
    type: "text",
    placeholder: "React",
    value: formik.values.search,
    onChange: formik.handleChange,
  }

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <input style={{ height: "40px", width: "300px" }} {...props} />
          </div>
          <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <button
              style={{
                background: "none",
                color: "inherit",
                border: "none",
                padding: "0",
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}
              type="submit"
            >
              <FcSearch />
            </button>
          </div>
        </div>
      </form>

      <div style={{ paddingLeft: 24, paddingRight: 24 }}>
        <ul>
          {data.hits.map(
            item =>
              item.title && (
                <li key={item.objectID}>
                  <a href={item.url} target="_">
                    {item.title}
                  </a>
                </li>
              )
          )}
        </ul>
      </div>
    </Layout>
  )
}
