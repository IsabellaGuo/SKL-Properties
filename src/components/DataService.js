import React, { useEffect, useState } from 'react';

function DataService(props) {
  const { getData } = props;
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const res = await fetch('https://skl-properties-be.herokuapp.com/', { headers });
      const data = await res.json();
      console.log({res, data})
      setJsonData(data);
   }
   fetchData()
  }, [])

  useEffect(() => {
    getData(jsonData)
  }, [jsonData])
    return (
        <div>
            
        </div>
    )
}

export default DataService
