import React from 'react';
import loadersrc from '../../assets/loader.png';

const Loader = props => (
    <div>
        <img 
        style={{ width: 300, paddingTop: 40 }}
        alt="Loader icon"
        src={loadersrc} />
    </div>
);

export default Loader;