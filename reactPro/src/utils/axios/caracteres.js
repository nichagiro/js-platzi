import axios from "axios";
import { RICK_API } from "@config/apis";

export const getCaracteres = async () => {
    return await axios.get(RICK_API)
}