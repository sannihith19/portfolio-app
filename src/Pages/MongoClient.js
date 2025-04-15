import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Container, makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


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

const MongoClient = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData([])
    setError(null)
  }, [])

  useEffect(() => {
    if (loading) {

      axios
        .get('http://localhost:3001/getGrades')
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });

    }
  }, [loading]);

  const fetchData = async () => {
    setData([])
    setError(null)
    setLoading(true);
  };

  const classes = styles();

  return (
    <Container className={classes.container}>
      <Typography variant="body"> !Note: We need to run server before trying to fetch mongoDB data </Typography>
      <Typography variant="h4"> MongoDB Data </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? 'Fetching Data...' : 'Fetch Data'}
      </Button>
      {loading && <CircularProgress />}

      {data && <>
        {data.map(res => {
          return <div>
            {`${res.level} - ${res.score}/${res.total}`}
          </div>
        })}
      </>}
      {error && <Typography color="error">Error: {error}</Typography>}
    </Container>
  );
}

export default MongoClient

