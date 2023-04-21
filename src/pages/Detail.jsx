import { useParams } from "react-router-dom"

function Detail() {
  const { id } = useParams()

  return (
    <>
      {id}
    </>
  )
}

export default Detail