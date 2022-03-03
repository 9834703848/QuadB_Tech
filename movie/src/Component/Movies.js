import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate, } from 'react-router';

export default function Movies(props) {
    const navigate = useNavigate();
    const [data, setdata] = useState();

    function get(event) {

        props.data.map(val => {
            console.log(val)
            if (val["show"]["name"] == event.target.value) {
                setdata(val, () => {
                    console.log(event.target.value, data, "hefje")

                })
            }
        })
        console.log(data["show"]["schedule"][0]["time"])
        navigate('/details', { state: { id: data["show"]["name"], color: data["show"]["summary"], url: data["show"]["image"]["original"] } });


    }
    return (
        <div className="flex flex-wrap bg-purple-400 font-sans text-white pt-[50px]">
            {
                Object.entries(props.data).map(val => {
                    return <div className="w-[300px] ml-[120px] h-[600px] mb-[30px] border-2 rounded-lg border-white">

                        <img src={val[1]["show"]["image"]["original"]} className="h-[400px] w-[300px] " />
                        <div className="flex justify-start text-[25px] ">
                            <h1 className="text-black">MOVIE</h1>
                            <h1 className="ml-[20px]">{val[1]["show"]["name"]}</h1>
                        </div>
                        <div className="border border-white w-[295px]"></div>
                        <div className="flex justify-start text-[25px] ">
                            <h1 className="text-black">LANGUAGE</h1>
                            <h1 className="ml-[20px]">{val[1]["show"]["language"]}</h1>
                        </div>
                        <div className="border border-white w-[295px]"></div>
                        <div className="flex justify-start text-[25px] ">
                            <h1 className="text-black">TIME</h1>
                            <h1 className="ml-[20px]">{val[1]["show"]["runtime"]}</h1>
                        </div>
                        <div className="border border-white w-[295px]"></div>
                        <div className="flex justify-start text-[25px] ">
                            <h1 className="text-black">GENER</h1>
                            <h1 className="ml-[20px] text-[20px]">{val[1]["show"]["genres"]}</h1>
                        </div>
                        <div className="border border-white w-[295px]"></div>
                        <div className="flex justify-around text-[20px] ">

                            <button onClick={get} value={val[1]["show"]["name"]} className="bg-black w-[150px] h-[35px]">KNOW MORE</button>

                        </div>
                    </div>
                })
            }
        </div>
    )
}
