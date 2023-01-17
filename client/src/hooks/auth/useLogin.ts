import axios from "axios";
export default async function useLogin(values: {email: string; pin: string}) {
  console.log(values.email);
  await axios
    .post("http://localhost:4000/auth", {
      email: values.email,
      pin: values.pin,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}