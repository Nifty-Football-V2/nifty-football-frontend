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

        const squadName = await this.getBox3SquadName();
        console.log("squadName", squadName);

        if (squadName) {
            return {
                found: true,
                name: squadName
            };
        }

        const profile = await this.getReadOnlyProfile();
        if (profile && profile.name) {
            console.log("Profile Name", profile.name);
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

        await space.public.set(SQUAD_NAME, name);

        return name;
    }

    async getBox3SquadName() {
        const box = await Box.openBox(this.account, this.provider);

        const space = await box.openSpace(NIFTY_FOOTY_SPACE);

        return space.public.get(SQUAD_NAME);
    }

}
