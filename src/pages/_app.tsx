import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { QueryClientProvider } from "react-query";
import { FavouritesProvider } from "../states/favourites";
import { queryClient } from "../utills/query_client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel={"icon"} href={"/dnd.ico"} />
      </Head>
      <Container
        component={"main"}
        maxWidth={"md"}
        sx={{ mt: 4, mb: 4, height: "100%" }}
      >
        <Box
          gap={2}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Link href={"/"} className={"link"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Image
                src={"/dnd.ico"}
                alt={"logo"}
                width={100}
                height={100}
                className={"dnd-logo"}
              />
              <Typography variant={"h2"}>{"Dungeons and Dragons"}</Typography>
            </Box>
          </Link>
          <Typography variant={"h5"} component={"h2"} gutterBottom>
            {"Discover, Collect, Conquer: Your Spell book Awaits!"}
          </Typography>
        </Box>
        <QueryClientProvider client={queryClient}>
          <FavouritesProvider>
            <Component {...pageProps} />
          </FavouritesProvider>
        </QueryClientProvider>
      </Container>
    </>
  );
}

export default MyApp;
