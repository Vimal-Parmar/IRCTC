import { useParams } from "react-router-dom";
export default function BookList(){
    const {id} = useParams();
    return(
        <h1>BookList Page</h1>
    )
}