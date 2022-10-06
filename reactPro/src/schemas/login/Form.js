import * as yup from "yup";
import es from 'yup-es'

yup.setLocale(es)

export const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    remember: yup.bool().required(),
}).required();

