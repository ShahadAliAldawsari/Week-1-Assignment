
const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];

export function validateForm(copName, CRN, email, phoneNumber, password, confirm, bsnsType, agree) {
    let errors = {};

    if (!copName) {
        errors.copName = "Compny name is required.";
    }

    if (!CRN) {
        errors.CRN = "Commercial Registration Number is required.";
    }
    else if (length(CRN)!=15){
        errors.CRN = "Commercial Registration is invalid.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email structure
    if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    const phoneNumRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/ // KSA phone number structure
    if(!phoneNumRegex.test(phoneNumber)){
        errors.email = "Invalid phone number.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; //password structure
    if (!passwordRegex.test(password)) {
        errors.password = "Password must have uppercase, lowercase, number, and special character.";
    } else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common.";
    }else if(!password){
        errors.copName = "Password is required.";
    }

    if(password!=confirm){
        errors.password = "The passwords are not maching.";
    }

    if(!bsnsType){
        errors.copName = "Compny type is required.";
    }

    if(!agree){
        errors.copName = "Terms and conditions agreement is required.";
    }
    return errors;

}