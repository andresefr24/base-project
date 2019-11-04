import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { templateTrigger } from "~/store/modules/templateReducer/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("using effect");
    dispatch(templateTrigger());
  }, []);

  return <div>Home</div>;
};

export default Home;
