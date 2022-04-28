import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Map from "./components/Map";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v3/events"
      );
      setEventData(data.events);
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(eventData);


  return <>
  <Header/>
  {!loading ? <Map eventData={eventData} /> : <Spinner/>}
  </>;
}

export default App;
