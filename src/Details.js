import { Grid, GridColumn } from '@progress/kendo-react-grid';
import React, { useEffect, useState } from 'react';

const Details = (props) => {
    const [citiesInfo,setCitiesInfo]=useState([])
    const getZipCodes = (zipArray)=>{
      return zipArray.join(',')
    }
    useEffect(()=>{
       const citiesData = Object.entries(props.dataItem.cities)
       const citiesUpdated = citiesData.map((city)=>{
            return {
              city: city[0],
              zip: getZipCodes(city[1]),
            };
        })
        setCitiesInfo(citiesUpdated)
    },[props.dataItem])

    return (
      <Grid data={citiesInfo}>
        <GridColumn field="city" title="City"></GridColumn>
        <GridColumn field="zip" title="Zip"></GridColumn>
      </Grid>
    );
};

export default Details;