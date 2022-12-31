import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { APIKey, PASSWORD } from "../utils/prefix";

const AuthPage = ({ setPass }: { setPass: (value: boolean) => void }) => {
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      style={{ height: "100vh" }}
    >
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        style={{ marginTop: "calc(45vh - 28px)" }}
      >
        <form
          onSubmit={() => {
            if (password === PASSWORD) {
              setPass(true);
            }
          }}
        >
          <TextField
            variant="outlined"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              marginRight: "10px",
              width: "250px",
            }}
          />
          <Button
            variant="contained"
            style={{
              height: "56px",
            }}
            onClick={() => {
              if (password === PASSWORD) {
                setPass(true);
              }
            }}
          >
            제출
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AuthPage;
