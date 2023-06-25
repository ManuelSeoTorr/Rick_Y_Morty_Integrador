import { useState } from "react";
import validate from "./validation"
const Form = (props) => {
    const {login} = props;
    const [userData,setUserdata] = useState({
        email: "",
        password: "",
    });

    const [errors,setErrors] = useState({
        email:"",
        password:","
    });

const handleChange = (event) => { 
    const property = event.target.name;
    const value = event.target.value;

    setUserdata({...userData,[property]:value})
    setErrors(validate({...userData,[property]:value}));
    //   validate({...userData,[property]:value},setErrors,errors);
};

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
};

    return (
        <form onSubmit={handleSubmit}>
            {/*EMAIL*/}
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email..."
                    value={userData.email} 
                    onChange={handleChange}
                />
                {errors.email ? (<p>{errors.email}</p>): null}
            </div>
            {/*PASSWORD*/}
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="text" 
                    name="password"
                    placeholder="Password..." 
                    value={userData.password} 
                    onChange={handleChange}
                />
                {errors.password ? (<p>{errors.password}</p>): null}
            </div> 
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;