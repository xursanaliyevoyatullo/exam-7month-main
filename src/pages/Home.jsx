

import { Link } from "react-router-dom"
import furniture1 from "../assets/furniture1.webp";
import furniture2 from "../assets/furniture2.webp";
import furniture3 from "../assets/furniture3.webp";
import furniture4 from "../assets/furniture4.webp";
import Materials from "../components/Materials";
const furniture = [furniture1, furniture2, furniture3, furniture4];

function Home() {
  return (
    <div>
      <div className="align-element mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-none text-gray-500 sm:text-[56px]">
            We are changing the way people shop.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
          </p>
          <div className="mt-10 ">
            <Link to="products" className="btn btn-info text-white">
              OUR PRODUCTS
            </Link>
          </div>
        </div>
        <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
          {furniture.map((image) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  className="rounded-box h-full w-80  object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Materials />
    </div>
  )
}

export default Home