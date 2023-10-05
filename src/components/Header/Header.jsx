import Logo from "../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-4 py-10 bg-white">
      <img src={Logo} alt="The Dragon News" />
      <h2 className="text-xl">Journalism Without Fear or Favour</h2>
      <p className="font-medium text-xl">
        <span className="text-gray-500"> {moment().format("dddd,")}</span>{" "}
        {moment().format("MMMM D, YYYY")}
      </p>
    </header>
  );
};

export default Header;
