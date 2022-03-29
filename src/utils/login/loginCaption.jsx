import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../../images/trendyolLogo.png';
const useStyles = makeStyles((theme) => ({
  root: {    flexGrow: 1,  },
  paper: {
    padding: theme.spacing(2),    textAlign: 'center',    color: theme.palette.text.secondary,
  },
}));
export default function LoginCaption() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={4} style={{ textAlign:'right' }}>
             <img src={logo} style={{height:'60px'}}/>
        </Grid>
        <Grid item xs={8}
          style={{ 
              textAlign:'left'
              ,marginTop:'20px'
              ,fontSize:'30px'
              ,color:'#f40000'
            }}>
             Türkiye'nin online alışveriş sitesi
        </Grid>
      </Grid>
    </div>
  );
}
