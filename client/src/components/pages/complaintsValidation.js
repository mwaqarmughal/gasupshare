const complaintsValidation=(values)=> {
    let errors={};
    if(!values.username){
        errors.username="User name is required."
    }
    if (!values.email) {
      errors.email = "Email is required.";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='Email is invalid.'
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    else if(values.password.length < 5){
        errors.password='Password must be more than 5 characters.'
    }
    if(!values.comment){
        errors.comment='Comment section is empty.'
    }
    return errors;}

export default complaintsValidation;
