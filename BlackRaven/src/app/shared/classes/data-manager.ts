export class DataManager {

    static saveData(lookupKey, value) {
        this.setCookie(lookupKey, value);
    }

    static getData(lookupKey: string): string {
        return this.readCookie(lookupKey);
    }

    private static setCookie(lookupKey: string, value: string) {
        // optional timeout
        // var d = new Date();
        // d.setTime(d.getTime() + (exdays*24*60*60*1000));
        // var expires = "expires="+ d.toUTCString();
        // document.cookie = lookupKey + '=' + value + ';' + expires + ';path=/';
        document.cookie = lookupKey + '=' + value;
    }

    private static readCookie(lookupKey: string): string {
        const name = lookupKey + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
}
