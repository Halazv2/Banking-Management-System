import axios from "axios";
import {useNavigate} from "react-router-dom";

export default async function useLogin(values: {email: string; pin: string}, navigate: ReturnType<typeof useNavigate>) {
  await axios
    .post("http://127.0.0.1:4000/auth", {
      email: values.email,
      pin: values.pin,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("account", JSON.stringify(res.data.account));
      navigate("/dashboard");
      return true;
    })
    .catch((err) => {
      return err;
    });
}
