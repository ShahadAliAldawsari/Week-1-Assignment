
export const validateForm = (copName, crn, email, phoneNumber, password, confirm, city, region, zipCode, bsnsType, agree) => {
    let errors = {};

    if (!copName) {
        errors.copName = "Compny name is required.";
    }

    if (!crn) {
        errors.crn = "Commercial Registration Number is required.";
    }else if (crn.length!==15){
        errors.crn = "Commercial Registration is invalid.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email structure
    if (!email) {
        errors.email = "Email is required.";
    }else if (!emailRegex.test(email)) {
        errors.email = "Invalid email format.";
    }

    const phoneNumRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/ // KSA phone number structure
    if (!phoneNumber) {
        errors.phoneNumber = "Phone number is required.";
    }else if (!phoneNumRegex.test(phoneNumber)){
        errors.phoneNumber = "Invalid phone number.";
    }

    if (!city) {
        errors.city = "City is required.";
    }

    if (!region) {
        errors.region = "Region is required.";
    }

    if (!zipCode) {
        errors.zipCode = "Zip code is required.";
    }

    const weakPasswords = ["password", "123456", "qwerty", "abc123", "letmein", "welcome"];
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; //password structure
    if(!password){
        errors.password = "Password is required.";
    }else if (weakPasswords.includes(password.toLowerCase())) {
        errors.password = "This password is too common.";
    }else if (!passwordRegex.test(password)) {
        errors.password = "Password must have uppercase, lowercase, number, and special character.";
    }

    if (!confirm) {
        errors.confirm = "Password confirmation is required.";
    }else if (password !== confirm){
        errors.confirm = "The passwords are not maching.";
    }

    if(!bsnsType){
        errors.bsnsType = "Compny type is required.";
    }

    if(!agree){
        errors.agree = "Terms and conditions agreement is required.";
    }
    return errors;
};