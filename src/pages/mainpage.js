import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import '../component/style.css'
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '../component/modal';
import Weatherapp from './weatherapp';
import BoxSx from '../component/box';
import data from '../component/assets/data.json'
import weather from '../component/weatherapp/img/weather.png'

const Mainpage = () => {



    function createData(column, column1, colum2) {
        return { column, column1, colum2 };
    }

    //Weather Box
    const weatherapp = (<Weatherapp />)
    const box =(<BoxSx title={data[0].title} description={data[0].Description} img={weather}/>)

    //

    const rows = [
        createData(<Modal data={weatherapp} value={box}/>, 6.0, 24),
        createData(237, 9.0, 37),
    ];


    return (
        <div className='Container'>
            <TableContainer component={Paper}>
                <TableBody sx={{ textAlign: 'center' }}>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell align="right">{row.column}</TableCell>
                            <TableCell align="right">{row.column1}</TableCell>
                            <TableCell align="right">{row.colum2}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </TableContainer>
        </div>
    );
}


export default Mainpage;