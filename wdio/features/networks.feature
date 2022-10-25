@androidApp
Feature: Networks
              A user should be able to add a custom network via the popular network flow
              A user should also have the ability to a add custom network via the custom network flow.
              A user should be able to add a custom network via a Dapp.
        Background:
            Given I import wallet using seed phrase "fold media south add since false relax immense pause cloth just raven"
              And I am on the wallet view
              And I tap on No thanks for the welcome tutorial
  
        Scenario: Adding a network via the new popular network flow
              And I tap on the navbar network title button
             When I tap on the 'Add Network' button
             Then the networks page opens with two tab views: Popular networks and Custom network
              And I am on the Popular network view
             When I tap on network "Palm" to add it
             Then the network approval modal should appear
              And I select approve
              And the network approval modal has two options Switch network and close
             When I tap on Switch network
             Then I am back to the wallet view
              And I should see the added network name "Palm" in the top navigation bar
              And my token balance shows up correctly with token "palm"
  # When I tap on the burger menu
  # And I tap on "Settings"
  # And I tap on "Networks"
  # And I tap on the 'Add Network' button
  # Then <NETWORK> should be visible below the "Custom Networks" section.
  # When I tap on the 'Add Network' button the networks page opens
  # And <NETWORK> is not visible in the "Popular Networks" section.