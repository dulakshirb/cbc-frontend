import { createClient } from "@supabase/supabase-js"
import { useState } from "react"

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY2J6Z2lzZnN3aGt4YXB3enR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjc2MzEsImV4cCI6MjA1MTkwMzYzMX0.wfXz3KK2D-3YIj21tbGPq_Zz9Ztl8fSHv6vMOvNVfZQ`
const url = 'https://khcbzgisfswhkxapwztx.supabase.co'

export default function FileUploadTest() {
  const [file, setFile] = useState(null)

  function handleUpload() {
    if (file == null) {
      alert("please select the file")
      return
    }

    console.log(file)

    const fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1]

    if (extension != 'jpg' && extension != 'png' && extension != 'jpeg') {
      alert("Please select a jpg or png file")
      return
    }

    const supabase = createClient(url, key)
    supabase.storage.from("cbc-images").upload(file.name, file, {
      cacheControl: "3600",
      upsert: false
    }).then((res) => {
      console.log(res)
    })

    supabase.storage.from("cbc-images").getPublicUrl(file.name).then((res)=>{
      console.log(res)
    })
  }

  return (
    <div>
      <h1>File upload Test</h1>
      <input type="file" onChange={(e) => {
        setFile(e.target.files[0])
      }} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}