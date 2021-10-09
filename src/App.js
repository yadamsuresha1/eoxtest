import {Grid, GridColumn} from '@progress/kendo-react-grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Details from './Details';
import Loader from './Loader/Loader';
import Error from './Error/Error';

const App = () => {
  const [loading,setLoading] = useState(true)
  const [error,setError]=useState(false)
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://api.npoint.io/2c71ded6354de7428006').then((res)=>{
      setData(Object.values(res.data));
      setLoading(false);
      setError(false)
    }).catch((err)=>{
      setError(true)
      setLoading(false)
    })
  },[])

  const expandChange = (event) => {
    console.log(event.dataItem)
    let newData = data.map((item) => {
      if (item.name === event.dataItem.name) {
        item.expanded = !event.dataItem.expanded;
      }

      return item;
    });
    setData(newData);
  };
  
  return (
    <div>
      {!loading ? (
        !error && Object.keys(data).length > 0 ? (
          <Grid
            data={data}
            detail={Details}
            expandField="expanded"
            onExpandChange={expandChange}
          >
            <GridColumn field="name" title="State" />
          </Grid>
        ) : (
          <Error message="Sorry, error while fetching states!"/>
        )
      ) : (
        <Loader title="AMERICAN STATES" />
      )}
    </div>
  );
};

export default App;