import React, { useState } from "react";

type formData = {
    name: string;
    email: string;
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<formData>({
        name: '',
        email: ''
    });
    const [errors, setErrors] = useState<Partial<formData>>({});

    const validate = (): boolean => {
        const newErrors: Partial<formData> = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else {
            const input = document.createElement('input');
            input.type = 'email';
            input.value = formData.email;
            if (!input.checkValidity()) {
                newErrors.email = 'Invalid email';
            }
        }

        setErrors(newErrors);
        console.log(errors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(validate()) {
            console.log('form data', formData);
        }
    }

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                    name="name"
                    placeholder="enter name"
                    value={formData.name}
                    onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <input type="text"
                    name="email"
                    placeholder="enter email"
                    value={formData.email}
                    onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
            
        </>
    )
}

export default UserForm;