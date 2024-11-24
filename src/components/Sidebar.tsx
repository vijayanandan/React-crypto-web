'use client';

import React from 'react';
import Link from 'next/link';
import '@/styles/global.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="logo">CryptoBoard</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
