import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import Layout from './Layout';

describe('Layout', () => {
  test('renders Layout component', () => {
    renderWithProviders(<Layout />);
    const layout = screen.getByRole('main');
    expect(layout).toBeInTheDocument();
  });
});
