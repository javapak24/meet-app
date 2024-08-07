import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData, { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User does not type in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('I am a user', () => {
            AppComponent = render(<App />);

        });

        when('I have not typed a number on number-of-events field', () => {
        });

        then('I should not be able to see a list of all events',async () => {
            
        });
    });

    test('User types a number in the number-of-events field', ({ given, when, then }) => {
        let AppComponent;
        given('I am a user', () => {
            AppComponent = render(<App />);

        });

        when('I type a number on number-of-events field', () => {

        });

        then('I should be able to see a list of events with the number I typed as the length',async () => {
            
        });
    });
 
});