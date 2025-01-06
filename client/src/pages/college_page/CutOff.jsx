import CutoffBox from "../../component/college_page_component/CutOffBox";
import OverviewBox from "../../component/college_page_component/OverviewBox";
import { useEffect, useState } from "react";
import Placeholder from "../../component/college_page_component/Placeholder";

const CutOff = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const CutOffPage = () => {
    return (
      <>
        {" "}
        {name.map((college) => (
          <div className="mt-3">
            <OverviewBox name={name} />
            <div className="cut-off-box">
              <CutoffBox collegeData={name} />
            </div>
          </div>
        ))}
      </>
    );
  };
  return <div className="">{isLoading ? <Placeholder /> : <CutOffPage />}</div>;
};
export default CutOff;
