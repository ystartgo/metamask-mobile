import { Given, When, Then } from '@wdio/cucumber-framework';
import Accounts from '../helpers/Accounts.js';
import ImportFromSeedScreen from '../screen-objects/ImportFromSeedScreen.js';
import OptinMetricsScreen from '../screen-objects/OptinMetricsScreen.js';
import WalletMainScreen from '../screen-objects/WalletMainScreen.js';
import WalletSetupScreen from '../screen-objects/WalletSetupScreen.js';
import WelcomeScreen from '../screen-objects/WelcomeScreen.js';

Given(/^I import wallet using seed phrase "([^"]*)?" /, async (phrase) => {
    await WelcomeScreen.verifySplashScreen();
    await WalletSetupScreen.verifyScreenTitle();
    await WelcomeScreen.clickGetStartedButton();
    await OptinMetricsScreen.clickIAgreeButton();

  const validAccount = Accounts.getValidAccount()

    await ImportFromSeedScreen.typeSecretRecoveryPhrase(phrase);
    await ImportFromSeedScreen.typeNewPassword(validAccount.password);
    await ImportFromSeedScreen.typeConfirmPassword(validAccount.password);
    await $('~manual_backup_step_3').click()
  });