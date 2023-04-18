import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/utils-for-test';
import NavBar from './Navbar';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    renderWithProviders(<NavBar />);
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });
});
