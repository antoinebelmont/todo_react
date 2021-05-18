import React, { useContext, useEffect, useState } from "react";
import ServicesContext from "./utils/serviceContext";

function useMyServiceHook() {
  const myService = useContext(ServicesContext).myService;
  const [data, setData] = useState();

  const getData = async () => {
    const data = await myService.getData();
    setData(data);
  };

  useEffect(() => {
    getData();
  });
  return [data];
}

export default () => {
  const [data] = useMyServiceHook();
  return <span>{data}</span>;
};