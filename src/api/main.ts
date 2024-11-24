'use client';

import Axios from "axios";
import { configEnv } from "@/utils/configEnv";

const apiClient = Axios.create( {
    baseURL:configEnv.API_URL
})

export default apiClient