import React, { useEffect } from 'react';

function DataService() {
  useEffect(() => {
    async function fetchData () {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const res = await fetch('/api/data', { headers });
      console.log(res.text());
   }
   fetchData()
  }, [])
    return (
        <div>
            
        </div>
    )
}

export default DataService
