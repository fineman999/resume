import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ResumePage from './pages/ResumePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<ResumePage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);

export default App;
