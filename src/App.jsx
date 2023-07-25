import AppRoutes from "./routes";
import React from 'react';
import style from "./app.module.scss"
import database from "./firebase";

function App() {
 
  console.log(database);
  
  return (
    <div className={style.app}>
      <AppRoutes/>
    </div>
  );
}

export default App;