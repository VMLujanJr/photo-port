import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '..';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

afterEach(cleanup);
describe('Navigation component', () => {
    // baseline test
    test('renders', () => {
        render(<Navigation />);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Navigation />);
        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    test('inserts text into the links', () => {
        const { getByTestId } = render(<Navigation />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});