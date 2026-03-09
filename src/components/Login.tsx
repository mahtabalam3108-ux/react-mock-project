import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface FormData { name: string; password: string; }

const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        password: ''
    });

    // Typed handler for input, textarea, or select 
    type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    const handleChange = (e: ChangeEvent<FormElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log(formData);
        //reset form data
        setFormData({
            name: '',
            password: ''
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" value={formData.name} onChange={handleChange} name="name" />
                </p>
                <p>
                     <input type="password" value={formData.password} onChange={handleChange} name="password" />
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </>
    )
}

export default Login;