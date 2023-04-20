import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import { ProductCard } from './ProductCard';
import { productMock } from './../mockTest/product.mock';

describe('ProductCard', () => {
  test('renders ProductCard component', () => {
    renderWithProviders(<ProductCard />, {
      preloadedState: {
        products: {
          item: productMock,
        },
      },
    });
    expect(
      screen.getByText(
        /Libro Consultas:power Query El Recurso Máximo Excel 365 2021/i,
      ),
    ).toBeInTheDocument();
  });

  test('renders ProductCard component without item', () => {
    renderWithProviders(<ProductCard />);
    expect(
      screen.queryByText(
        /Libro Consultas:power Query El Recurso Máximo Excel 365 2021/i,
      ),
    ).not.toBeInTheDocument();
  });

  test('renders ProductCard component with item and without pictures', () => {
    renderWithProviders(<ProductCard />, {
      preloadedState: {
        products: {
          item: {
            ...productMock,
            pictures: [],
          },
        },
      },
    });
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('renders ProductCard component with item and available_quantity > 2', () => {
    renderWithProviders(<ProductCard />, {
      preloadedState: {
        products: {
          item: {
            ...productMock,
            available_quantity: 3,
          },
        },
      },
    });
    expect(screen.getByText(/3 unidades disponibles/i)).toBeInTheDocument();
  });

  test('renders ProductCard component with item with description', () => {
    renderWithProviders(<ProductCard />, {
      preloadedState: {
        products: {
          item: {
            ...productMock,
            description: 'This is a description\nAnd another line',
          },
        },
      },
    });
    expect(screen.getByText(/And another line/i)).toBeInTheDocument();
  });

  test('add to cart click button', () => {
    renderWithProviders(<ProductCard />, {
      preloadedState: {
        products: {
          item: productMock,
        },
      },
    });

    const buttonAddToCart = screen.getByText(/Comprar/i);
    fireEvent.click(buttonAddToCart);
    expect(buttonAddToCart).toBeInTheDocument();
    expect(buttonAddToCart).toHaveTextContent(/Agregado al carrito/i);
    expect(buttonAddToCart).toHaveAttribute('disabled');
  });
});
