// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";

// const HomePage = lazy(() => import("./pages/HomePage"));


// export const App = () => {

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   const accessToken = localStorage.getItem('accessToken');
//   //   accessToken && dispatch(refreshUser());
//   // }, [dispatch]);

//   return (
//     <>
//       <Routes>
//         {/* <Route path="/" element={<SharedLayout />}> */}
//           <Route index element={<HomePage />} />
//         {/* </Route> */}
//       </Routes>
//     </>
//   );
// };

import React, { useEffect } from "react";
import { lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Якщо ви використовуєте BrowserRouter

const HomePage = lazy(() => import("./pages/HomePage"));

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  );
};