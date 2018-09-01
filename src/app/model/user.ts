
export class User {
    phone: string;    
    token: string;
    email: string;
    password: string;
    name: string;
    provider: string;
    userId: string;
    profile_image: string;

}


export interface IUserBuilder {
    //Setter
    setPhone(phone: string);
    setToken(token: string);
    setEmail(email: string);
    setPassword(pass: string);
    setName(name: string);
    setProvider(provider: string);
    setUserId(userId: string);
    setImage(image: string);

    //Getter
    getPhone(): string;
    getToken(): string;
    getEmail(): string;
    getPassword(): string;
    getName(): string;
    getProvider(): string;
    getUserId(): string;
    getImage(): string;

    getUser(): User;
}

export class UserBuilder implements IUserBuilder {
    private user: User;
    constructor() {
        this.user = new User();
    }

    setPhone(phone: string) {
        this.user.phone = phone;
    }    
    setToken(token: string) {
        this.user.token = token;
    }
    setEmail(email: string) {
        this.user.email = email;
    }
    setPassword(pass: string) {
        this.user.password = pass;
    }
    setName(name: string) {
        this.user.name = name;
    }
    setProvider(provider: string) {
        this.user.provider = provider;
    }
    setUserId(userId: string) {
        this.user.userId = userId;
    }
    setImage(image: string) {
        this.user.profile_image = image;
    }
    getPhone(): string {
        return this.user.phone;
    }
    getToken(): string {
        return this.user.token;
    }
    getEmail(): string {
        return this.user.email;
    }
    getPassword(): string {
        return this.user.password;
    }
    getName(): string {
        return this.user.name;
    }
    getProvider(): string {
        return this.user.provider;
    }
    getUserId(): string {
        return this.user.userId;
    }
    getImage(): string {
        return this.user.profile_image;
    }
    getUser(): User {
        return this.user;
    }
}






// export class User {

//     public phone: number;
//     public token: string;
//     public email: string;
//     public password: string;
//     public name: string;
//     public provider: string;
//     public userId: string;
//     public profile_image: string;

// }