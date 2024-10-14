'use client'

import contactFormAtom from "@/lib/atom/user";
import { UserSchema } from "@/lib/validation";
import { useState } from "react";
import ConfirmData from "./component/confirmData";
import ContactForm from "./component/form"
import { useAtom } from 'jotai';

const Contact = () => {
    const [formData, setFormData] = useAtom(contactFormAtom);

    const handleFormSubmit = (data: UserSchema) => {
        setFormData(data);  // Save the submitted data
    };

    return (
        <div className="border-t  p-6">
            <h1 className="text-center text-primary font-bold text-2xl">CONTACT FORM</h1>
            <ContactForm onSubmit={handleFormSubmit} />
        </div>

    )
}

export default Contact