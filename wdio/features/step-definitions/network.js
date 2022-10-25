import {Given, When, Then} from '@wdio/cucumber-framework';
import Accounts from '../helpers/Accounts.js';
import ImportFromSeedScreen from '../screen-objects/ImportFromSeedScreen.js';
import OptinMetricsScreen from '../screen-objects/OptinMetricsScreen.js';
import WalletMainScreen from '../screen-objects/WalletMainScreen.js';
import WalletSetupScreen from '../screen-objects/WalletSetupScreen.js';
import WelcomeScreen from '../screen-objects/WelcomeScreen.js';
import LoggedInWalletScreen from '../screen-objects/LoggedInWalletScreen.js';
import assert from 'assert';
Given(/^I import wallet using seed phrase "([^"]*)?"/, async (phrase) => {
    await driver.pause(7000)
    // await WelcomeScreen.verifySplashScreen();
    // await WalletSetupScreen.verifyScreenTitle();
    await WelcomeScreen.clickGetStartedButton();
    await WalletSetupScreen.clickSeedButton()
    await OptinMetricsScreen.clickIAgreeButton();
  const validAccount = Accounts.getValidAccount()
    await ImportFromSeedScreen.typeSecretRecoveryPhrase(phrase);
    await ImportFromSeedScreen.typeNewPassword(validAccount.password);
    await ImportFromSeedScreen.typeConfirmPassword(validAccount.password);
    await ImportFromSeedScreen.clickImportButton();
  
  });
  
  Given(/^I am on the wallet view/, async () => {
    await WalletSetupScreen.assertNewWalletWelcomeTutorial();
  });
  
  When(/^I tap on No thanks for the welcome tutorial/, async () => {
    await WalletSetupScreen.clickNoThanksOnWelcomeWizard();
  });

  When(/^I tap on the navbar network title button/, async () => {
    await LoggedInWalletScreen.clickNavBarTitleBtn()
  });
  
  When(/^I tap on the 'Add Network' button/, async () => {
    await LoggedInWalletScreen.clickAddNetworkBtn()
  });

  Then(/^the networks page opens with two tab views: Popular networks and Custom network/, async () => {
    await LoggedInWalletScreen.assertPopularNetworksTab();
    await LoggedInWalletScreen.assertCustomNetworksTab();
  });
  
  When(/^I am on the Popular network view/, async () => {
    await LoggedInWalletScreen.assertPopularNetworksTab()
  });

  When(/^I tap on network "([^"]*)?" to add it/, async (network) => {
  await $(`//android.widget.TextView[@text='${network}']`).click()
  });
  
  When(/^the network approval modal should appear/, async () => {
    //await expect($(`~approve-network-modal`)).toBeDisplayed()
    await expect($(`//android.widget.TextView[@text='Want to add this network?']`)).toBeDisplayed()
    });
    
    When(/^I select approve/, async () => {
    await $(`//android.widget.TextView[@text='Approve']`).click()
    });
     
    When(/^the network approval modal has two options Switch network and close/, async () => {
    await expect($(`//android.view.ViewGroup[@content-desc="switch-to-network-button"]`)).toBeDisplayed()
    await expect($(`//android.view.ViewGroup[@content-desc="close-network-button"]`)).toBeDisplayed()
    });

    When(/^I tap on Switch network/, async () => {
    await $(`//android.view.ViewGroup[@content-desc="switch-to-network-button"]`).click()
    });

    When(/^I should see the added network name "([^"]*)?" in the top navigation bar/, async (network) => {
        //await expect($(`//android.view.ViewGroup[@content-desc="open-networks-button"]`)).toHaveAttribute('text',network);
        //await expect($('~navbar-title-network')).toHaveAttribute('text',network);
        //const test = await $('~open-networks-button');
        // const test = await $(`//android.view.ViewGroup[@content-desc="open-networks-button"]`).getAttribute('text')
        // console.log(test +' aaaaaaaaaaaaaaaaaaaaaaaaaaa '+ network)
        //  assert.strictEqual(test.toHaveAttribute('text','Wallet'),true);
        //await expect(text == network)
        await $("new UISelector().text(\"Palm\")").toBeDisplayed()
      });

      Then(/^I am back to the wallet view/, async () => {
        await expect($(`//android.view.ViewGroup[@content-desc="open-networks-button"]`)).toBeDisplayed()
      });

      Then(/^my token balance shows up correctly with token "([^"]*)?"/, async (token) => {
        await expect($(`//android.widget.TextView[@text="0 ${token}"]`).getText()== `0 ${token}`)
      });
      