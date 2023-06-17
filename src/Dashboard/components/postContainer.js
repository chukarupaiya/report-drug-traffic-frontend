import { useState, useEffect } from "react";
import axios from 'axios';
import "../../App.css";
import Post from "./Post";

function PostContiner(props) {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
       
    
        

        props.item.forEach(element => {

            const fetchdata = async () => {
           
                const response = await fetch(
                    `https://ipfs.io/ipfs${element.address.slice(6)}`
                  ).then((response) => response.json());

                  setItems([...items,response])
                  
            };

            fetchdata();
            
        });

        

      }, [props.item]);

    // useEffect(()=>{
    //     const posts = []
    //     for (let i = 0; i < response1.length; i++) {
    //         posts.push(<Post key={i} likes={props.item[i].likes} seen={props.item[i].seen} response={response1[i]} imageurl={response1[i].image}></Post>)
    //     }
    //     console.log(posts)
    //     setpost(posts)
    //     setchange(false)
    // },[response1])






    const temp_item = items.map((element, i) => {
        return <Post key={i} likes={props.item[i].likes} seen={props.item[i].seen} response={element} imageurl={element.image}></Post>
    })

    console.log(items)
    console.log(items.length)
    console.log(props.item.length)





    return <>

        {/* {change ? (<div className="emptydivcontianerAdmin">Loading...</div>) : (temp_item)
        } */}
        {temp_item}
    </>;
}

export default PostContiner;