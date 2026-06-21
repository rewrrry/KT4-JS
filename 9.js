const Email = require('./8.js');
class Contact extends Email {
    
    constructor(email,phone){
        super(email);
        this.phone = phone;
    }
    get PhoneLength(){
        if (!this.phone.startsWith('+')){
            return ('Неизвестный')
        }
        const phone_length = this.phone.length -1;
        if (phone_length === 12){return ('Мобильный')}
        else if (phone_length === 18) {return ("Городской")}
        else {return ('Error')};
    }
}
let contact1 = new Contact('lelelebebebe@gmail.com', '+66666666666');
console.log(contact1.PhoneLength);
