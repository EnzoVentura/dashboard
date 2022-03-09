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
    <div className="text-center">
      <div className="text-2xl md:text-4xl lg:text-7xl">
        { dateState.toLocaleString('en-US', {
          hour : 'numeric',
          minute : 'numeric',
          second : 'numeric',
          hour12 : false,
        }) }
      </div>
      <div className="text-sm md:text-lg lg:text-2xl">
        {
          moment(dateState).format('MMMM Do YYYY')
        }
      </div>
    </div>
  );
}