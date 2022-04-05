import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Label } from '@material-ui/icons';

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
export default function NewUser() {
  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [rePassword, setRePasword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  async function recordUser() {
    let formItems = { username, password, rePassword, name, surname, adress, phone, email, website }
    let result = fetch("http://localhost:8080/api/users/adduser", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(formItems)
    });
    result = await (await result).json();
    if (result.success) {
      console.log("Kayıt Başarılı");
    }
    else {
      console.log(result);
    }

  }
  
  const [rePasswordError, setrePasswordError] = useState("");
  const [usernameError, setusernameError] = useState("");
  const [nameError, setnameError] = useState("");
  const [surnameError, setsurnameError] = useState("");
  async function addNewUser() {
    setrePasswordError("");
    setusernameError("");
    setnameError("");
    setsurnameError("");
    let fItems = { username, password, rePassword, name, surname, adress, phone, email, website }
    let result = await fetch("http://localhost:8080/api/users/adduser",{
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
          if(data.errors[i].name==="rePassword") 
            setrePasswordError(data.errors[i].value);
            if(data.errors[i].name==="username") 
            setusernameError(data.errors[i].value);
            if(data.errors[i].name==="name") 
            setnameError(data.errors[i].value);
            if(data.errors[i].name==="surname") 
            setnameError(data.errors[i].value);
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
          Yeni Kullanıcı Kayıt Formu
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
            
              
                <div style={{color:"red"}}>{rePasswordError}</div>
            
            <TextField variant="outlined" margin="normal" required fullWidth
              id="name" label="Adınız" name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div style={{color:"red"}}>{nameError}</div>
 
            <TextField variant="outlined" margin="normal" required fullWidth
              id="surname" label="Soyadınız" name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <div style={{color:"red"}}>{surnameError}</div>
            <TextField variant="outlined" margin="normal" required fullWidth
              id="adress" label="Adres bilginiz" name="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
            <TextField variant="outlined" margin="normal" fullWidth
              id="phone" label="Telefon numaranız" name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField variant="outlined" margin="normal" required fullWidth
              id="email" label="iletişim Mail adresiniz" name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField variant="outlined" margin="normal" fullWidth
              id="website" label="Kişisel Web Sayfanız" name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={addNewUser}
            >
              Kullanıcı Kaydını Yap
            </Button>
          </Grid>

        </Grid>
      </center>
    </div>
  );
}
