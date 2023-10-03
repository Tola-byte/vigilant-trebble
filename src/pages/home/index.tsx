import { Banner } from "../../components/banner";
import { Mission } from "../../components/mission";
import { Solution } from "../../components/solution";
import { Vacanies } from "../../components/vacancies";

function Home() {
  return (
    <div className="">
      <Banner />
      <Mission />
      <Solution />
      <Vacanies/>
    </div>
  );
}

export default Home;
