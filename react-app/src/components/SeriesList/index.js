import React from 'react';

const SeriesList = (props) => {
    return (
        <div>
            {props.list.map(series => (
                <li>{series.show.name}</li>
            ))}
        </div>
    )
}

export default SeriesList;