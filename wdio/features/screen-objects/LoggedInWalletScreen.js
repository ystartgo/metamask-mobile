import {
  NETWORKS_BUTTON_ID,
  ADD_NETWORK_BTN,
  POPULAR_NETWORKS_TAB,
  CUSTOM_NETWORKS_TAB,
  NAVBAR_TITLE_NETWORK
} from '../testIDs/Screens/LoggedIntoWallet.testid';
import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';


class LoggedInWalletScreen {

  
  get navBarWalletBtn() {
    return Selectors.getElementByPlatform(NETWORKS_BUTTON_ID, true);
  }

  get addNetworkBtn() {
    return Selectors.getElementByPlatform(ADD_NETWORK_BTN, true);
  }


  get popularNetworksTab() {
    return Selectors.getElementByPlatform(POPULAR_NETWORKS_TAB, true);
  }

  get customNetworksTab() {
    return Selectors.getElementByPlatform(CUSTOM_NETWORKS_TAB, true);
  }

  get networkTitle(){
    return Selectors.getElementByPlatform(NAVBAR_TITLE_NETWORK, true);
  }
  
  async clickNavBarTitleBtn(){
      await Gestures.tap(this.navBarWalletBtn);
    }

    async isNetworkNameCorrect(network){
    const textFromElement = await this.networkTitle
    const networkName = await textFromElement.getText()

      await expect(networkName).toContain(network) // TODO needs to be fixed
    }

  async clickAddNetworkBtn(){
    await Gestures.tap(this.addNetworkBtn);
  }

  async assertPopularNetworksTab(){
    await Gestures.tap(this.popularNetworksTab)
    await expect((this.popularNetworksTab)).toBeDisplayed();
  }

  async assertCustomNetworksTab(){
    await Gestures.tap(this.customNetworksTab)
    await expect((this.customNetworksTab)).toBeDisplayed();
  }
  
}
  export default new LoggedInWalletScreen();