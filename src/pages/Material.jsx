import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading"

function Material() {
    const { id } = useParams();
    const api = `https://strapi-store-server.onrender.com/api/products/${id}`;
    const [data, setData] = useState();
    useEffect(() => {
        axios(api)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [api]);

    if (data == null) {
        return <Loading/>;
    }

    return (
        <>
            {data && (
                <div className="align-element mt-20 grid lg:grid-cols-2">
                    <img
                        src={data.attributes.image}
                        alt={data.attributes.title}
                        className=" w-96 h-80 object-cover rounded-lg"
                    />
                    <div>
                        <h2 className="card-title capitalize font-bold text-2xl tracking-wider mb-2">
                            {data.attributes.title}
                        </h2>
                        <p className="text-gray-400 font-medium mb-2">
                            {data.attributes.company}
                        </p>
                        <p
                            className="dark:text-[#F0F6FF] mb-6">
                            ${data.attributes.price}
                        </p>
                        <h2 className="leading-7 mb-4">
                            {data.attributes.description}
                        </h2>
                        <div>
                            <h4>Colors:</h4>
                            <div className="mt-2">
                                <button
                                    type="button"
                                    className="badge badge-success w-6 h-6 mr-2 border-2"
                                ></button>
                                <button
                                    type="button"
                                    className="badge badge-primary w-6 h-6 mr-2 false"
                                ></button>
                            </div>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label" for="amount">
                                <h4 className="text-md font-medium -tracking-wider capitalize">
                                    amount
                                </h4>
                            </label>
                            <select className="select select-primary border-indigo-600 mb-7 select-md" id="amount">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className="mb-10">
                            <Link to="/cart" className="btn btn-primary">ADD TO BAG</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Material