const _ = require('lodash');
const Box = require('3box');

const NIFTY_FOOTY_SPACE = 'nifty-football';
const SQUAD_NAME = 'squad-name';

export default class ThreeBoxService {

    setAccount(account) {
        this.account = account;
    }

    setProvider(provider) {
        this.provider = provider;
    }

    async getReadOnlyProfile() {
        const profile = await Box.getProfile(this.account);
        console.log(profile);
        return profile;
    }

    async getSquadName() {
        const profile = await this.getReadOnlyProfile();
        // then have a profile
        if (profile.name) {
            const box = await Box.openBox(this.account, this.provider);
            // window.box = box;
            // const space = await box.openSpace(NIFTY_FOOTY_SPACE);
            // const name = await space.public.get(SQUAD_NAME);
            // console.log(name);
            return profile.name;
        }
        return null;
    }

    async setSquadName(name) {
        const box = await Box.openBox(this.account, this.provider);
        const space = await box.openSpace(NIFTY_FOOTY_SPACE);
        const config = await space.public.set(SQUAD_NAME, name);

        console.log(config);
        return config;
    }

}
