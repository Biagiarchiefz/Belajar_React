import Inputfrom from "../Elements/Input/Index";
import ButtonBaru from "../Elements/Button/Index";
const FormRegister = () => {
  return (
    <form action="">
        <Inputfrom
            judul="Fullname"
            name="fullname"
            tai="text"
            placeholder="masukan nama anda"
          ></Inputfrom>

          <Inputfrom
            judul="Email"
            name="Email"
            tai="email"
            placeholder="masukan password anda"
          ></Inputfrom>

          <Inputfrom
            judul="Password"
            name="Password"
            tai="password"
            placeholder="masukan password anda"
          ></Inputfrom>

          <ButtonBaru classname="bg-blue-600">Register</ButtonBaru>
        </form>
  );
}


export default FormRegister;