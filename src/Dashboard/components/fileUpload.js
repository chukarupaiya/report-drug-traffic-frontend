import React, { useState} from 'react';
import {TbCameraPlus} from 'react-icons/tb';
import {  TextField,Button } from '@mui/material';
import { styled } from "@mui/material/styles";
import "../../App.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NFTStorage } from 'nft.storage';
import Loading from './Loading';

const CssTextField = styled(TextField)({

  

    
    "& label.Mui-focused": {
      color: "white"

    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(255,255,255,0.7)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.7)",
        borderRadius: 14,
      },
      "&:hover fieldset": {
        borderColor: "rgba(255,255,255,0.7)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(255,255,255,0.7)"
      }
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      fontSize: "20px"
      // Use the system font instead of the default Roboto font.
    },
    "& label": {color: "white"},
  });

const FileInput = (props) => {
    const navigate = useNavigate();
    const [userInfo, setuserInfo] = useState({});
    const [Description, setDescription] = useState("");
    const [latitude, setlatitude] = useState(null);
    const [longitude,setlongitude] = useState(null);
    const [loading,setloading]=useState(false);
    const [date,setdate] = useState(null);

    

    const imageHandler=function(event){
       
        setuserInfo({
            file:event.target.files[0],
            filepreview:URL.createObjectURL(event.target.files[0]),
          });
        
    }

    
    const API_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQwRDQ5YTVGZDQzRmE0NjNCMmIwYTNCNEJCMjNCM2Q5YzRCODE5YjIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NzY4NTYyMjU3NSwibmFtZSI6ImRydWdzIn0.CvJIfht1anEA7IduVIrs2gup1LL1xbJe8Ro0J1kDclI';
    
    async function storeExampleNFT() {

      var formData = new FormData();

      formData.append(
        "file",
        userInfo.file,
        userInfo.file.name,
      );

      formData.append(
        "lat",
        latitude
      )

      formData.append(
        "long",
        longitude,
      )

      formData.append(
        "s",
        Description,
      )
 
      
        const res = await axios.post('http://127.0.0.1:8000/objectdetection/', formData);
        console.log(res.data);

      const result1=await axios.post('http://localhost:3001/location/add',{
        latitude:parseFloat(latitude),
        longitude:parseFloat(longitude)
      });
      let mlaggregatevalue;

      mlaggregatevalue=res.data.result;



      console.log("Aggregate value is " + mlaggregatevalue*100);


      const image = userInfo.file


    const nft = {
            image,
            name: "Narcotics drug complaints",
            description: `${Description}`,
            latitude: `${latitude}`,
            longitude:`${longitude}`,
    
            username:`${localStorage.getItem("username")}`,
            aggregate:`${mlaggregatevalue*100}`,
            date:`${new Date()}`,
            properties: {
              type: "blog-post",
              origins: {
                http: "https://blog.nft.storage/posts/2021-11-30-hello-world-nft-storage/",
                ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
              },
              authors: [{ name: localStorage.getItem("username") }],
            }
          }

      const client = new NFTStorage({ token: API_KEY })
      const metadata = await client.store(nft)

      console.log(" metadata web3 :")
      console.log(metadata)
  
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const d = new Date();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      let Val = `${month} ${year}`;

      const result=await axios.post('http://localhost:3001/post/add',{
          user_id:localStorage.getItem("userid"),
          like:0,
          address:metadata.url,
          date:Val,
          seen:0,
          time:{date},
          aggregate:`${mlaggregatevalue*100}`
      });
    }


    const SubmitHandler = async() => {
      setloading(true);
          await storeExampleNFT();
          setloading(false);
          localStorage.setItem("reload",1)
          navigate("/");
    }

    return (
        <>

        {loading && <Loading></Loading>}
            <div className='ImageHandlerMainDiv'>
                    <div className='ImageHandlerMainDiv1'>
                        <label htmlFor="filePicker">
                            {(userInfo.filepreview==null)?
                                <TbCameraPlus className='TbCameraPlus'></TbCameraPlus>
                            :
                            <img className="TbCameraPlus1"  src={userInfo.filepreview} alt="UploadImage" />
                            }
                        </label>
                        <input id="filePicker" style={{visibility:"hidden"}} type={"file"} accept="image/*" onChange={imageHandler}></input>
                    </div>
            </div>
            <div className='FileUploaderMainDiv'>
                <div className='FileUploaderMainDiv1'>
                    <div className='FileUploaderMainDiv2'>
                    <CssTextField
                            label="Description"
                            multiline
                            rows={13}
                            value={Description}
                            defaultValue="Enter description here..."
                            onChange={function(e){
                                e.preventDefault();
                                setDescription(e.target.value);
                            }}
                            sx={{ 
                                width: "100%", 
                                height:"100%", 
                                borderRadius: "27px", 
                                boxSizing:"border-box", 
                                fontSize:"20px",
                                lineHeight:"150%",
                                color: "blue" , 
                            }
                        }
                    />
                    </div>
                    <div className='FileUploaderMainDiv3'>
                        <CssTextField
                            label="Latitude" 
                            value={latitude}
                            onChange={function(e){
                                e.preventDefault();
                                setlatitude(e.target.value);
                            }}
                            sx={
                                {
                                    width: "100%", 
                                    height:"100%", 
                                    borderRadius: "27px",
                                }
                            }
                        >
                        </CssTextField>
                    </div>
                    <div className='FileUploaderMainDiv4'>
                        <CssTextField
                                label="Longitude" 
                                value={longitude}
                                onChange={function(e){
                                    e.preventDefault();
                                    setlongitude(e.target.value);
                                }}
                                sx={
                                    {
                                        width: "100%", 
                                        height:"100%", 
                                        borderRadius: "27px",
                                    }
                                }
                            >
                        </CssTextField>
                    </div>
                    <div className='DateTime'>
                        <label className='DateLabel'>Crime Spotted Time</label>
                        <input type="datetime-local" id="DateTime" name="SpotTime" onChange={function(e){
                                    e.preventDefault();
                                    setdate(e.target.value);
                                }}></input>
                    </div>
                    <div className='FileUploaderMainDiv5'>
                            <Button variant="contained"
                                sx={
                                    {
                                        borderRadius:'30px',
                                        width:"100%",
                                        height:"80%"
                                    }

                                }
                                onClick={SubmitHandler}
                                >
                                Submit
                            </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FileInput;
