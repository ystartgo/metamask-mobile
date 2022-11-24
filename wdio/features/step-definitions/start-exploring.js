import {Given, When, Then} from '@wdio/cucumber-framework';
import OnboardingWizardModal from '../screen-objects/Modals/OnboardingWizardModal.js';
import WalletAccountModal from "../screen-objects/Modals/WalletAccountModal.js";
import WelcomeScreen from "../screen-objects/Onboarding/OnboardingCarousel";
import OnboardingScreen from "../screen-objects/Onboarding/OnboardingScreen";
import MetaMetricsScreen from "../screen-objects/Onboarding/MetaMetricsScreen";
import ImportFromSeedScreen from "../screen-objects/Onboarding/ImportFromSeedScreen";


Given(/^I am on the wallet view$/, async () => {
  await WelcomeScreen.isScreenTitleVisible();
  await driver.pause(7000); //TODO: Needs a smarter set timeout
  await WelcomeScreen.clickGetStartedButton();
  await OnboardingScreen.isScreenTitleVisible();
  await OnboardingScreen.clickImportWalletButton();
  await MetaMetricsScreen.isScreenTitleVisible();
  await MetaMetricsScreen.tapIAgreeButton();
  await ImportFromSeedScreen.isScreenTitleVisible();
  await ImportFromSeedScreen.typeSecretRecoveryPhrase('fold media south add since false relax immense pause cloth just raven');
  await ImportFromSeedScreen.typeNewPassword('metapass1');
  await ImportFromSeedScreen.typeConfirmPassword('metapass1');
  await ImportFromSeedScreen.clickImportButton();
  await OnboardingWizardModal.isVisible();
});

Given(/^the onboarding wizard is visible$/, async () => {
  await OnboardingWizardModal.isVisible();
});

When(/^I tap on "([^"]*)" button$/, async (text) => {
  switch (text) {
    case 'Take a Tour':
      await OnboardingWizardModal.clickNextButton();
      break;
    case 'Got it':
      await OnboardingWizardModal.clickGotItButton();
      break;
    case 'Back':
      await OnboardingWizardModal.clickBack2Button();
      break;
    case 'Skip':
      await OnboardingWizardModal.clickSkipTutorialButton();
      break;
    default:
      throw new Error('Button not found');
  }
});

When(/^I tap and hold on the account Name$/, async () => {
  await WalletAccountModal.longPressAccountNameLabel();
});

When(/^I enter "([^"]*)"$/, async (text) => {
  await WalletAccountModal.editAccountNameLabel(text);
});

Then(/^the tutorial modal heading should read "([^"]*)"$/, async (text) => {
  await OnboardingWizardModal.isHeaderDisplayedByXPath(text);
});

Then(/^there should be an explanation of the accounts functionality.$/, async () => {
  await OnboardingWizardModal.isYourAccountDesc1Displayed();
  await OnboardingWizardModal.isYourAccountDesc2Displayed();
});

Then(/^I should see the "([^"]*)" button$/, async (text) => {
  switch (text) {
    case 'Skip Tutorial':
      await OnboardingWizardModal.isSkipTutorialButtonDisplayed();
      break;
    default:
      throw new Error('Button not found');
  }
});

Then(/^there should be an explanation about adding a nickname to your account.$/, async () => {
  await OnboardingWizardModal.isEditAccountNameDesc1Displayed();
  await OnboardingWizardModal.isEditAccountNameDesc2Displayed();
});

Then(/^I should be able to edit the account Name$/, async () => {
  await WalletAccountModal.isAccountNameLabelEditable();
});

Then(/^the account nickname should read "([^"]*)"$/, async (text) => {
  await WalletAccountModal.isAccountNameLabelEqualTo(text);
});

Then(/^there should be an explanation of the what exists within the burger menu.$/, async () => {
  await OnboardingWizardModal.isMainNavDesc1Displayed();
  await OnboardingWizardModal.isMainNavDesc2Displayed();
});

Then(/^there should be an explanation of the what the purpose of the browser.$/, async () => {
  await OnboardingWizardModal.isExploreBrowserDescDisplayed();
});

Then(/^there should be an explanation of the what the purpose of the search input box.$/, async () => {
  await OnboardingWizardModal.isSearchDescDisplayed();
});

Then(/^the onboarding wizard is no longer visible$/, async () => {
  await OnboardingWizardModal.isGotItButtonNotDisplayed();
});

Then(/^the "([^"]*)" button is no longer visible$/, async (text) => {
  switch (text) {
    case 'Skip':
      await OnboardingWizardModal.isSkipTutorialButtonNotDisplayed();
      break;
    default:
      throw new Error('Button not found');
  }
});
