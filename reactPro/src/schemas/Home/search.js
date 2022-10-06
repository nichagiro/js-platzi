import * as yup from "yup";
import es from 'yup-es'

yup.setLocale(es)

export const schema = yup.object({
    search: yup.string().required()
}).required();

