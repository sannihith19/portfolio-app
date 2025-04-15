import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { DataGrid } from '@mui/x-data-grid';

const styles = makeStyles(theme => ({
  button: {
    margin: "10px !important"
  },
  container: {
    textAlign: "center"
  },
  table: {
    height: '100%',
    width: '100%',
  }
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'version', headerName: 'Version', width: 100 },
  { field: 'language', headerName: 'Language', width: 150 },
  { field: 'bio', headerName: 'Bio', width: 600 },
];


const Async = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        axios
          .get('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      }, 3000);
    }
  }, [loading]);

  const fetchData = async () => {
    setLoading(true);
  };

  const clearData = () => {
    setData(null);
  };

  const classes = styles();

  return (
    <Container className={classes.container}>
      <h2>JavaScript: Asynchronous Implementation</h2>
      <p>This section demonstrates asynchronous operations behave.</p>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? 'Fetching Data...' : 'Fetch Data'}
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={clearData}
      >clearData
      </Button>
      {loading && <CircularProgress />}
      {data && (
        <div className={classes.table}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

      )}
      {error && <Typography color="error">Error: {error}</Typography>}
    </Container>
  );
}

export default Async

