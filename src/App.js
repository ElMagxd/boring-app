import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
   const [data, setData] = useState({});
   const [isError, setIsError] = useState(false);

   const fetchData = async () => {
      setIsError(false);
      try {
         const result = await axios('https://www.boredapi.com/api/activity/');
         setData(result.data);
         if (result.data.error) setIsError(true);
      } catch (e) {
         setIsError(true);
         console.log(e);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div>
         <h1>
            {data.activity}
         </h1>
         <button onClick={fetchData}>
            Get activity
         </button>
         { isError && <p>ERROR</p>}
      </div >
   );
};

export default App;