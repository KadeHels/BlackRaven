import { User } from './user';
import { Encryption } from './encryption';
import { DataManager } from './data-manager';
import { LookupKey } from '../enums/lookup-key.enum';

export class UserManager {

    private user: User;
    private lookupKey = LookupKey;

    static getNewUser(): User {
        const t = new User();
        return t;
    }

    login() {
        console.log('Login');
    }

    createNewUser(newUser: User) {
        console.log('createNewUser');
        if (this.isUsernameValid(newUser.username) && this.isPasswordValid(newUser.password, newUser.confirmPassword)) {

            this.user = newUser;

            this.setId();
            this.setUsername(newUser.username);
            this.setPassword(newUser.password);
        } else {
            console.log('Cannot Login!');
            console.log(newUser);
            throw new Error('Cannot Login!');
        }
    }

    // Set Value
    private setId() {
        DataManager.saveData(LookupKey.id, Date.now());
    }

    private setUsername(username: string) {
        DataManager.saveData(LookupKey.username, username);
    }

    private setPassword(password: string) {
        const encryptedPassword = Encryption.encryptText(this.user.password, this.user.username);
        DataManager.saveData(this.lookupKey.password, encryptedPassword);
    }

    // Validdation
    private isUsernameValid(username: string): boolean {
        return username  && username.length >= 2;
    }

    private isPasswordValid(password: string, confirmPassword: string): boolean {
        return password && confirmPassword && password === confirmPassword;
    }
}
