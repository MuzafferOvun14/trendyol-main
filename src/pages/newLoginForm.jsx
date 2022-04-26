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
export default function CenteredGrid() {
  const classes = useStyles();
  const history = useHistory();
  function openNewCompany(){
    history.push("/newCompany")
  }
  function openNewUser(){
    history.push("/newUser")
  }
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function loginUser() {
    let fItems = { username, password }
    let result = await fetch("http://localhost:8080/api/users/loginUser",{
       method: 'POST', 
      headers: { 
          "Content-Type": "application/json", 
        "accept": "*/*"
        
      },
      body: JSON.stringify(fItems)
    });
    let i;
       const data = await (await result).json();
       setPasswordError("");
       setUsernameError("");
       if(data.success===true){
          console.log("Giriş Başarılı");
          console.log(data);
          sessionStorage.setItem("session_code",data.data[0].sessionCode);
       }else{
        console.log("Giriş hatalı");
        for(i=0;i<data.errors.length;i++){
          if(data.errors[i].name==="username") setUsernameError(data.errors[i].value);
          if(data.errors[i].name==="password") setPasswordError(data.errors[i].value);
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
      <center>
      <Grid container spacing={3} xs={8}>
        <Grid item xs={12}>
        <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="username"
            label="Kullanıcı Adınız"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
           <div style={{color:"red"}}>{usernameError}</div>

          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="password"
            label="Şifrenizi girin."
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
           <div style={{color:"red"}}>{passwordError}</div>

           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={loginUser}
             >
            Giriş
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Link href=""  onClick={(e)=>{openNewUser()}} variant="body2">{"Yeni Kullanıcı oluştur"}</Link>
        </Grid>
        <Grid item xs={6}>
         <Link href="" onClick={(e)=>{openNewCompany()}} variant="body2">{"Yeni Şirket oluştur"}</Link>
        </Grid>

      </Grid>
      </center>
    </div>
  );
}
