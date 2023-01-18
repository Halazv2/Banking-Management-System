import axios from "axios";

export default function useSendMoney(values: {receiver: string; amount: number}) {
  const sender = JSON.parse(localStorage.getItem("account") || "{}");
  axios
    .post("http://127.0.0.1:4000/transaction", {
      sender: sender._id,
      receiver: values.receiver,
      amount: values.amount,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
