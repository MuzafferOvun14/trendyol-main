import React from 'react';
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
            autoFocus
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="password"
            label="Şifrenizi girin."
            name="password"
            type="password"
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
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
