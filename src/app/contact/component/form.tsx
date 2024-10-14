import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { userSchema, UserSchema } from "@/lib/validation"
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useAtom } from 'jotai';
import contactFormAtom from "@/lib/atom/user"
import { useRouter } from 'next/navigation'; // Import from next/navigation
import Link from "next/link"

interface FormProps {
    onSubmit: (data: UserSchema) => void
    isConfirm?: boolean | null
}

const ContactForm = ({ onSubmit, isConfirm }: FormProps) => {
    const router = useRouter();  // Initialize the router from next/navigation
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useAtom(contactFormAtom);

    const form = useForm<UserSchema>({
        defaultValues: formData ? formData : {},
        resolver: zodResolver(userSchema),
    });

    const handleSubmit = (data: UserSchema) => {
        if (isConfirm === true) {
            router.push('/result')
        } else {
            setIsLoading(true);
            setTimeout(() => {
                onSubmit(data);  // Call the parent function
                setIsLoading(false);
                setFormData(data)

                if (data) {
                    router.push('/confirm');
                }
            }, 500)
        }

    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit, (error) => console.log(error))}
                className="space-y-4"
            >
                <div className="grid gap-4 md:grid-cols-1">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name<span className="text-red-600">*</span></FormLabel>
                                <Input {...field} hasBorder={!isConfirm} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mail<span className="text-red-600">*</span></FormLabel>
                                <Input {...field} hasBorder={!isConfirm} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <Input {...field} hasBorder={!isConfirm} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="note"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Note</FormLabel>
                                <Textarea {...field} hasBorder={!isConfirm} />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="text-center pt-6 pb-24">
                    {isConfirm ?
                        <Link href="/contact">
                            <Button size={'lg'} disabled={isLoading} className="px-12 py-5 rounded-full text-base uppercase bg-white text-primary border border-[#FA9843] shadow-none w-40 mr-6 hover:text-white">
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <></>
                                )}
                                Edit
                            </Button>
                        </Link>
                        : ""}

                    <Button size={'lg'} disabled={isLoading} className="px-12 py-5 rounded-full text-base uppercase">
                        {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <></>
                        )}
                        Submit
                    </Button>

                </div>
            </form>
        </Form>
    )
}

export default ContactForm