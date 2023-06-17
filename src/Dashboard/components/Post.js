import { FiUser } from 'react-icons/fi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { useState ,useEffect} from "react";
import axios from 'axios';
import "../../App.css";

function Post(props) {

    const [imageurl,setimageurl]=useState("");
    const [response,setdes]=useState("");
    const [aggregate,setaggregate] = useState(props.aggregate)
    const [likes,setlikes]=useState(props.likes);
    const [seen,setseen] = useState(props.seen);

    useEffect(() => {
        const fetchdata = async () => {
            // console.log("https://ipfs.io/ipfs"+props.result.slice(6))
            const response = await fetch(
                `https://ipfs.io/ipfs${props.result.slice(6)}`
              ).then((response) => response.json());
              //console.log(response);
              
              setimageurl(response.image);
              setdes(response);
        };
    
        fetchdata();

      }, []);

    const handleClick = async() =>{
            const value = (likes == 1) ? 0 : 1;
            setlikes(value)
            const response = await axios.post(
                process.env.REACT_APP_BACKEND_URL+"post/update",
                {
                    user_id:props.userid,
                    post_id:props.postid,
                    like:value
                }
              );
    }

    
    const handleClick1 = async() =>{
        const value = (seen == 1) ? 0 : 1;
        setseen(value)
        const response = await axios.post(
            process.env.REACT_APP_BACKEND_URL+"post/update",
            {
                user_id:props.userid,
                post_id:props.postid,
                seen:value
            }
          );
}
// console.log("https://ipfs.io/ipfs"+imageurl.slice(6))

    return (
        <>
            <div className="PostDash">
                <img className="PostDashImage" src={`https://ipfs.io/ipfs${imageurl.slice(6)}`} />
                <p className="PostDashp">
                    {response.description}
                </p>
                <div className="PostDashUser">
                    <div className='PostDashIconDiv'>
                    <FiUser className='PostDashIcon'></FiUser>
                    </div>
                    <div className='PostDashUserPdiv'>
                        <h3>
                            {response.username}
                        </h3>
                    </div>
                    <div className='PostDashIconDiv '>
                        {
                            likes === 1 ?<AiFillLike className='PostDashIcon1 hoverelement' onClick={handleClick}></AiFillLike>  :<AiOutlineLike className='PostDashIcon1 hoverelement' onClick={handleClick}></AiOutlineLike>
                        }
                    </div>
                    <div className='PostDashIconDiv '>
                        {
                            seen === 1 ?<AiFillEye className='PostDashIcon1 hoverelement' onClick={handleClick1}></AiFillEye>  :<AiFillEyeInvisible className='PostDashIcon1 hoverelement' onClick={handleClick1}></AiFillEyeInvisible>
                        }
                    </div>
                </div>
                {/* <h3 className="texth5aggregate">
                     trueness: {aggregate}
                </h3> */}
            </div>
        </>
    );
}

export default Post;