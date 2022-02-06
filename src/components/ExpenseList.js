import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  width: "12rem",
  color: theme.palette.text.secondary,
}));

const ExpenseList = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{
        mt: 3,
        textAlign: "center"
      }}>List of expenses</Typography>
      <Grid
        container
        direction= "column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          height: "100%",
          background: "#48cae4",
          mt: 2,
          pb: 2,
        }}
      >
        <Grid item xs={1}>
          <Typography mt={2}>
            <Item>Car washing <span>700</span></Item>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography mt={2}>
            <Item>Pet Food <span>600</span></Item>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography mt={2}>
            <Item>Icecream <span>500</span></Item>
          </Typography>
        </Grid>
      </Grid>
      </Container>
  );
};

export default ExpenseList;
