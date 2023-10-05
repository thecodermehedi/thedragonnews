import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import {BsCalendar4} from "react-icons/bs";
const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <section className="h-fit">
      <div className="mb-5">
        <h1 className="font-semibold text-xl text-gray-900 mt-2 mb-5">
          All Category
        </h1>
        <div className="flex flex-col justify-center items-center gap-4 text-gray-500">
          {categories.map((category) => (
            <NavLink
              key={category?.id}
              to={`/category/${category?.id}`}
              className={({isActive, isPending}) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active btn min-h-0 h-10 w-full capitalize bg-black bg-opacity-20 text-black text-opacity-70 border-none hover:bg-opacity-20 text-lg justify-start"
                  : "btn btn-ghost min-h-0 h-10 w-full capitalize border-none text-lg justify-start hover:text-black"
              }
            >
              {category?.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mb-5 flex flex-col justify-center items-center gap-10">
        <div className="card w-full">
          <figure>
            <img src={img1} className="rounded-xl" />
          </figure>
          <div className="w-full">
            <h2 className="card-title p-2 text-gray-600">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="p-2 flex items-center justify-start gap-4">
              <span className="text-gray-500">Sports</span> <BsCalendar4 />{" "}
              <span>Jan 4, 2022</span>
            </div>
          </div>
        </div>
        <div className="card w-full">
          <figure>
            <img src={img2} className="rounded-xl" />
          </figure>
          <div className="w-full">
            <h2 className="card-title p-2 text-gray-600">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="p-2 flex items-center justify-start gap-4">
              <span className="text-gray-500">Sports</span> <BsCalendar4 />{" "}
              <span>Jan 4, 2022</span>
            </div>
          </div>
        </div>
        <div className="card w-full">
          <figure>
            <img src={img3} className="rounded-xl" />
          </figure>
          <div className="w-full">
            <h2 className="card-title p-2 text-gray-600">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="p-2 flex items-center justify-start gap-4">
              <span className="text-gray-500">Sports</span> <BsCalendar4 />{" "}
              <span>Jan 4, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
