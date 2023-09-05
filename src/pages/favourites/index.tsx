import { Box } from "@mui/material";
import React from "react";
import { MTable, MTabs } from "../../components";
import { useFavourite } from "../../hooks/useFavourite";
import { useRouter } from "next/router";
import Head from "next/head";

const Favourites = () => {
  const { push } = useRouter();
  const {
    tableHeader,
    onTabChange,
    pageSize,
    page,
    setPage,
    setPageSize,
    spells,
    totalSpells,
    loading,
  } = useFavourite();

  return (
    <>
      <Head>
        <title>{"Dungeons and Dragons | Favourite spells"}</title>
        <meta name={"description"} content={"List of favourite spells"} />
      </Head>
      <Box sx={{ mt: 4 }}>
        <MTabs
          onChange={() => onTabChange()}
          tabs={[
            { title: "Spell list", link: "0" },
            { title: "Favourite Spells", link: "1" },
          ]}
          value={"1"}
        />
        <Box marginBottom={2} />
        <MTable
          data={spells}
          headers={tableHeader}
          page={page}
          loading={loading}
          count={totalSpells}
          pageSize={pageSize}
          onRowClick={(value) => {
            push(`/spell/${value.index}`);
          }}
          onPageChange={(_, page: number) => setPage(page)}
          onRowsPerPageChange={(event) =>
            setPageSize(Number(event.target.value))
          }
          renderEmpty={<>{"Looks like you have no favourite spells"}</>}
        />
      </Box>
    </>
  );
};

export default Favourites;
