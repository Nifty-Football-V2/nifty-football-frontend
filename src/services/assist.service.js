import bnc from 'bnc-assist'

import { ASSIST_KEY, NETWORK_ID } from '../utils';

let initializedAssist;

// Assist methods
export const initializeAssist = (web3) => getAssist(web3); // Call this function as soon as web3 is initialized
export const onboardUser = () => getAssist().onboard();
export const decorateContract = contract => getAssist().Contract(contract);
export const decorateTransaction = txObject => getAssist().Transaction(txObject);
export const getUserState = () => getAssist().getState();

function nCards (contractCall) {
    return contractCall.parameters[0];
}

// Returns initialized assist object if previously initialized.
// Otherwise will initialize assist with the config object
export function getAssist(web3) {
  if (!initializedAssist) {
    initializedAssist = bnc.init(
      {
        networkId: NETWORK_ID,
        dappId: ASSIST_KEY, // from https://accounts.blocknative.com
        web3,
        messages: {
          txRequest: () => `Waiting for you to confirm the purchase`,
          txStall: () => `Minting is taking longer than expected...`,
          txSent: ({contract}) => `Asking the network to mint your new card${nCards(contract) > 1 ? 's' : ''}`,
          txPending: ({contract}) => `Minting your new card${nCards(contract) > 1 ? 's' : ''}...`,
          txConfirmed: ({contract}) => `Your new card${nCards(contract) > 1 ? 's have' : ' has'} been minted!`
        }
      }
    )
  }
  
  return initializedAssist
}
