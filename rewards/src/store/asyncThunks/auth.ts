// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { login, forgotPassword, forgotPasswordReset } from "../../helpers/backend_helper";
// import toast from 'react-hot-toast'; 
// import { tokenKey } from "../../helpers/api_helper";

// export const loginThunk = createAsyncThunk(
//   "login/loginThunk",
//   async ({ values, navigateAfterLogin }: any) => {
//     try {
//       const response = await login(values);

//       if (response?.status?.toLowerCase() === "success") {
//         localStorage.setItem(tokenKey, response?.data?.token);
//         toast.success(response?.message);
//         navigateAfterLogin(response?.data?.token)
//       } else {
//         if (response?.isOtpVerified?.toLowerCase() === "false") {
//           localStorage.setItem("signup-user", response?.userid);
//         }
//         toast.error(response?.message);
//       }
//       return response;
//     } catch (error: any) {
//       return await error?.response?.data;
//     }
//   }
// );


// //Forgot Password
// export const forgotPswThunk = createAsyncThunk(
//   "forgotPsw/forgotPswThunk",
//   async (datas: any) => {
//     const { data, navigate } = datas;
//     try {
//       const response = await forgotPassword(data);
//       if (response?.status?.toLowerCase() === "success") {
//         const encodedEmail = btoa(data?.email?.toLowerCase());
//         localStorage.setItem("register", encodedEmail);
//         toast.success(response?.message);
//         if (navigate) {
//           navigate();
//         }
//       } else {
//         toast.error(response?.message);
//       }
//       return await response;
//     } catch (error: any) {
//       return await error?.response?.data;
//     }
//   }
// );


// //Reset Password
// export const resetPswThunk = createAsyncThunk(
//   "resetPsw/resetPswThunk",
//   async (datas: any) => {
//     try {
//       const { data, navigate } = datas;
//       const resetVal: any = {};
//       resetVal['email'] = data?.email;
//       resetVal['password'] = data?.password;
//       resetVal['confPwd'] = data?.confPwd;
//       resetVal['otp'] = Number(data?.verificationToken);
//       const response = await forgotPasswordReset(resetVal);
//       if (response?.status?.toLowerCase() === "success") {
//         localStorage.removeItem('register');
//         toast.success(response?.message);
//         navigate();
//       } else {
//         toast.error(response?.message);
//       }
//       return await response;
//     } catch (error: any) {
//       return await error?.response?.data;
//     }
//   }
// );