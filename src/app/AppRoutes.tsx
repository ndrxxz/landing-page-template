import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "@/pages/ErrorBoundary";

import Home from "@/pages/Home";
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const PageNotFound = lazy(() => import("@/pages/PageNotFound"));

function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppRoutes;
