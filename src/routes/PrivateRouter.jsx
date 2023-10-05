import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
import {useContext} from "react";
import {PropTypes} from "prop-types";
import Loading from "../pages/Loading/Loading";

const PrivateRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
