import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Chart from "../components/UI/LineGraph";
import useCoins from "../hooks/useCoins";

export default function Home() {
  useCoins("bitcoin", 30);

  return (
    <div>
      <Head>
        <title>Crypto Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Main />
    </div>
  );
}
