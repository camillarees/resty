import React from 'react';

function History(props) {
    return (
        <section>
            <h2>History:</h2>
            {(props.history.map((requestHistory, index) =>
            <div key={index}>
                <p>{requestHistory.method}</p>
                <p>{requestHistory.url}</p>
            </div>
            ))}
        </section>
    )
}

export default History;