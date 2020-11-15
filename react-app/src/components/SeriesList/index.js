import React from 'react';

const SeriesList = (props) => {
    return (
        <div>
            {props.list.map(series => (
                <div>
                <li>{series.show.name}</li>
                </div>
            ))}
        </div>
    )
}

export default SeriesList;