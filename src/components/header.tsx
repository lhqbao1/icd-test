'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { Icons } from './icons'
import Link from 'next/link'

export default function Header() {
    const pathname = usePathname();

    const isHomePage = pathname === "/home";

    return (
        <div className='bg-white flex justify-between h-10 border-b-0'>
            <div className='my-auto ml-2'>
                <Image
                    src="/images/LOGO ICDVN@3x.jpg"
                    width={100}
                    height={28}
                    alt="Picture of the author"
                />
            </div>
            <Link href="/home" className='bg-[#F98F29] flex justify-center items-center w-10'>
                {isHomePage ?
                    <Icons.Mail />
                    :
                    <Icons.Home />
                }
            </Link>
        </div>
    )
}