import { useState ,useEffect} from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { TbWorldUpload } from "react-icons/tb";

function Card(props){

    const [imageurl,setimageurl]=useState("");
    const [description,setdes]=useState("");

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch(
                `https://ipfs.io/ipfs${props.result.slice(6)}`
              ).then((response) => response.json());
              
              setimageurl(response.image.slice(6));
              setdes(response.description);
        };
    
        fetchdata();
      }, []);

     
      console.log(`https://ipfs.io/ipfs${imageurl}`)

    return (
    <>
        <div className="CardDash">
            {imageurl!="" && <img className="CardDashImage" src={"https://ipfs.io/ipfs"+imageurl}/>}
            <p className="CardDashp">
                {description}
            </p>
            {props.likes==1
                ? 
                <AiFillEye className = "Cardicon"></AiFillEye>
                :
                <AiFillEyeInvisible className = "Cardicon"></AiFillEyeInvisible>
            }
            <TbWorldUpload className = "Cardicon1"></TbWorldUpload>
        </div>
    </>
    );
}

export default Card;