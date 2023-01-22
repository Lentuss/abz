import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const Home = lazy(() => import('./pages/home/Home'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));
const Preloader = lazy(() => import('./common/Preloader/Preloader'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
