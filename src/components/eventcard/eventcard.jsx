import React from "react";
import "./eventcard.scss";
/**
 * props:
 *  - title, date, desc, image (optional)
 */
export default function EventCard({ title, date, desc }) {
	return (
		<article
			className='event-card'
			role='article'
			aria-label={`${title} event`}>
			{/* Optionally you can place a background image here */}
			<div style={{ zIndex: 2 }}>
				<div className='meta'>{date}</div>
				<h3>{title}</h3>
				<p>{desc}</p>
			</div>
		</article>
	);
}
