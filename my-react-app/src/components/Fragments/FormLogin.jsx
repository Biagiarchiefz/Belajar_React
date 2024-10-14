import Inputfrom from "../Elements/Input/Index";
import ButtonBaru from "../Elements/Button/Index";


const FormLogin = () => {
  const dipencet = (event) => {
    event.preventDefault()
    localStorage.setItem("email", event.target.Email.value)
    localStorage.setItem("password", event.target.Password.value)
    window.location.href = "/products"
  }
  return (
    <form onSubmit={dipencet}>
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

          <ButtonBaru classname="bg-blue-600 w-full" type="submit">Login</ButtonBaru> 
        </form>
  );
}


export default FormLogin;