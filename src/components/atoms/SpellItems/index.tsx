import React, { FC, ReactNode } from "react";
import { Box, Divider, Typography } from "@mui/material";

interface IProps {
  title: string;
  description: string | ReactNode;
}

/**
 * Renders a spell item component.
 *
 * @param {IProps} props - The props object containing the title and description.
 * @return {JSX.Element} The rendered spell item component.
 */
export const SpellItems: FC<IProps> = ({ title, description }) => {
  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <Typography
        variant={"subtitle1"}
        sx={{ minWidth: 120, fontWeight: "bold" }}
      >
        {title}
        {" : "}
      </Typography>
      <Divider sx={{ mr: 1, height: 0 }} />
      {typeof description === "string" ? (
        <Typography variant={"body1"}>{description}</Typography>
      ) : (
        description
      )}
    </Box>
  );
};
