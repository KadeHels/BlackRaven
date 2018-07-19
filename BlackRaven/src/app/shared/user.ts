export class User {
    constructor(
        public name: string = null,
        public password: string = null,
        public confirmPassword: string = null
      ) {  }
      public id?: number;
}
