import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Loader from '../components/common/Loader';
import ErrorBoundary from '../components/common/ErrorBoundary';

// Lazy loading pages
import Home from '../pages/Home';
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Events = lazy(() => import('../pages/Events'));
const ThinkTank = lazy(() => import('../pages/ThinkTank'));
const BloodRequest = lazy(() => import('../pages/BloodRequest'));
const Team = lazy(() => import('../pages/Team'));
const JoinUs = lazy(() => import('../pages/JoinUs'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader fullScreen />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="events" element={<Events />} />
                        <Route path="think-tank" element={<ThinkTank />} />
                        <Route path="blood-request" element={<BloodRequest />} />
                        <Route path="team" element={<Team />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="join" element={<JoinUs />} />
                        {/* 404 Route */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRoutes;
