import React from 'react'
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CompanyMenu from './menu';
import Category from './Category';
import Product from './Product';

export default function company() {
    let sessionCode=sessionStorage.getItem("session_code");
     if(sessionCode!=""){
        return (
            <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                <CompanyMenu/>
                </Grid>
                <Grid item xs={9}>
                <Route  path="/company/category/" component={Category}/>
                <Route  path="/company/products/" component={Product}/>

                </Grid>
            </Grid>
            </div>
        
        )
    }
 }
