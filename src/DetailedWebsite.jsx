import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import websites from './data/websites.json';

function LargeWebsiteCard() {
	const { id } = useParams();
	const timerRef = useRef(null);
	const timeoutRef = useRef(null);
	const websiteId = id;
	const navigate = useNavigate();
    const location = useLocation();
	const [currentIndex, setCurrentIndex] = useState(0);

	const website = websites.find((website) => website.id === websiteId);

	useEffect(() => {
		if (!website || !website.image || website.image.length <= 1) return;

		// Preload images
		website.image.forEach((src) => {
			const img = new Image();
			img.src = src;
		});

		const startTimer = () => {
			clearTimeout(timeoutRef.current);
			clearInterval(timerRef.current);

			timeoutRef.current = setTimeout(() => {
				timerRef.current = setInterval(() => {
					setCurrentIndex(
						(prevIndex) => (prevIndex + 1) % website.image.length,
					);
				}, 5000);
			}, 100);
		};

		startTimer();

		return () => {
			clearTimeout(timeoutRef.current);
			clearInterval(timerRef.current);
		};
	}, [website]);

	if (!websites || websites.length === 0) {
	    return <div>Loading...</div>;
	}

	function ClickLeftArrow() {
		let nextIndex =
			(currentIndex - 1 + website.image.length) % website.image.length;

		setCurrentIndex(nextIndex);
		console.log(`Current Index: ${currentIndex}, Next Index: ${nextIndex}`);
		resetTimer();
	}
	function ClickRightArrow() {
		let nextIndex = (currentIndex + 1) % website.image.length;
		setCurrentIndex(nextIndex);
		console.log(`Current Index: ${currentIndex}, Next Index: ${nextIndex}`);
		resetTimer();
	}

	function SkipImage(index) {
		setCurrentIndex(index);
		resetTimer();
	}

	function resetTimer() {
		clearTimeout(timeoutRef.current);
		clearInterval(timerRef.current);

		timerRef.current = setInterval(() => {
			const slideshowEl = document.querySelector('.slideshow');

			let currentIndex = website.image.indexOf(
				slideshowEl.style.backgroundImage.slice(5, -2),
			);

			currentIndex = (currentIndex + 1) % website.image.length;

			slideshowEl.style.backgroundImage = `url(${website.image[currentIndex]})`;
		}, 5000);
	}
	return (
		<>
			<div className="large-project-card">
				<div className="project-buttons">
					<button className=" primary-btn btn" onClick={() => {
                const prev = document.referrer;
                const sameSite = prev && prev.startsWith(window.location.origin);
                if (window.history.length > 1 && sameSite) {
                    navigate(-1)
            } else {
                navigate('/')
            }}}>Back</button>
					{Object.entries(website.links).map(([key, value]) => (
						<a
							key={website.id}
							href={value.url}
							title={value.tooltip}
							target="_blank"
						>
							<button className="primary-btn btn">
								{key === 'live' ? 'Live' : 'Repo'}
							</button>
						</a>
					))}
				</div>

				<div className="project-content">
					{website.image.length > 1 ? (
						<>
							<div
								className="slideshow site-slide"
								style={{
									backgroundImage: `url(${website.image[currentIndex]})`,
								}}
							></div>

							<div className="image-gallery-arrows">
								<i className="fa-solid fa-angle-left" onClick={ClickLeftArrow}>
									{' '}
								</i>
								<div className="thumbnails">
									{website.image.map((src, index) => (
										<img
											key={src}
											src={src}
											alt={`Image ${index + 1} of ${website.image.length} ${src}`}
											className={
												index === currentIndex ? 'active nail' : 'nail'
											}
											onClick={() => SkipImage(index)}
										/>
									))}
								</div>

								<div className="dot">
									{website.image.map((src, index) => (
										<span
											key={src}
											src={src}
											alt={`Image ${index + 1} of ${website.image.length} ${src}`}
											className={
												index === currentIndex ? 'active nail' : 'nail'
											}
											onClick={() => SkipImage(index)}
										>
											{' '}
											.
										</span>
									))}
								</div>
								<i
									className="fa-solid fa-angle-right"
									onClick={ClickRightArrow}
								></i>
							</div>
						</>
					) : (
						<img src={website.image} alt={website.title} />
					)}

					<div className="card-content">
						<h3>{website.title}</h3>
						{website.description.map((d) => (
							<p key={d}>{d}</p>
						))}
					</div>
					<div className="next-prev-project">
						{websites.find((p) => p.id === websiteId + 1) && (
							<button
								className="primary-btn btn"
								onClick={() => navigate(`/websites/${websiteId + 1}`)}
							>
								Next Website
							</button>
						)}
					</div>
					{websites.find((p) => p.id === websiteId - 1) && (
						<button
							className="primary-btn btn"
							onClick={() => navigate(`/websites/${websiteId - 1}`)}
						>
							Previous Website
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default LargeWebsiteCard;
