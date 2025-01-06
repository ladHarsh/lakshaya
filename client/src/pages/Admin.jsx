import { useEffect, useState } from "react";
import axios from "axios";
const Admin = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios
      .get("https://lakshaya.onrender.com/college")
      .then((colleges) => setColleges(colleges.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="">{JSON.stringify(colleges)}</div>
    </>
  );
};
export default Admin;
