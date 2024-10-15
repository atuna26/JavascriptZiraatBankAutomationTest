Feature: Login

     Scenario: Login on same device already valid credentials
        Given Ziraat Mobil banking app is opened
        When clicks "Giriş Yap" button
        And fills password input
        Then directs account summary screen

    Scenario: Login on same device already invalid credentials
        Given Ziraat Mobil banking app is opened
        When clicks "Giriş Yap" button
        And fills password input
        Then directs account summary screen
    
    Scenario: First Time Login 
        Given Ziraat Mobil Banking app is opened
        When clicks "Giriş Yap" button
        And fills "TC Kimlik / Müşteri Numaranız" input
        And fills password input
        And clicks "Devam" button
        Then person gets authorization sms
        And fills sms authorization input via authorization sms code