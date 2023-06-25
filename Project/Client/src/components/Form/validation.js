const validate = (values) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // Expresión regular para validar email
    const passwordRegex = /^(?=.*\d).{6,10}$/; // Expresión regular para validar contraseña
  
    // Validación del email
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "El email no es válido";
    } else if (values.email.length > 35) {
      errors.email = "El email no puede tener más de 35 caracteres";
    }
  
    // Validación de la contraseña
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "La contraseña no es válida";
    }
  
    return errors;
  };

  export default validate;

// const validate = (userData,setErrors,errors) => {
//     if(!userData.email) setErrors({...errors, email:"El email esta vacio"});
//     else setErrors({...errors,email:""});
// }  