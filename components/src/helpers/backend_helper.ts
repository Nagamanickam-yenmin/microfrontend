import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// Login Method
export const login = (data: object) => post(url.LOGIN, data);
export const forgotPassword = (data: object) => post(url.FORGOT_PASSWORD, data);
export const forgotPasswordReset = (data: object) => post(url.FORGOT_PASSWORD_RESET, data);
