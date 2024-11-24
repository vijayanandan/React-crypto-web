'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData } from '@/api/store/cryptoApi/api';
import { RootState } from '@/store/store';

const CryptoDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content">
        <h1>Crypto Dashboard</h1>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {/* Dashboard with Crypto Info */}
        <div className="dashboard">
          {data.map((crypto) => (
            <div key={crypto.id} className="crypto-card">
              <h3>{crypto.name}</h3>
              <p className="price">{crypto.price}</p>
              <p className="sentiment">{crypto.sentiment}</p>
            </div>
          ))}
        </div>

        {/* A CTA Button to interact */}
        <button onClick={() => alert('More info coming soon!')}>Get More Data</button>
      </div>
    </div>
  );
};

export default CryptoDashboard;
