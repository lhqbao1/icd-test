'use client'

import contactFormAtom from '@/lib/atom/user';
import { UserSchema } from '@/lib/validation';
import { useAtom } from 'jotai';
import ContactForm from '../contact/component/form';
import { Button } from '@/components/ui/button';
import Link from 'next/link'

const ConfirmForm = () => {
    const [formData, setFormData] = useAtom(contactFormAtom);

    const handleFormSubmit = (data: UserSchema) => {
        setFormData(data);  // Save the submitted data
    };

    if (!formData.name) {
        return (
            <div className="flex items-center justify-center text-center flex-col border-t p-6 pb-20">
                <span className="bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-[8rem] font-extrabold leading-none text-transparent">
                    Error!
                </span>
                <h2 className="my-2 text-base font-bold">
                    You need to fill the form first to get here!
                </h2>
                <div className="mt-8 flex justify-center gap-2 text-base">
                    <Link href="/contact">
                        <Button
                            variant="default"
                            size="lg"
                            className="rounded-full"
                        >Back to Contact Form
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 border-t p-6">
            <h1 className="text-center text-primary uppercase font-bold text-2xl">Check your input</h1>
            <ContactForm onSubmit={handleFormSubmit} isConfirm={true} />
        </div>
    )
}

export default ConfirmForm