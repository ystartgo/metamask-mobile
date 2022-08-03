Feature: A user should be able to add a contract nickname

    This is done by going through the approval flow.
    The contract nickname should never appear in the send flow whether as recent or as a contact.

    Scenario Outline: A user deep links to the approval flow, creates a contract nickname then approves it. The contract nickname should not appear in send flow recents

        Given that I have an approval flow universal deep link
        When I tap on <Deep Link>
        Then metamask mobile should launch with the send flow opened
        And I see an "Add nickname" button
        And I see "Contract:" <contract address>
        And I can copy the contract address to my clipboard
        When I tap on "Add nickname"
        Then the Add nickname view appears
        And I can copy the contract nickname to my clipboard
        And the "Confirm" button is disabled
        And there is an input field for the contract nickname
        When I enter a nickname
        Then the "Confirm" button becomes enabled
        When I tap on the "Confirm" button
        Then I am taken back to the approval modal
        And The contract nickname appears
        But I no longer see an "Add nickname" button
        And I see an "Edit nickname" button
        When I tap on the "Edit nickname" button
        Then I should see the saved nickname
        When I changed the contract nickname
        And Return to the approval modal
        Then The updated nickname should appear
        When I Approve the transaction
        And I go to the send flow
        Then the contract nickname should not appear in recent
        And the contract nickname should not appear in your contact list

        Examples:
            | Network | Deep Link                                                                                                                                           | Contract Address                           |
            | Rinkeby | https://metamask.app.link/send/0x01BE23585060835E02B77ef475b0Cc51aA1e0709@4/approve?address=0x178e3e6c9f547A00E33150F7104427ea02cfc747&uint256=5e8" | 0x01BE23585060835E02B77ef475b0Cc51aA1e0709 |


    Scenario Outline: A user adds a contract address through the dapp approval flow

        Given that I created a token in the metamask test dapp
        When I tap on "Approve"
        Then the Approval modal appears
        And I see an "Add nickname" button
        And I see "Contract:" <contract address>
        And I can copy the contract address to my clipboard
        When I tap on "Add nickname"
        Then the Add nickname view appears
        And I can copy the contract nickname to my clipboard
        And the "Confirm" button is disabled
        And there is an input field for the contract nickname
        When I enter a nickname
        Then the "Confirm" button becomes enabled
        When I tap on the "Confirm" button
        Then I am taken back to the approval modal
        And The contract nickname appears
        But I no longer see an "Add nickname" button
        And I see an "Edit nickname" button
        When I open the burger menu
        And I go to contacts
        Then I should see the saved contract nickname in my contacts
        Examples:
            | Network |  | Contract Address                           |
            | Rinkeby |  | 0x9bc5baf874d2da8d216ae9f137804184ee5afef4 |

