import "../../App.css";
import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiFileSearchFill } from "react-icons/ri";
import { IoCart } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import ApexCharts from "./graph";
import { AiFillFile } from 'react-icons/ai';
import Card from "./Card";
import Donuts from "./Donuts";
import axios from "axios";





function AdminDisplay() {
    const [userName, setuserName] = useState(localStorage.getItem("username"));
    const [total_item, update_total_item] = useState([]);
    var likes1=0;
    var items1=0;

    useEffect(() => {

        const totalfetch = async () => {
            const response1 = await axios.post(
                "http://localhost:3001/post/fetch/all",
                {

                }
            );

            update_total_item(response1.data.result);
            


        }

        totalfetch();

    }, []);

    if (total_item) {
        total_item.map((d, index) => {
          if (d.likes == 1) {
            likes1 += 1
          }

          items1 += 1
        });
      }


    return (<>
        <h1 className="AdminDisplayGeneral">General Statistics</h1>
        <div className="StatsdivblockAdminTotal">
            <div className="usernameAdmin">
                <h1>Welcome back!</h1>
                <p>Nice to see you , <span className="usernamespan">{userName}</span></p>
            </div>
            <div className="StatsdivblockAdmin">
                <div className="StatsdivblockAdmindiv">
                    <div className="StatsdivblockAdmindiv2">
                        <div className="StatsblockicondivAdmin">
                            <AiFillLike className="StatsblockAdminIcon" style={{
                                "width": "22px",
                                "height": "22px",
                                "padding": "11px"
                            }}></AiFillLike>
                        </div>
                    </div>
                    <div className="StatsdivblockAdmindiv3">
                        <p className="StatsblockpcontentAdmin">{likes1}</p>
                        <p>Total like</p>
                    </div>
                </div>
                <div className="StatsdivblockAdmindiv">
                    <div className="StatsdivblockAdmindiv2">
                        <div className="StatsblockicondivAdmin">
                            <RiFileSearchFill className="StatsblockAdminIcon"></RiFileSearchFill>
                        </div>
                    </div>
                    <div className="StatsdivblockAdmindiv3">
                        <p className="StatsblockpcontentAdmin">{items1}</p>
                        <p>Total complaints</p>
                    </div>
                </div>
                <div className="StatsdivblockAdmindiv">
                    <div className="StatsdivblockAdmindiv2">
                        <div className="StatsblockicondivAdmin">
                            <AiFillLike className="StatsblockAdminIcon" style={{
                                "width": "22px",
                                "height": "22px",
                                "padding": "11px"
                            }}></AiFillLike>
                        </div>
                    </div>
                    <div className="StatsdivblockAdmindiv3">
                        <p className="StatsblockpcontentAdmin">{likes1}</p>
                        <p>Total like</p>
                    </div>
                </div>
                <div className="StatsdivblockAdmindiv">
                    <div className="StatsdivblockAdmindiv2">
                        <div className="StatsblockicondivAdmin">
                            <RiFileSearchFill className="StatsblockAdminIcon"></RiFileSearchFill>
                        </div>
                    </div>
                    <div className="StatsdivblockAdmindiv3">
                        <p className="StatsblockpcontentAdmin">{items1}</p>
                        <p>Total complaints</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ShapesAdmin">
            <div className="chartsAdmin">
                <ApexCharts data={total_item}></ApexCharts>
            </div>
            <div className="Donouts">
                <Donuts data={total_item}></Donuts>
            </div>
        </div>
    </>
    );
}

export default AdminDisplay;