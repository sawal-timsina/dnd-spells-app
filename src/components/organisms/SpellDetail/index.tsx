import React, { FC } from "react";
import {
  AppBar,
  Box,
  Chip,
  Divider,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { SpellDetails } from "../../../interfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavouritesContext } from "../../../states/favourites";
import { SpellItems } from "../../atoms";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

interface IProps {
  data: SpellDetails;
}

export const SpellDetail: FC<IProps> = ({ data }) => {
  const { isFavourite, toggleFavourite } = useFavouritesContext();
  const { back } = useRouter();

  const isFavourite_ = isFavourite(data.index);

  return (
    <>
      <AppBar position={"static"} variant={"outlined"} color={"transparent"}>
        <Toolbar>
          <IconButton
            size={"large"}
            edge={"start"}
            color={"inherit"}
            aria-label={"menu"}
            sx={{ mr: 2 }}
            onClick={() => {
              back();
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant={"h5"} component={"div"} sx={{ flexGrow: 1 }}>
            {data.name}
          </Typography>
          <Tooltip
            title={
              isFavourite_ ? "Remove from favourites" : "Add to favourites"
            }
          >
            <IconButton
              aria-label={"favourite"}
              size={"medium"}
              onClick={() => {
                toggleFavourite(data);
              }}
            >
              {isFavourite_ ? (
                <FavoriteIcon fontSize={"inherit"} />
              ) : (
                <FavoriteBorderIcon fontSize={"inherit"} />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Divider sx={{ mt: 2, width: 0 }} />
      <Typography variant={"body1"}>{data.desc}</Typography>
      <Divider sx={{ mt: 2, width: 0 }} />
      {!!data.higher_level.length && (
        <SpellItems
          title={"Higher Level"}
          description={data.higher_level.toString()}
        />
      )}
      {!!data.damage && (
        <SpellItems
          title={"Damage"}
          description={
            <Chip
              color={"error"}
              variant={"outlined"}
              label={data.damage.damage_type.name}
            />
          }
        />
      )}
      <SpellItems
        title={"Level"}
        description={
          <Chip color={"success"} variant={"outlined"} label={data.level} />
        }
      />
      <SpellItems
        title={"Components"}
        description={
          <Box sx={{ display: "flex", gap: 1 }}>
            {data.components.map((value, index) => (
              <Chip key={index} label={value} />
            ))}
          </Box>
        }
      />
      <SpellItems title={"Range"} description={data.range} />
      <SpellItems title={"Duration"} description={data.duration} />
      <SpellItems title={"Casting Time"} description={data.casting_time} />
      <SpellItems
        title={"Ritual"}
        description={data.ritual ? <CheckIcon /> : <CloseIcon />}
      />
      <SpellItems
        title={"Concentration"}
        description={data.concentration ? <CheckIcon /> : <CloseIcon />}
      />
      <SpellItems title={"School"} description={data.school.name} />
      {!!data.classes.length && (
        <SpellItems
          title={"Classes"}
          description={
            <Box sx={{ display: "flex", gap: 1 }}>
              {data.classes.map((value, index) => (
                <Chip key={index} label={value.name} />
              ))}
            </Box>
          }
        />
      )}
      {!!data.subclasses.length && (
        <SpellItems
          title={"Sub Classes"}
          description={
            <Box sx={{ display: "flex", gap: 1 }}>
              {data.subclasses.map((value, index) => (
                <Chip key={index} label={value.name} />
              ))}
            </Box>
          }
        />
      )}
    </>
  );
};
