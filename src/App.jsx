import AppRoutes from "./routes";
import React from 'react';
// import FireBase from "./firebase";

import style from "./app.module.scss"

function App() {
  return (
    <div className={style.app}>
      <AppRoutes/>
    </div>
  );
}

export default App;