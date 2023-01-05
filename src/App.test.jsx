import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import {setupServer} from 'msw/node';

import App from './App.jsx';

const server = setupServer(
    rest.get('/testGet', (req, res, ctx) => {
        return res(ctx.json({
            results: [
            {name: 'ditto'},
        ]}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('App integration', () => {
    test('renders data in the output area', async () => {
        render(<App/>);

        const input = screen.getByTestId('form-input');
        const button = screen.getByTestId('go-button');

        fireEvent.change(input, {target: {value: '/testGet'}});
        fireEvent.click(button);

        const preText = await screen.findByTestId('results-output');
        console.log('preText:', preText);
        expect(preText).toHaveTextContent('ditto');


    })

})