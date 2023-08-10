import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ReactDataTable = (props) => {
  const sampleData = props.sampleData;
  const columnKeys = Object.keys(sampleData[0]);
  


  return (
    // <div className='cardLayer' style={{ height: '400px', width: '45vw', padding: '1%', backgroundColor: 'white' }}>
      <div style={{ height: '350px',  overflow: 'hidden', fontSize: '1px' }}>
        <TableContainer component={Paper}>
          <div style={{ overflowY: 'scroll', height: '350px' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  {columnKeys.map((key, index) => (
                    <TableCell key={index} align="center" style={{ fontSize: '3px', padding: '0px', position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((row, rowIndex) => (
                  <TableRow key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? '#f0f0f0' : '' }}>
                    {columnKeys.map((key, cellIndex) => (
                      <TableCell key={cellIndex} align="center" style={{ fontSize: '3px', padding: '0px',  }}>
                        {row[key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      </div>
    // </div>
  );
};

export default ReactDataTable;
