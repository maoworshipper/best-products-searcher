import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/utils-for-test';
import Pagination from './Pagination';

describe('Pagination', () => {
  test('renders Pagination component', () => {
    renderWithProviders(<Pagination />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages', () => {
    renderWithProviders(<Pagination pages={100} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage', () => {
    renderWithProviders(<Pagination pages={100} currentPage={1} />);
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage and onChange', () => {
    renderWithProviders(
      <Pagination pages={100} currentPage={1} onChange={() => {}} />,
    );
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage and onChange and click button', () => {
    renderWithProviders(
      <Pagination pages={100} currentPage={1} onChange={() => {}} />,
    );
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();
    const button = screen.getByText('2');
    fireEvent.click(button);
  });

  test('renders Pagination component with pages and currentPage first page', () => {
    renderWithProviders(<Pagination pages={100} currentPage={1} />);
    expect(screen.queryByTitle('Anterior')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Primera página')).not.toBeInTheDocument();
  });

  test('renders Pagination component with pages and currentPage last page', () => {
    renderWithProviders(<Pagination pages={100} currentPage={100 / 50} />);
    expect(screen.queryByTitle('Siguiente')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Última página')).not.toBeInTheDocument();
  });
});
