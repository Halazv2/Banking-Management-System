import axios from "axios";
export default function useSignup(values: {email: string; pin: string; name: string}) {
  axios
    .post("http://127.0.0.1:4000/account", {
      email: values.email,
      pin: values.pin,
      name: values.name,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
