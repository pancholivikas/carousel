import React from 'react';

export const PillsContainer = ({ pills }) => {
    return (
        <div className={'pills-container'}>
            {pills.map(pill => {
                return (
                    <span className={'pill'} key={pill}>
                        {pill}
                    </span>
                )
            })}
        </div>
    )
}