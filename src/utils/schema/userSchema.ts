import { z } from 'zod'

const registerSchema = {
    email: z.string().email({message: "Must be a valid email"}),
    firstName: z.string().min(2, {message: "Name must be atleast 2 characters"}),
    lastName: z.string().min(2, {message: "Name must be atleast 2 characters"}),
    password: z.string().refine(val => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val)
    }, {message: "Password is not valid"})   
}

const paymentSchema = {
    cardNumber: z.string().refine(val => /^[0-9]*$/.test(val) && val.length == 16, {message: "Invalid card number"}),
    expirationDate: z.string().refine(val => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val), {message: "Invalid date"}),
    cvv: z.string().refine(val => /^\d{3}$/.test(val), {message: "Invalid CVV"}),
    name: z.string().min(2, {message: "Name must be atleast 2 characters"}).max(255, {message: "Name is too large"})
}
export {registerSchema, paymentSchema}