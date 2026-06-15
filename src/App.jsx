import { Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/data-deletion" element={<DataDeletion />} />
    </Routes>
  );
}
