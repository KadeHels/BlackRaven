import { CookieService } from 'ngx-cookie-service';

export class DataManager {
    // private cookieService = new CookieService();

    static saveData(lookupKey, value) {
        // this.cookieService.set(lookupKey, value);
        console.log(lookupKey);
        console.log(value);
    }

    static getData(lookupKey: string) {
        // this.cookieService.get(lookupKey);
        console.log(lookupKey);
    }
}
