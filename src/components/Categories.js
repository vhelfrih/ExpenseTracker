import React from "react";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SubwayIcon from "@mui/icons-material/Subway";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HouseIcon from "@mui/icons-material/House";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PersonIcon from "@mui/icons-material/Person";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "#00b4d8",
  borderRadius: "50%",
  border: '1px solid #0077b6',
  width: "2rem",
  height: "2rem"
}));

const Categories = () => {
  return (
    <div>
        <Grid container rowSpacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          ml: 2,
          mt: 1
        }}>
          <Grid item xs={2}>
            <Item>
              <RestaurantMenuIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <SubwayIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <MedicalServicesIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <HouseIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <CardGiftcardIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <PersonIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <FamilyRestroomIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <PhoneAndroidIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <DirectionsCarIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <CheckroomIcon />
            </Item>
          </Grid>
        </Grid>
    </div>
  );
};

export default Categories;
