import { DateTime } from "./Components/DateTime";
import { Weather } from "./Components/Weather";

const App = () => {


  return (
    <div className="bg-black h-screen p-8">

      <div className="text-gray-300 border-l-2 border-r-2 w-1/4 divide-y divide-gray-300 space-y-2 md:space-y-6">
        <DateTime/>
        <Weather/>
      </div>

    </div>
  );
}

export default App;
