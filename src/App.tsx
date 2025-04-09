import './App.scss';
import { NavBar } from './components/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <div data-cy="app">
    <NavBar />

    <main className="section">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="people">
          <Route index element={<PeoplePage />} />
          <Route path=":slug" element={<PeoplePage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  </div>
);
