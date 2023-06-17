import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";



function Feedpage(){
    const [item, update_item] = useState([]);
  

    useEffect(() => {
      const fetchdata = async () => {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL+"post/fetch/all",
          {}
        );
        var duplicates = response.data.result;
        //console.log(duplicates)
        update_item(duplicates);
      };
  
      fetchdata();
    }, []);


  let items;
  
  if(item){
    item.sort(function(a,b){return parseFloat(b.aggregate) - parseFloat(a.aggregate)})
    item.sort(function(a, b){return a.seen - b.seen})
    items=item.map((d,index)=>{   
        console.log(d)
        return <Post key={index} result={d.address} userid={d.user_id} postid={d.post_id} likes={d.likes} seen={d.seen} aggregate={d.aggregate}></Post>
    });

  
  }
  else{
    items = <div className="emptydivcontianerAdmin">No posts have been posted</div>
  }
  
   
    return( 
    <div className="olddivcontainerAdmin" >
        {items}
    </div>
    );
}

export default Feedpage;