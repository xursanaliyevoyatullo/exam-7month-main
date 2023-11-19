import { useState } from "react"
import axios from "axios";

function ProductNavbar() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [category, setCategory] = useState("all");
    const [company, setCompany] = useState("all");
    const [sort, setSort] = useState("a-z");
    const [rangeValue, setRangeValue] = useState(100000);

    const handleReset = (e) => {
        e.preventDefault();
        setSearch("");
        setCategory("all");
        setCompany("all");
        setSort("a-z");
        setRangeValue(100000);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const api = `https://strapi-store-server.onrender.com/api/products?search=${search}&category=${category}&company=${company}&order=${sort}&price=${rangeValue}`;

        axios(api)
            .then((response) => {
                console.log(response);
                setData(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form

            className="align-element mt-10 grid relative  sm:grid-cols-2 md:grid-cols-3 rounded-md lg:grid-cols-4 p-5 gap-5"
        >
            <div>
                <label htmlFor="price" className="dark:text-[#F0F6FF]">Serarch Product</label>
                <br />
                <input
                    type="search"
                    placeholder="Search Furniture"
                    name="product"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="input input-bordered w-full input-sm max-w-xs dark:text-[#F0F6FF] rounded-xl p-1 px-2 my-3"
                />
            </div>
            <div>
                <label className="dark:text-[#F0F6FF]" htmlFor="category">
                    Category
                </label>
                <br />
                <select
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="input input-bordered w-full input-sm max-w-xs dark:text-[#F0F6FF] rounded-xl p-1 px-2 my-3"
                    name="category"
                >
                    <option value="all">all</option>
                    <option value="kids">Kids</option>
                    <option value="chairs">Chairs</option>
                    <option value="tables">Tables</option>
                    <option value="beds">Beds</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>
            <div>
                <label className="dark:text-[#F0F6FF]" htmlFor="company">
                    Company
                </label>
                <br />
                <select
                    id="company"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    className="input input-bordered w-full input-sm max-w-xs dark:text-[#F0F6FF] rounded-xl p-1 px-2 my-3"
                    name="company"
                >
                    <option value="all">all</option>
                    <option value="modenza">Modenza</option>
                    <option value="luxora">Luxora</option>
                    <option value="homestead">Homestead</option>
                    <option value="cumfora">Cumfora</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>

            <div>
                <label className="dark:text-[#F0F6FF]" htmlFor="sort">Sort By </label>
                <br />
                <select
                    id="sort"
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                    className="input input-bordered w-full input-sm max-w-xs dark:text-[#F0F6FF] rounded-xl p-1 px-2 my-3"
                    name="sort"
                >
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                    <option value="high">high</option>
                    <option value="low">low</option>
                </select>
            </div>
            <div>
                <label htmlFor="price" className="dark:text-[#F0F6FF]">Select Price </label>
                <br />
                <input
                    className="w-56"
                    type="range"
                    min={100}
                    max={100000}
                />
                <div className="flex items-center gap-24">
                    <p className="dark:text-[#F0F6FF]">0</p>
                    <p className="text-center dark:text-[#F0F6FF]">Max : $1,000.00</p>
                </div>
            </div>
            <div class="form-control items-center">
                <label for="shipping" class="label cursor-pointer">
                    <span class="label-text capitalize">free shipping</span>
                </label>
                <input type="checkbox" name="shipping" class="checkbox checkbox-primary checkbox-sm" />
            </div>
            <div className="flex gap-20 items-center">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    // onChange={(e) => setRangeValue(parseInt(e.target.value))}
                    className="w-full btn btn-sm  btn-info"
                >
                    Search
                </button>
            </div>
            <div className="flex gap-20 items-center">
                <button
                    onClick={handleReset}
                    className="w-full btn btn-secondary btn-sm"
                >
                    RESET
                </button>
            </div>
        </form>
    );
}

export default ProductNavbar;
