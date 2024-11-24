'use client';

export const configEnv = {
    API_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://0983deb0-bf46-43a1-bfde-7f53b793a86d.mock.pstmn.io',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
}