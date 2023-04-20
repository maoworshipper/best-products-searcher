import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import { usePagination } from './hooks/usePagination';
import Pagination from './Pagination';

jest.mock('./hooks/usePagination');

describe('Pagination', () => {
  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test('renders Pagination component', () => {
    renderWithProviders(<Pagination />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages', () => {
    usePagination.mockReturnValue({
      pagesArray: [1, 2, 3, 4, 5],
      totalPages: 5,
    });
    renderWithProviders(<Pagination />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage', () => {
    usePagination.mockReturnValue({
      pagesArray: [1, 2, 3, 4, 5],
      totalPages: 5,
    });
    renderWithProviders(<Pagination />, {
      preloadedState: {
        products: {
          currentPage: 1,
        },
      },
    });
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with onChange', () => {
    renderWithProviders(<Pagination onChange={() => {}} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage and onChange and click button', () => {
    usePagination.mockReturnValue({
      pagesArray: [1, 2, 3, 4, 5],
      totalPages: 5,
    });

    renderWithProviders(<Pagination onChange={() => {}} />, {
      preloadedState: {
        products: {
          currentPage: 1,
        },
      },
    });
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
    const button = screen.getByText('2');
    fireEvent.click(button);
  });

  test('renders Pagination component with pages and currentPage first page', () => {
    usePagination.mockReturnValue({
      pagesArray: [1, 2, 3, 4, 5],
      totalPages: 5,
    });

    renderWithProviders(<Pagination onChange={() => {}} />, {
      preloadedState: {
        products: {
          currentPage: 1,
        },
      },
    });
    expect(screen.queryByTitle('Anterior')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Primera página')).not.toBeInTheDocument();
    expect(screen.getByTitle('Siguiente')).toBeInTheDocument();
    expect(screen.getByTitle('Última página')).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage last page', () => {
    usePagination.mockReturnValue({
      pagesArray: [1, 2, 3, 4, 5],
      totalPages: 5,
    });

    renderWithProviders(<Pagination onChange={() => {}} />, {
      preloadedState: {
        products: {
          currentPage: 5,
        },
      },
    });
    expect(screen.queryByTitle('Siguiente')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Última página')).not.toBeInTheDocument();
    expect(screen.getByTitle('Anterior')).toBeInTheDocument();
    expect(screen.getByTitle('Primera página')).toBeInTheDocument();
  });
});
