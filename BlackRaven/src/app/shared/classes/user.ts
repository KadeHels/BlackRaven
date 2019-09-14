export class User {

  public username: string;
  public password: string;
  public confirmPassword: string;
  private isLockedOut: boolean;
  private id: number;

  User() {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.id = 1;
    this.isLockedOut = false;
  }

}
