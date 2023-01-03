import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../form/index';

describe('Testing the Form Component', () => {
  it('should render the form', () => {
    render(<Footer/>);
    let footerContent = screen.getByText('© Junyoung Son 2022');
    expect(footerContent).toBeInTheDocument();
  });
});