import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';

// Lazy load components for better initial loading
const Home = React.lazy(() => import('./pages/Home'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Earned = React.lazy(() => import('./pages/Earned'));
const Notifications = React.lazy(() => import('./pages/Notifications'));
const Messages = React.lazy(() => import('./pages/Messages'));
const Premium = React.lazy(() => import('./pages/Premium'));
const More = React.lazy(() => import('./pages/More'));
const UserProfile = React.lazy(() => import('./pages/UserProfile'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen bg-slate-900 text-white">
          <Sidebar />
          <div className="lg:ml-64">
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-16 pb-20 lg:pb-4">
              <Suspense 
                fallback={
                  <div className="flex items-center justify-center min-h-[60vh]">
                    <LoadingSpinner />
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/earned" element={<Earned />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/premium" element={<Premium />} />
                  <Route path="/more" element={<More />} />
                  <Route path="/:username" element={<UserProfile />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          </div>
          <MobileNav />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;