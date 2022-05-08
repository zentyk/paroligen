export default class PasswordGenerator {
  constructor(private readonly length: number) {
      this.length = length;
  }

  public generate(): string {
      let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";
      for(let i = 0; i < this.length; i++) {
          let rndNumber = Math.floor(Math.random() * characters.length);
          password += characters.substring(rndNumber, rndNumber + 1);
      }
      return password;
  }
}