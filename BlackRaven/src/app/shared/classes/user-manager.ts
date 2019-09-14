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

    }

    createNewUser(newUser: User) {
        console.log('createNewUser');
        if (this.isUsernameValid(newUser.username) && this.isPasswordValid(newUser.password, newUser.confirmPassword)) {

            this.user = newUser;
            this.setusername(newUser.username);
            this.setPassword(newUser.password);
        } else {
            console.log('Cannot Login!');
            console.log(newUser);
        }
    }

    private setusername(username: string) {
        console.log('Saving username: ' + username);
        DataManager.saveData('LookupKey.username', username);
    }

    private setPassword(password: string) {
        const tempPass = Encryption.encryptText(this.user.password, this.user.username);
        console.log('Saving Password:: ' + tempPass);

        DataManager.saveData(this.lookupKey.password, tempPass);

        console.log('Test decrypt');
        console.log(Encryption.decryptText(tempPass, this.user.username));
    }

    private isUsernameValid(username: string): boolean {
        return username  && username.length >= 2;
    }

    private isPasswordValid(password: string, confirmPassword: string): boolean {
        return password && confirmPassword && password === confirmPassword;
    }
}
