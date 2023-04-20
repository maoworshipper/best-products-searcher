import { screen, fireEvent } from '@testing-library/react';
import InputSearch from './InputSearch';
import { renderWithProviders } from '@utils/renderWithProviders';

describe('InputSearch', () => {
  test('renders InputSearch component', () => {
    renderWithProviders(<InputSearch />);
    const inputSearch = screen.getByPlaceholderText('Sillas, libros, etc.');
    expect(inputSearch).toBeInTheDocument();
    const buttonSearch = screen.getByTitle('Buscar');
    expect(buttonSearch).toBeInTheDocument();
  });

  test('renders InputSearch component with value', () => {
    renderWithProviders(<InputSearch />);
    const inputSearch = screen.getByRole('textbox');
    fireEvent.change(inputSearch, { target: { value: 'test' } });
    expect(inputSearch.value).toBe('test');
  });

  test('renders InputSearch component with value and click button', () => {
    renderWithProviders(<InputSearch />);
    const inputSearch = screen.getByRole('textbox');
    fireEvent.change(inputSearch, { target: { value: 'test' } });
    expect(inputSearch.value).toBe('test');
    const buttonSearch = screen.getByTitle('Buscar');
    fireEvent.click(buttonSearch);
  });

  test('renders InputSearch component with value and press enter', () => {
    renderWithProviders(<InputSearch />);
    const inputSearch = screen.getByRole('textbox');
    fireEvent.change(inputSearch, { target: { value: 'test' } });
    expect(inputSearch.value).toBe('test');
    fireEvent.keyDown(inputSearch, { key: 'Enter', code: 'Enter' });
  });
});
