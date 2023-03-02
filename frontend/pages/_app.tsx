import React from "react";
import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import AuthLayout from "../layouts/AuthLayout";
import { ToastContainer } from "@/services/toast";
import { AuthProvider } from "@/context/AuthContext";
import { CompanyProvider } from "@/context/CompanyContext";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { fantom } from "wagmi/chains";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ProjectAPIKey;

const chains = [fantom];

const client = createClient(
  getDefaultClient({
    appName: "PayWall",
    infuraId,
    chains,
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <AuthProvider>
            <CompanyProvider>
              <AuthLayout>
                <Component {...pageProps} />
                <ToastContainer />
              </AuthLayout>
            </CompanyProvider>
          </AuthProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
