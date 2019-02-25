import Vue from 'vue';

const defaults = {
    timeout: 0,
    showProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
};

export default class NotificationService {

    constructor () {
        this.notification = undefined;
    }

    showPurchaseNotification () {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
                <div class="notification-icon">👍</div>
                <div class="notification-msg">
                  Your wallet will take care of it from here...
                </div>
             </div>`,
            {
                ...defaults,
                type: 'simple',
            });
    }

    showProcessingNotification () {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">🙌</div>
              <div class="notification-msg">
                ️Processing transaction...
              </div>
            </div>`,
            {
                ...defaults,
                type: 'info',
            });
    }

    showConfirmedNotification (tokenId) {

        if (this.notification) {
            Vue.$snotify.remove(this.notification.id);
        }

        this.notification = Vue.$snotify.html(
            `<div class="snotifyToast__body">
              <div class="notification-icon">🤟</div>
              <div class="notification-msg">
                ️Transaction confirmed
                <img src="http://localhost:5000/futbol-cards/us-central1/api/network/5777/image/${tokenId}" style="height: 200px;" class="m-3"/>
              </div>
            </div>`,
            {
                ...defaults,
                timeout: 10000, // 10s timeout
                type: 'success',
            });
    }
}
