import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading"

function Materials() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const api = "https://strapi-store-server.onrender.com/api/products?featured=true";

    useEffect(() => {
        axios(api)
            .then((response) => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (data == []) {
        return <Loading />;
    }

    return (
        <div>
            <div className="align-element border-b border-base-300 mt-20 mb-14">
                <h2 className="text-3xl font-medium tracking-wider capitalize">
                    Featured Products
                </h2>
            </div>
            <div className="align-element flex justify-between">
                {data && data.map((item) => (
                    <li className="flex  mb-20" key={item.id}>
                        <Link to={`/material/${item.id}`}>
                            <div className="card w-80 bg-base-100 shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img
                                        src={item.attributes.image}
                                        alt={item.attributes.title}
                                        className="rounded-xl h-64 md:h-48 w-full object-cover" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2
                                        className="card-title capitalize tracking-wider">
                                        {item.attributes.title}
                                    </h2>
                                    <p
                                        className="text-secondary">
                                        ${item.attributes.price}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Materials;
