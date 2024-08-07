Feature: Specify Number of Events

Scenario: User does not type in the number-of-events field
Given I am a user,
When I have not typed a number on number-of-events field
Then I should not be able to see a list of all events

Scenario: User types a number in the number-of-events field
Given I am a user,
When I type a number on number-of-events field
Then I should be able to see a list of events with the number I typed as the length