import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useSpellDetails } from "../../hooks/useSpellDetails";
import Head from "next/head";
import { SpellDetail } from "../../components/organisms/SpellDetail";

const SpellDetails = () => {
  const { data, loading } = useSpellDetails();

  return (
    <>
      <Head>
        <title>{"Dungeons and Dragons | Spell Details"}</title>
        <meta name={"description"} content={"Details of a spell"} />
      </Head>
      <Box sx={{ mt: 2, pb: 8 }}>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ height: 32, width: 32 }} />
          </Box>
        )}
        {!loading && data && <SpellDetail data={data} />}
      </Box>
    </>
  );
};

export default SpellDetails;
