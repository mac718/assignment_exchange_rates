import React from 'react';

const LatestExchangeRates = ({rates}) => {
  var ratesArr = [];
  for(var rate in rates) {
    ratesArr.push(<li className='list-group-item'>{rate}: {rates[rate]}</li>)
  }
  return(
    <div className='col-sm-4'>
      <h2>Latest Exchange Rates (Euro)</h2>
      <ol className='list-group'>
        {ratesArr}
      </ol>
    </div>
  )
}

export default LatestExchangeRates;