import {useRouteError} from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      {error.status === 404 ? (
        <div className="h-screen bg-white text-black flex flex-col justify-center items-center relative font-montserrat">
          <h1 className="font-bold uppercase text-sm absolute top-64">
            Oops! page not found
          </h1>
          <h1 className="font-black  text-[10rem] tracking-tighter">
            {error.status}
          </h1>
          <p className="font-semibold uppercase text-sm  absolute bottom-56 text-center">
            we are sorry, but the page you requested was <br /> not found
          </p>
        </div>
      ) : (
        <h1 className="font-bold uppercase text-sm ">{error.status}</h1>
      )}
    </>
  );
};

export default Error;
