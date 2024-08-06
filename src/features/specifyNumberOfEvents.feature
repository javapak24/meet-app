Feature: Specify Number of Events

Given I am a user,
When I type a number on number-of-events field
Then I should be able to see a list of events with the number I typed as the length

Scenario: An event element is collapsed by default.
Given the user opened the app
When the list of events are rendered
Then event details should not show

Scenario: User can expand an event to see details.
Given the user is seeing the events rendered
When the user clicks the show details button
Then the event details should be shown

Scenario: User can collapse an event to hide details.
Given the user has clicked the show details button
When the user clicks the hide details button
Then the event details should be hidden