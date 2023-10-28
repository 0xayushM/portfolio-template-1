import React from 'react';
import quoteData from '../data/quoteData.json'; 

const Quote = () => {
    const { quote } = quoteData;

    return (
        <div className='quote text-xl pt-10'>
            <span className='quote_bar'>{quote.delimiter}</span>
            {quote.text}
            <span className='quote_bar'>{quote.delimiter}</span>
        </div>
    );
};

export default Quote;
