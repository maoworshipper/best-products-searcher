import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import Filters from './Filters';
import { useFilters } from './hooks/useFilters';
import { availableFilters } from './mockTest/availableFilters.mock';

jest.mock('./hooks/useFilters');

describe('Filters', () => {
  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  test('renders Filters component', () => {
    useFilters.mockReturnValue({
      filtersOptions: availableFilters,
      handleFilter: jest.fn(),
    });

    renderWithProviders(<Filters />);

    expect(screen.getByText('Tiendas oficiales')).toBeInTheDocument();
  });

  test('renders Filters component without filtersOptions', () => {
    useFilters.mockReturnValue({
      filtersOptions: [],
      handleFilter: jest.fn(),
    });

    renderWithProviders(<Filters />);
    expect(screen.queryByText('Tiendas oficiales')).not.toBeInTheDocument();
  });

  test('handleFilter call on click', () => {
    const handleFilter = jest.fn();
    useFilters.mockReturnValue({
      filtersOptions: availableFilters,
      handleFilter,
    });

    renderWithProviders(<Filters />);
    const filter = screen.getByText('Todas las tiendas oficiales');
    fireEvent.click(filter);
    expect(handleFilter).toHaveBeenCalled();
  });

  test('should call handleFilter with the correct parameters when a filter button is clicked', () => {
    const handleFilter = jest.fn();
    useFilters.mockReturnValue({
      filtersOptions: availableFilters,
      handleFilter,
    });

    renderWithProviders(<Filters />, {
      preloadedState: {
        products: {
          available_filters: availableFilters,
          filters: [],
          query: '',
        },
      },
    });

    const filterId = 'official_store';
    const valueId = 'all';

    const filterButton = screen.getByText('Todas las tiendas oficiales');
    fireEvent.click(filterButton);

    expect(handleFilter).toHaveBeenCalledWith(filterId, valueId);
  });
});
