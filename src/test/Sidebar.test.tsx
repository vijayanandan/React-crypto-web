import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '@/components/Sidebar'; // Adjust the path to where your Sidebar is located

describe('Sidebar Component', () => {
  it('renders the Sidebar with logo and link', () => {
    render(<Sidebar />);

    // Check if the "CryptoBoard" logo is in the document
    expect(screen.getByText('CryptoBoard')).toBeInTheDocument();

    // Check if the link with "Dashboard" text is in the document
    expect(screen.getByText('Dashboard')).toBeInTheDocument();

    // Check if the link points to the correct URL
    const dashboardLink = screen.getByText('Dashboard');
    expect(dashboardLink).toHaveAttribute('href', '/');
  });
});
