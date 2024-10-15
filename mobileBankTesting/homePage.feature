Feature: Home Page


    Scenario: User checks first account balance
    Given user signed in account
    When user checks right side of "Bakiye"
    Then user sees balance

    Scenario: Checking is there any warning when internet connection is disabled
    Given user on homepage
    When user disables internet connection
    Then user waits 15 sec 
    And app shows warning box

    Scenario: User checks other account balance
    Given user signed in account
    When user clicks right arrow
    And user checks right side of "Bakiye"
    Then user sees balance
    