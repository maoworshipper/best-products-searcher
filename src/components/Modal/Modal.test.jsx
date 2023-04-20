import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/renderWithProviders';
import Modal from './Modal';

describe('Modal', () => {
  test('renders Modal component', () => {
    renderWithProviders(<Modal />);
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

    test('renders Modal component with children', () => {
    renderWithProviders(<Modal>Modal content</Modal>);
    const content = screen.getByText('Modal content');
    expect(content).toBeInTheDocument();
    });
});
