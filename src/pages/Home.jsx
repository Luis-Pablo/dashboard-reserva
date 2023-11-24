import Chart from "../components/Chart";
import Featured from "../components/Feature";
import Widget from "../components/widget";


const Home = () => {
  return (
    <>
      <div className="flex gap-4 my-2 flex-wrap  mb-8 h-ful justify-center">
        <Widget />
        <Widget />
        <Chart />
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <Featured />
        <Featured />
        <Featured />
        <Featured />
        <Featured />
        <Featured />
        <Featured />
        <Featured />
      </div>
    </>
  );
};

export default Home;
