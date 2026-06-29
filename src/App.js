import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/font-awesome.min.css";
import "./styles/linearicons.css";
import "./styles/main.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import("./pages/Home"));
const NoPageFound = lazy(() => import("./pages/NoPageFound"));
const UiUxProjectPage = lazy(() => import("./pages/UiUxProjectPage"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#fff"
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid #e0e0e0",
        borderTop: "3px solid #0378b8",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="home" exact element={<Home />}></Route>
            <Route
              path="ui-ux-project/:id"
              exact
              element={<UiUxProjectPage />}
            ></Route>
            <Route path="case-study/:slug" exact element={<CaseStudyPage />}></Route>
            <Route path="*" exact element={<NoPageFound />}></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
