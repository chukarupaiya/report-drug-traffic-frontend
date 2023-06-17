import "../../App.css";
import { useState, useEffect } from "react";
import { AiFillLike } from "react-icons/ai";
import { RiFileSearchFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import ApexCharts from "./graph";
import Card from "./Card";
import axios from "axios";
import Loading from "./Loading";

function UserDisplay() {
  const [userName, setuserName] = useState(localStorage.getItem("username"));
  const [item, update_item] = useState([]);
  const [total_item, update_total_item] = useState([]);

  //const [data, setdata] =useState([]);


  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL+"post/fetch/byid",
        {
          user_id: localStorage.getItem("userid"),
        }
      );
      update_item(response.data.result);
    };

    fetchdata();


    const totalfetch = async () => {
      const response1 = await axios.post(
        process.env.REACT_APP_BACKEND_URL+"post/fetch/all",
        {

        }
      );
      update_total_item(response1.data.result);
    }
    totalfetch();

  }, []);

  let items = 0;
  let likes = 0;

  if (item) {
    items = item.map((d, index) => {
      if (d.likes == 1) {
        likes += 1
      }
      return <Card key={index} result={d.address} postid={d.postid} likes={d.likes}></Card>
    });
  }

  //setdata(values)
  let items1 = 0;
  let likes1 = 0;


  if (total_item) {
    total_item.map((d, index) => {
      if (d.likes == 1) {
        likes1 += 1
      }
      items1 += 1
    });
  }

  if (localStorage.getItem('reload') == 1) {
    localStorage.setItem('reload', 0)
    window.location.reload();
  }





  return (
    <>
      <h1 className="UserDisplayGeneral">General Statistics</h1>
      <div className="StatsdivblockTotal">
        <div className="username">
          <h1>Welcome back!</h1>
          <p>Nice to see you , {userName}</p>
        </div>
        <div className="Statsdivblock">
          <div className="Statsdivblockdiv">
            <div className="Statsdivblockdiv2">
              <div className="Statsblockicondiv">
                <AiFillLike className="StatsblockIcon" style={{
                  "width": "22px",
                  "height": "22px",
                  "padding": "11px"
                }}></AiFillLike>
              </div>

            </div>
            <div className="Statsdivblockdiv3">
              <p className="Statsblockpcontent">{likes1}</p>
              <p>Total Like</p>
            </div>
          </div>
          <div className="Statsdivblockdiv">
            <div className="Statsdivblockdiv2">
              <div className="Statsblockicondiv">
                <RiFileSearchFill className="StatsblockIcon"></RiFileSearchFill>
              </div>

            </div>
            <div className="Statsdivblockdiv3">
              <p className="Statsblockpcontent">{items1}</p>
              <p>Total Complaints</p>
            </div>
          </div>
          <div className="Statsdivblockdiv">
            <div className="Statsdivblockdiv2">
              <div className="Statsblockicondiv">
                <AiFillLike className="StatsblockIcon" style={{
                  "width": "22px",
                  "height": "22px",
                  "padding": "11px"
                }}></AiFillLike>
              </div>

            </div>
            <div className="Statsdivblockdiv3">
              <p className="Statsblockpcontent">{likes}</p>
              <p>Total likes for me</p>
            </div>
          </div>
          <div className="Statsdivblockdiv">
            <div className="Statsdivblockdiv2">
              <div className="Statsblockicondiv">
                <RiFileSearchFill className="StatsblockIcon"></RiFileSearchFill>
              </div>

            </div>
            <div className="Statsdivblockdiv3">
              <p className="Statsblockpcontent">{items.length == null ? 0 : items.length}</p>
              <p>Total Complaints by me</p>
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <ApexCharts data={item}></ApexCharts>
      </div>
      <div className="olddivcontainer">
        {items}
      </div>
    </>
  );
}

export default UserDisplay;
