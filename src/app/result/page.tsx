import { Button } from "@/components/ui/button"
import Link from 'next/link'
const Result = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 border-t p-6 pb-20 text-center">
            <h1 className="text-center text-primary font-bold text-2xl uppercase">Thank you</h1>
            <div>
                <p>Thank you for your contact.</p>
                <p>Our staff will contact you as soon as possible.</p>
                <p>Thank you for your patience.</p>
            </div>
            <Link href="/home">
                <Button className="w-40 rounded-full py-5">
                    TOP
                </Button>
            </Link>

        </div>
    )
}

export default Result