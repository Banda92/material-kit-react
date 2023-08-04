import React from 'react';
// import ReactSpeedometer from 'react-d3-speedometer';
import dynamic from 'next/dynamic';


const gaugeData = {
    TotalWard: [843, 912],
    NormalWard: [602, 636],
    NursingCare: [112, 120],
  };


  const ReactSpeedometer = dynamic(import ("react-d3-speedometer"), { ssr: false })


const GaugeD3 = (props) => {
  return (
    <div className='GaugeD3'>
      <ReactSpeedometer
        minValue={0}
        maxValue={100}
        value={props.value}
        needleColor="black"
        startColor="red"
        segments={10}
        endColor="green"
        currentValueText=""
        paddingVertical={0}
        width= {160}
        height={100}
        valueTextFontSize={18}

      />
    </div>
  );
};

export default GaugeD3;
