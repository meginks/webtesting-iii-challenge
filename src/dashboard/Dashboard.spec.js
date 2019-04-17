// Test away
import React from 'react'; 
import renderer from 'react-test-renderer'; 
import Dashboard from './Dashboard';
import Display from '../display/Display';

import { render, fireEvent } from 
'react-testing-library'; 
import 'jest-dom/extend-expect'; 
import { italic } from 'ansi-colors';

describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />); 

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders controls and display', () => {
        const { getByText } = render(<Dashboard />); 

        getByText(/unlocked/i);
        
    }) 









});

