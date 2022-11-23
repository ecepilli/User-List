import axios from "axios";
import React, { useState,useEffect } from 'react'

function UserDetail({activeUserId}) {
  const[user,setUser]=useState(null);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
    .then (res => setUser(res.data))
    .finally(()=> setLoading(false));
  },[activeUserId]);

  return (
    <div>
        <h2>Details:</h2>
        {
          loading && <div>LOADING...</div>
          
        }
       {!loading && <pre>{JSON.stringify(user,null,10)}</pre>}
    </div>
  )
}

export default UserDetail 