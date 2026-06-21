class Email {
    constructor(email){
        this.email = email; 
    }
    get isValid(){
        const [login, full_domain] = this.email.split('@');
        const domain_parts = full_domain.split('.');
        const domain_z = domain_parts[domain_parts.length - 1];
        const simbols = ['*', '#', '$', '^'];
        const areSimbols = simbols.some(char => login.includes(char));
        if (areSimbols || domain_z.length > 3){return false};
        return true;
    }

    set setEmail(arr) {
        if(arr.length === 3){this.email = `${arr[0]}@${arr[1]}.${arr[2]}`};

    }
}

let a = new Email('lelelebebebe@gmail.com');
console.log(a.isValid)

a.setEmail = ['newEmail', 'gmail', 'com']
console.log(a.email)

module.exports = Email;
