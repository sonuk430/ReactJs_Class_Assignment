import * as Yup from "yup";

const singnUpValidation = Yup.object({
  username: Yup.string().min(3).required("Please Enter Name"),
  email: Yup.string()
    .email("Please Enter valid email")
    .required("Please enter your email"),
  password: Yup.string().min(4).required("Please enter password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "password not matched")
    .required("Not matched Your password"),
});

export default singnUpValidation;

// username: "",
// email: "",
// password: "",
// confirm_password: "",
