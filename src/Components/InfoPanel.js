import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: 50,
    padding: 10,

    color: theme.palette.text.secondary,
}));

export default function InfoPanel() {
    const [globalData, SetData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.covid19api.com/world/total");
            let data = await response.json();
            //delete data.results.source;
            SetData(data)
            //console.log(data);
            //console.log(globalData);
        }
        getData();
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {Object.keys(globalData).map((key,indx) => {
                    return (
                        <Grid item xs={12} sm={4} key ={indx}>
                          <h3>  <Item> {key} <br/> {globalData[key]}</Item>
                            
                            </h3>
                        </Grid>
                    )
                })
                }



            </Grid>
        </Box>
    );
}
