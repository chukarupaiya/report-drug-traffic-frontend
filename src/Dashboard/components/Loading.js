import { React } from 'react';

import './Loading.css';

import gif1 from './gif3.gif';



const Loading = (props) => {



    return (

        <div>

            <div className='backdrop'>

            </div>

            <div className='loading-outer'>



                <div className='loading-inner1'>
                    <img src={gif1}></img>

                </div>
                <div className='loading-inner2'>
                    <p>Your Complaint being Submitting</p>

                </div>


            </div>

        </div>


    );
}


export default Loading;
