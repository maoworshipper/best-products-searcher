import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/utils-for-test';
import CardsGrid from './CardsGrid';
import { productsMock } from './mockTest/products.mock';
import { addResults } from '@redux/productsSlice';

describe('CardsGrid', () => {
  test('renders CardsGrid component', () => {
    renderWithProviders(<CardsGrid />, {
        preloadedState: {
            products: productsMock,
        },
    });
    expect(screen.getByText(/Resultados de la búsqueda:/i)).toBeInTheDocument();
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
        expect(screen.getByText(/Resultados de la búsqueda:/i)).toBeInTheDocument();
    });
});
