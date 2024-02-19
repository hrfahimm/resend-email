'use server'

import { getErrorMessage, validateString } from "@/utils/utils";

import React from "react";
import { Resend } from "resend";
import ContcatFormEmail from "./emailPage";
import toast from "react-hot-toast";

const resend = new Resend(process.env.RESET_API_KEY);


export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    //simple server side validation
    if (!validateString(senderEmail, 500)) {
        return { error: 'Invalid sender email' }
    }
    if (!validateString(message, 5000)) {
        return { error: 'Invalid message' }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Email <onboarding@resend.dev>',
            to: 'fahimtaj10@gmail.com',
            subject: ' Resend Email ',
            reply_to: senderEmail as string,
            react: React.createElement(ContcatFormEmail, { message: message as string, senderEmail: senderEmail as string })

        })
         
    } catch (error: unknown) {

        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    }

}

"invelid email"