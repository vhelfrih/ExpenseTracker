import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

// export default function BasicSelect() {

const IncomeExpenses = () => {
  const [account, setAccount] = useState("");
  const [szallas, setSzallas] = useState("");
  const [vendeglatas, setVendeglatas] = useState("");
  const [szabadido, setSzabadido] = useState("");
  const [bankacc, setBankacc] = useState("");

  const handleChange = (event) => {
    setAccount(event.target.value);
    console.log(account);
  };

  return (
    <Container maxWidth="md" back>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={2}
        ml={3}
      >
        <Grid item xs={4} md={2}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Account</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={account}
              label="Account"
              onChange={handleChange}
            >
              <MenuItem value={"szallas"}>Szállás</MenuItem>
              <MenuItem value={"vendeglatas"}>Vendéglátás</MenuItem>
              <MenuItem value={"szabadido"}>Szabadidő</MenuItem>
              <MenuItem value={"bankacc"}>Bankszámla</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} md={4}>
          <Button variant="outlined" size="large" endIcon={<SendIcon />}>
            OK
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IncomeExpenses;
