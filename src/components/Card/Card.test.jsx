import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import { Card } from './Card';
import { productMock } from './mockTest/product.mock';

describe('Card', () => {
  test('renders Card component', () => {
    renderWithProviders(<Card {...productMock} />);
    expect(screen.getByText(/Power query/i)).toBeInTheDocument();
  });

  test('renders Card component with empty results', () => {
    renderWithProviders(<Card />);
    expect(screen.queryByText(/Power query/i)).not.toBeInTheDocument();
  });
});
