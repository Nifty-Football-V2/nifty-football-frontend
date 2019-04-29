import {dotDotDotAccount} from "../../utils";

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
        console.log(`Found read only 3box profile`, profile);
        return profile;
    }

    async getSquadName() {
        const profile = await this.getReadOnlyProfile();

        if (profile && profile.name) {
            return {
                found: true,
                name: profile.name
            };
        }

        return {
            found: false,
            name: dotDotDotAccount(this.account)
        };
    }

    async setSquadName(name) {
        const box = await Box.openBox(this.account, this.provider);

        const space = await box.openSpace(NIFTY_FOOTY_SPACE);

        const config = await space.public.set(SQUAD_NAME, name);

        console.log(config);

        return config;
    }

}
