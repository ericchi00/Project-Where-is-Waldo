import React, { useEffect } from 'react';

const Level = ({ img }) => {
	const clickHandler = (e) => {
		const x = e.nativeEvent.offsetX;
		const y = e.nativeEvent.offsetY;

	};
	return (
        <div className="waldo-img-wrapper">
            <div className='find-waldo-list'></div>
			<img src={img} alt="Where's Waldo" onClick={clickHandler} />
		</div>
	);
};

export default Level;
