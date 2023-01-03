import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Results from './index.jsx';

describe('results test', () => {

test('renders the results data', () => {
    

    const preText = screen.getByTestId('results-output');
    let data = {
        name: 'pikachu',
        url: 'https://pokeapi.cp/api/v2/pokemon/pikachu/'
    };

    render(<Results data = {data}/>);

    expect(preText).toHaveTextContent('pikachu');

    })
});