import Chart from "../components/Chart";
import Featured from "../components/Feature";
import Widget from "../components/widget";


const Home = () => {
  return (
    <>
      <div className="flex gap-4 my-2 flex-wrap lg:flex-nowrap mb-8 h-full justify-center basis-full">
        <div className="flex gap-4 my-2 flex-wrap justify-center basis-full lg:basis-1/2 lg:flex-nowrap">
          <Widget type={"lastMonth"} />
          <Widget type={"currentMonth"} />
        </div>
        <div className="basis-full lg:basis-1/2">
          <Chart />
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center basis-full ">
        <Featured />
      </div>
    </>
  );
};

export default Home;
