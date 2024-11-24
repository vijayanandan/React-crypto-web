import React from 'react';
import CryptoDashboard from '@/components/CryptoDashboard';
import Sidebar from '@/components/Sidebar';
import '@/styles/global.css';

export default function CryptoDashboardPage() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        <CryptoDashboard />
      </div>
    </div>
  );
}
