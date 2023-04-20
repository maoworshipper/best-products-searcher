import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    renderWithProviders(<Sidebar />);
    const sidebar = screen.getByRole('navigation');
    expect(sidebar).toBeInTheDocument();
  });

    test('renders Sidebar component with title', () => {
    renderWithProviders(<Sidebar title="Filters" />);
    const title = screen.getByText('Filters');
    expect(title).toBeInTheDocument();
    });
});
