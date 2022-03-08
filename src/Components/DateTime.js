import {
  useEffect,
  useState
} from "react";
import moment from "moment";

export const DateTime = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="border-l-2 border-r-2 w-1/4 text-gray-300 flex flex-col items-center p-2">
      <div className="text-7xl">
        { dateState.toLocaleString('en-US', {
          hour : 'numeric',
          minute : 'numeric',
          second : 'numeric',
          hour12 : false,
        }) }
      </div>
      <div className="text-2xl">
        {
          moment(dateState).format('MMMM Do YYYY')
        }
      </div>
    </div>
  );
}