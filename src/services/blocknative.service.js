import onboard from 'bnc-onboard'
import notify from 'bnc-notify'

import { ASSIST_KEY, NETWORK_ID } from '../utils'

let initializedOnboard
let initializedNotify

export function initializeOnboard(subscriptions) {
  if (!initializedOnboard) {
    initializedOnboard = onboard.init({
      dappId: ASSIST_KEY,
      networkId: NETWORK_ID,
      subscriptions,
      modules: {
        walletSelect: onboard.modules.select.defaults({
          fortmaticInit: { apiKey: 'pk_test_886ADCAB855632AA' },
          portisInit: { apiKey: 'd7d72646-709a-45ab-aa43-8de5307ae0df' },
          walletConnectInit: { infuraKey: '19ac568d0464497a9451cf9f388de2c3' },
          squarelinkInit: {
            apiKey: '87288b677f8cfb09a986',
            networkId: NETWORK_ID
          },
          networkId: NETWORK_ID
        }),
        walletReady: onboard.modules.ready.defaults({
          networkId: NETWORK_ID,
          minimumBalance: '100000'
        })
      }
    })
  }

  return initializedOnboard
}

export function getOnboard() {
  return initializedOnboard
}

export function getNotify() {
  if (!initializedNotify) {
    initializedNotify = notify({
      dappId: ASSIST_KEY,
      networkId: NETWORK_ID
    })
  }

  return initializedNotify
}
