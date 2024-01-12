
import { useParams } from "react-router-dom";
export default function AboutUs(){
    const {id} = useParams();
    return(
        <h1>AboutUs Page</h1>
    )
}