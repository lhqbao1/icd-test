import Header from "@/components/header";
import CarouselBanner from "./components/carousel";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="home container">
            <div className="home-carousel relative">
                <CarouselBanner />
                <h1 className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white text-2xl">Welcome to ICD VIETNAM</h1>
                <div className="bg-[#00000075] absolute z-0 w-full h-full top-0"></div>
            </div>
            <div className="home-about py-10 border-b">
                <h2 className="text-primary uppercase text-3xl pb-6 font-bold text-center">
                    ABOUT US
                </h2>
                <div className="flex flex-row justify-between flex-wrap px-4">
                    <Card className="basis-1/2 p-1" hasBorder={false} hasShadow={false}>
                        <Image
                            src="/images/about-1.png"
                            width={170}
                            height={130}
                            alt="about-1"
                            className="w-full h-1/2"
                        />

                        <CardHeader>
                            <CardTitle>Teamwork spirit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            Teamwork is key to success; united, we achieve great things.
                        </CardContent>
                    </Card>
                    <Card className="basis-1/2 p-1" hasBorder={false} hasShadow={false}>
                        <Image
                            src="/images/about-2.png"
                            width={170}
                            height={130}
                            alt="about-1"
                            className="w-full h-1/2"
                        />

                        <CardHeader>
                            <CardTitle>Self-improvement</CardTitle>
                        </CardHeader>
                        <CardContent>
                            A company that promotes growth helps employees reach their potential.
                        </CardContent>
                    </Card>
                    <Card className="basis-1/2 p-1" hasBorder={false} hasShadow={false}>
                        <Image
                            src="/images/about-3.png"
                            width={170}
                            height={130}
                            alt="about-1"
                            className="w-full h-1/2"
                        />

                        <CardHeader>
                            <CardTitle>Mutual support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            With mutual support, the team overcomes challenges and succeeds.
                        </CardContent>
                    </Card>
                    <Card className="basis-1/2 p-1" hasBorder={false} hasShadow={false}>
                        <Image
                            src="/images/about-4.png"
                            width={170}
                            height={130}
                            alt="about-1"
                            className="w-full h-1/2"
                        />

                        <CardHeader>
                            <CardTitle>Vibrant setting</CardTitle>
                        </CardHeader>
                        <CardContent>
                            An engaging environment is ideal for those pursuing innovation and learning.
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center">
                    <Link href="/contact">
                        <Button className="text-white px-12 py-5 rounded-full text-base uppercase">CONTACT</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
