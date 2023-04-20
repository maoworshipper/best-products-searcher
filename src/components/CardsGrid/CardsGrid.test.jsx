import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import CardsGrid from './CardsGrid';
import { productsMock } from './mockTest/products.mock';

describe('CardsGrid', () => {
  test('renders CardsGrid component', () => {
    renderWithProviders(<CardsGrid />, {
        preloadedState: {
            products: productsMock,
        },
    });
    expect(screen.getByText(/Búsqueda:/i)).toBeInTheDocument();
  });

    test('renders CardsGrid component with empty results', () => {
        renderWithProviders(<CardsGrid />, {
            preloadedState: {
                products: {
                    results: [],
                    query: 'test',
                    paging: {
                        total: 0,
                    },
                },
            },
        });
        expect(screen.getByText(/Búsqueda:/i)).toBeInTheDocument();
    });
});
