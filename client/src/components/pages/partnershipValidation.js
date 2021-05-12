const partnershipValidation= (values) => {
    
    let errors = {}; 
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 5) {
      errors.password = "Incorrect Password.";
    }
    if (values.qty <= 0) {
      errors.qty = "Enter valid quantity";
    } else if (values.qty > 99999){
      errors.qty = "Enter valid quantity";
    }
    if (values.phone.length<11 || values.phone.length>11){
        errors.phone="Incomplete or incorrect Phone number."
    }
    else if (!/03/.test(values.phone)){
        errors.phone ='Please enter a valid phone number.'}
    if(!values.enquiry){
        errors.enquiry="Please Enter the Enquiry."
    }
     return errors;
}
export default partnershipValidation
