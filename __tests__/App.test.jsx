import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../src/App.jsx';

describe('App integration', () => {
    test('renders data in the output area', () => {
        render(<App/>);

        const button = screen.getByTestId('go-button');
        fireEvent.click(button);

        const preText = screen.getByTestId('results-output');
        expect(preText).toHaveTextContent('http://fakethings.com/1');


    })
})