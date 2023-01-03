import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index.jsx';

describe('form test', () => {

    const button = screen.getByTestId('go-button');
    const handleSubmit = screen.getByTestId('handler');

    test('makes an API call', () => {
        const apiCall = jest.fn();

        render(<Form apiCall = { apiCall }/>);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleSubmit).toHaveBeenCalled();
    });

})