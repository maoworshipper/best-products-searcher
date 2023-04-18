import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/utils-for-test';
import Card from './Card';
import { productMock } from './mockTest/product.mock';

describe('Card', () => {
  test('renders Card component', () => {
    renderWithProviders(<Card {...productMock} />);
    expect(screen.getByText(/El Recurso Máximo/i)).toBeInTheDocument();
  });

  test('renders Card component with empty results', () => {
    renderWithProviders(<Card />);
    expect(screen.queryByText(/El Recurso Máximo/i)).not.toBeInTheDocument();
  });
});
