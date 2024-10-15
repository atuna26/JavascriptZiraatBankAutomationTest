Feature: Money Transfer

    Scenario: User transfers money on user's account with "IBAN"
    Given user signed in account
    When user clicks "Para Transferi"
    And user fills "IBAN" input