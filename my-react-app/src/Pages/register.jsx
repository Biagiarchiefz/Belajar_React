import AuthLayouts from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type = "register">
      <FormRegister></FormRegister>


    </AuthLayouts>
  );
};

export default RegisterPage;
