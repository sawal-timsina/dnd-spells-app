import { Box } from "@mui/material";
import React from "react";
import { useHome } from "../hooks/useHome";
import { MTable, MTabs } from "../components";
import { Spell } from "../interfaces";
import { useRouter } from "next/router";
import Head from "next/head";

const Home = () => {
  const { push } = useRouter();
  const {
    tableHeader,
    onTabChange,
    loading,
    spells,
    totalSpells,
    page,
    setPage,
    pageSize,
    setPageSize,
  } = useHome();

  return (
    <>
      <Head>
        <title>{"Dungeons and Dragons | Spell book"}</title>
        <meta
          name={"description"}
          content={"Dungeons and Dragons Spells List"}
        />
      </Head>
      <Box sx={{ mt: 4 }}>
        <MTabs
          onChange={() => onTabChange()}
          tabs={[
            { title: "Spell list", link: "0" },
            { title: "Favourite Spells", link: "1" },
          ]}
          value={"0"}
        />
        <Box marginBottom={2} />
        <MTable<Spell>
          page={page}
          data={spells}
          loading={loading}
          headers={tableHeader}
          count={totalSpells || 0}
          pageSize={pageSize}
          onRowClick={(value) => {
            push(`/spell/${value.index}`);
          }}
          onPageChange={(event, page) => {
            setPage(page);
          }}
          onRowsPerPageChange={(event) =>
            setPageSize(Number(event.target.value))
          }
        />
      </Box>
    </>
  );
};
export default Home;
