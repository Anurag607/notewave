import { setCategoryData } from "@/redux/reducers/coinSlice";

const Fetcher = async (reduxDispatch: React.Dispatch<any>) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CRYPTO_CATEGORIES!, {
      method: "GET",
      mode: "cors",
      headers: {
        Content: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    reduxDispatch(setCategoryData(data));
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default Fetcher;
