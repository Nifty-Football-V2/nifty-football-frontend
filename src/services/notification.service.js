import Vue from 'vue';
import {lookupEtherscanAddress} from "../utils";

const defaults = {
    timeout: 0,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
};

export default class NotificationService {

    constructor(currentNetworkId = 1) {
        this.notifications = null;
        this.currentNetworkId = currentNetworkId;
        this.etherscanBase = lookupEtherscanAddress(currentNetworkId);
    }

    setNetworkId(currentNetworkId) {
        this.currentNetworkId = currentNetworkId;
        this.etherscanBase = lookupEtherscanAddress(currentNetworkId);
    }

    // FIXME this should be a list of notifications not a single one
    clearNotification() {
        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }
    }

    showPurchaseNotification() {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
                <div class="notification-icon">🚀</div>
                <div class="notification-msg">
                  Firing up the wallet
                </div>
             </div>`,
            {
                ...defaults,
                type: 'simple',
            });
    }

    showProcessingNotification(txsHash) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">🧐</div>
              <div class="notification-msg">
                Transaction in flight
               <div class="small"><a href="${this.etherscanBase}/tx/${txsHash}" target="_blank">Details</a></div>
               </div>
            </div>`,
            {
                ...defaults,
                type: 'info',
            });
    }

    showConfirmedNotification(txsHash) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">⚽</div>
              <div class="notification-msg">
                <div>️Transaction confirmed!</div>
                <div class="small"><a href="${this.etherscanBase}/tx/${txsHash}" target="_blank">Details</a></div>
              </div>
            </div>`,
            {
                ...defaults,
                timeout: 10000, // 10s timeout
                type: 'simple',
            });
    }

    showSuccessNotification(txsHash) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">🤟</div>
              <div class="notification-msg">
                <div class="small"><a href="${this.etherscanBase}/tx/${txsHash}" target="_blank">Details</a></div>
              </div>
            </div>`,
            {
                ...defaults,
                timeout: 10000, // 10s timeout
                type: 'simple',
            });
    }

    showFailureNotification(message) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">😔</div>
              <div class="notification-msg">
                ${message}
              </div>
            </div>`,
            {
                ...defaults,
                timeout: 10000, // 10s timeout
                type: 'warning',
            });
    }

    showNeutralNotification(message) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">🤟</div>
              <div class="notification-msg">
                ${message}
              </div>
            </div>`,
            {
                ...defaults,
                timeout: 10000, // 10s timeout
                type: 'info',
            });
    }
}
