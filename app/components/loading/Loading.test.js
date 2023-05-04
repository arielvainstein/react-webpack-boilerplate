import { render, screen } from '@testing-library/react';
import React from 'react';
import Loading from '../Loading';

describe('Loading component tests', () => {
    it('should contain "Loading" legend while mounted in the browser', () => {
    render(<Loading />);
        const component = screen.getByText(/🌀 Loading.../i);
        expect(component).toBeInTheDocument()
    });
});