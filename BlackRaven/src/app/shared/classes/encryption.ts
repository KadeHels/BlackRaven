import * as CryptoJS from 'crypto-js';

export class Encryption {

    static encryptText(text: string, key: string): string {
        return CryptoJS.AES.encrypt(text, key).toString();
    }

    static decryptText(text: string, key: string): string {
        return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
    }
}
