Feature: Test Books

    @Teste1
    Scenario: Test 1 - GET All Books
        Given The user access API
        When The user send the request to all books
        Then The status code should be 200
        And The all books should be returned












