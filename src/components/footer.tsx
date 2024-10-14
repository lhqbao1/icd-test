import { Icons } from "./icons";
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="footer py-2 flex gap-2 border-t-2 border-gray-400">
            <Image
                src="/images/logo-footer.jpg"
                width={30}
                height={30}
                alt="footer logo"
                className="my-auto ml-2"
            />
            <span className="text-sm mr-2 text-center">90/88B Nguyen Dinh Chieu, Da Kao Ward, District 1, Ho Chi Minh City</span>
        </div>
    )
}