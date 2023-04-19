import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/utils-for-test';
import Footer from './Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
    renderWithProviders(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
