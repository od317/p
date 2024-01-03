import { useOutletContext, useParams } from "react-router-dom"

export default function Book(){
    const {id} = useParams()
    console.log(useParams())
    return (<>
    <h1>Book {id} </h1>
    </>)
}