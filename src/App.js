import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const myStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const App = () =>  {
  // state = {
  //   topNews: [],
  //   isLoading: true
  // };

  const [topNews, setTopNews] = useState([]);
   useEffect(() => {
    fetch('http://hackernews.gokhanarkan.com/api/top')
    .then(data => data.json())
    .then(news => {
      setTopNews(news);
    })
    .catch(err => console.log(err));
  }, []) 

    const classes = myStyles();
    // const { isLoading } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h1>HACKERNEWS STORIES</h1> 
          <p>This site was created by using <a rel="noopener noreferrer" href="http://hackernews.gokhanarkan.com/api" target="_blank" style={{color: "white"}}>this api endpoint</a></p>
        </div>
        <div>
          <h2 style={{borderBottom:'1px solid black'}}>Best Stories on Hackernews</h2>
        </div>
        
        {/* <h2>{isLoading ? 'Hacking best stories, please wait.' : ''}</h2> */}
        
             {/* !isLoading ? 
             this.state.topNews.map((news,idx) => 
              <div key={news._id} className="card">
                <h2 style={{color: '#ff6565'}}>{idx + 1}</h2>
                <h3>{news.title}</h3>
                <a rel="noopener noreferrer" href={news.url} target="_blank" style={{textDecoration:'border-bottom', color:"black"}}>Read more</a>
                <p><strong>Score: {news.score}</strong></p>
             </div>
          
            ) : null  */}
           
           { 

            // Showing data with tables using material-ui
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Best Stories">
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topNews.map((news, idx) => (
                <TableRow key={news._id}>
                  <TableCell >{idx + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {news.title}
                  </TableCell>
                  <TableCell>{news.score}</TableCell>
                  <TableCell><a rel="noopener noreferrer" target="_blank" href={news.url}>Read More</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
          <div className="App-footer">  
          <p>Created by Atakan Zengin with React</p>
          </div>
      </div>
    );
  
}

export default App;
