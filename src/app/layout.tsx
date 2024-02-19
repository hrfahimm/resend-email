/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import toast, { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HR Fahim",
    description: "Email",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className="!scroll-smooth ">
            <body
                className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90   text-gray-950 relative mx-3  p-7 sm:pt-9`}>

                <div className='bg-[#e5b3f5] absolute -z-10 top-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] '></div>
                <div className='bg-[#a8dfdf] absolute -z-10 top-[-1rem] left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>

                {children}
                <Toaster position='bottom-center' />



                <div className='bg-[#a8dfdf] absolute -z-10 bottom-[-6rem] right-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] '></div>
                <div className='bg-[#e5b3f5d5] absolute -z-10 bottom-[-1rem] left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '></div>

            </body>
        </html>
    );
}
