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
// eslint-disable-next-line
import React, { useEffect } from "react";
import { lazy } from "react";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import articlesData from "./components/Articles/ArticlesContent/articles";
import boxesData from "./components/Projects/Content/boxs";
import servicesData from "./components/Service/ServiceElements/services";
import newsData from './components/News/NewsElements/newsElements'

const HomePage = lazy(() => import("./pages/HomePage"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const ProductDetailsPage = lazy(() => import("./components/Projects/ProductDetailsPage/ProductDetailsPage"));
const Services = lazy(() => import("./pages/ServicesPage"));
const ServiceElements = lazy(() => import("./components/Service/ServiceElements/ServiceElements"));
const Equipment = lazy(() => import("./pages/EquipmentPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Question = lazy(() => import("./components/About/AboutUsMenu/Question"));
const Vacancies = lazy(() => import("./components/About/AboutUsMenu/Vacancies"));
// eslint-disable-next-line
const Feedback = lazy(() => import("./pages/FeedbackPage"));
const News = lazy(() => import("./pages/NewsPage"));
const NewElements = lazy(() => import("./components/News/NewsElements/NewElements"));
const Articles = lazy(() => import("./pages/ArticlesPage"));
const ArticlesContent = lazy(() => import("./components/Articles/ArticlesContent/ArticlesContent"));
const Contacts = lazy(() => import("./pages/ContactsPage/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:link" element={<ServiceElements services={servicesData} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:photoId" element={<ProductDetailsPage photos={boxesData} />} /> />
          {/* <Route path="/projects/:photoId/buy" element={<BuyPage />} /> */}

          <Route path="/obl" element={<Equipment />} />
          {/* <Route path="/obl/:photoId" element={<EquipmentDetails machenics={machenicsData} />} /> */}

          <Route path="/company" element={<AboutPage />} />
          <Route path="/company/questions" element={<Question />} />
          <Route path="/company/vacancies" element={<Vacancies />} />

          {/* <Route path="/reviews" element={<Feedback />} /> */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:link" element={<NewElements news={newsData} />} />

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:link" element={<ArticlesContent articles={articlesData} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />



        </Route>
      </Routes>
    </Router>
  );
};