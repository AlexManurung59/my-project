import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomePage from ".";
import Nav from "@/Components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
