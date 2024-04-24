import React, {useState, useCallback} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import './Result.css'
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion'


function Result() {
  const [successMessage, setSuccessMessage] = useState('');
  const [failMessage, setFailMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const { status } = useParams();
 
  return (
    <div>
    <Header/>
    <section className='r-wrapper'>
      <div className='innerWidth r-container'>
        <div className="r-head flexColCenter">
          <span className='primaryText paddings'>Result</span>
        </div>
        <div className='success flexColCenter'>{successMessage && <p>{successMessage}</p>}</div>
        <div className='fail flexColCenter'>{failMessage && <p>{failMessage}</p>}</div>
        <div className='flexColCenter'>
       
          <Box width="50%">
            <Card variant='outlined' sx={{ minWidth: 275 }}>
              <CardContent>
              <div>
                {status === '200' ? (
                  <div>
                     <p>Taken</p>
                      <img src="./red.jpg" alt=""/>
                  </div>
                ) : (
                  <div>
                    <p>Feel free to explore</p>
                      <img src="./green.jpg" alt=""/>
                  </div>
                )}
                </div>
            </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </section>
 
    </div>
  )
}

export default Result;