"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/Components/sendEmail";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


export default function Home() {
    const { pending } = useFormStatus()
    const { reset } = useForm()





    return (
        <div className="flex justify-center  items-center h-screen ">
            <motion.section

                className=' items-center text-center w-[min(100%,40rem)]'

                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
                viewport={{
                    once: true
                }}
            >

                <h2 className='text-4xl font-bold mb-8  '>Email Sende</h2>
                <form className="mt-10 flex flex-col group "
                    action={async formData => {
                        const { data, error } = await sendEmail(formData)

                        if (error) {
                            toast.error(error)
                            return;
                        }
                        toast.success('Email sent successfully')


                    }
                    }
                >

                    <input className="h-14 rounded-xl borderBlack p-4  dark:text-black   hover:border-gray-200 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 dark:hover:bg-opacity-100 transition-all dark:outline-none" type="email" placeholder="Your Email" name="senderEmail"
                        required maxLength={500}
                    />

                    <textarea className="h-52 my-3 rounded-xl borderBlack p-4 dark:text-black    hover:border-gray-200 dark:bg-white dark:bg-opacity-90  dark:focus:bg-opacity-100 dark:hover:bg-opacity-100  transition-all dark:outline-none  " placeholder="Your Massage" required maxLength={5000} name="message" />

                    <button type='submit' className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110  hover:scale-110  active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65" disabled={pending}>
                        {
                            pending ? <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div> : (
                                <>
                                    Send
                                    < FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
                                </>
                            )
                        }

                    </button>
                </form>

            </motion.section>
        </div >)
}
