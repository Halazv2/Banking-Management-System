import useSWR from "swr";
export default function getTransactionsOfAccount(id: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {data, error} = useSWR(`http://127.0.0.1:4000/transaction/${id}`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
