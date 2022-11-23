import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import React,{ useState } from 'react';
import UserDetail from './components/UserDetail';

function App() {
  const [activeUserId,setActiveUserId]=useState(null);
  return (
    <div className="App">
      Active User Id:{activeUserId}
    <div><UserList setActiveUserId={setActiveUserId}/></div>
    <div>
      {
        activeUserId && 
        <div>
            <UserDetail activeUserId={activeUserId}/>
          </div>
      }
    
    </div>
    </div>
  );
}

export default App;
