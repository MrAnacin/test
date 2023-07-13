import AppRoutes from "./routes";

import style from "./app.module.scss"

function App() {
  return (
    <div className={style.app}>
      <AppRoutes/>
    </div>
  );
}

export default App;
