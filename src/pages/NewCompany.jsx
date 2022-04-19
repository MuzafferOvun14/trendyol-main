import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function NewCompany() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [rePassword, setRePasword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");

  async function addNewCompany() {
    let fItems = { username, password, rePassword, companyName, adress, phone, email, website }
    let result = await fetch("http://localhost:8080/api/users/addCompany", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*"

      },
      body: JSON.stringify(fItems)
    });
    let i;
    const data = await (await result).json();
    console.log(data);
    if(data.success===true){
      history.push("/newLoginForm")
     }else{
      for(i=0;i<data.errors.length;i++){
        if(data.errors[i].name==="username") setUsernameError(data.errors[i].value);
        if(data.errors[i].name==="companyName") setCompanyNameError(data.errors[i].value);
      }
     }
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LoginCaption />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Yeni Şirket Kayıt Formu
        </Grid>
      </Grid>
      <center>
        <Grid container spacing={3} xs={8}>
          <Grid item xs={12}>
            <TextField variant="outlined" margin="normal" required fullWidth
              id="username"
              label="Kullanıcı Adınız"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}

              autoFocus
            />
            <div style={{color:"red"}}>{usernameError}</div>

            <TextField variant="outlined" margin="normal" required fullWidth
              id="password"
              label="Şifrenizi girin."
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}

            />
            <TextField variant="outlined" margin="normal" required fullWidth
              id="rePassword"
              label="Şifrenizi Tekrar girin."
              name="rePassword"
              type="password"
              value={rePassword}
              onChange={(e) => setRePasword(e.target.value)}

            />
            <TextField variant="outlined" margin="normal" required fullWidth
              id="companyName" label="Şirket Adını Giriniz"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}

            />
            <div style={{color:"red"}}>{companyNameError}</div>

            <TextField variant="outlined" margin="normal" required fullWidth
              id="adress" label="Şirket Adres bilgisi" name="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}

            />
            <TextField variant="outlined" margin="normal" fullWidth
              id="phone" label="Şirket Telefonu" name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}

            />
            <TextField variant="outlined" margin="normal" required fullWidth
              id="email" label="Şirket iletişim Mail adresi" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <TextField variant="outlined" margin="normal" fullWidth
              id="website" label="Şirketinizin web sayfası" name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={addNewCompany}
            >
              Şirket Kaydını Yap
            </Button>
          </Grid>

        </Grid>
      </center>
    </div>
  );
}
