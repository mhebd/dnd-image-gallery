import './Gallery.css';
import { useState } from 'react';
import { ReactSortable } from "react-sortablejs";

function Gallery() {
	const [data, setData] = useState([
		{ id: 1, img: 'image-11.jpeg' },
		{ id: 2, img: 'image-7.webp' },
		{ id: 3, img: 'image-3.webp' },
		{ id: 4, img: 'image-10.jpeg' },
		{ id: 5, img: 'image-5.webp' },
		{ id: 6, img: 'image-9.webp' },
		{ id: 7, img: 'image-2.webp' },
		{ id: 8, img: 'image-4.webp' },
		{ id: 9, img: 'image-6.webp' },
		{ id: 10, img: 'image-8.webp' },
		{ id: 11, img: 'image-1.webp' },
	]);

	const [selectedImgs, setSelectedImgs] = useState([]);

	const handleSelectImages = (e, id) => {
		if (e.target.checked) {
			setSelectedImgs([...selectedImgs, id]);
		} else {
			setSelectedImgs([...selectedImgs.filter(item => item != id)]);
		}
	}

	const handleDelete = (e) => {
		e.preventDefault();
		setData([...data.filter(item => !selectedImgs.includes(item.id))]);
		setSelectedImgs([]);
	}

	// console.log(data)

	return (
		<div className='gallery-wrapper'>
			<div className='gallery-header'>
				{selectedImgs.length > 0 ? (<div className='select-counter'>
					<input type='checkbox' defaultChecked /> <span>{selectedImgs.length} Files Selected</span>
				</div>) : <h4 className='title'>Gallery</h4>}

				{selectedImgs.length > 0 && <a href='/' type='button' className='delete-btn' onClick={(e) => handleDelete(e)}>
					Delete files
				</a>}
			</div>
			<div className='gallery-content'>
				<ReactSortable list={data} setList={setData} className='img-container' animation={300}>
					{data.map(item => (
						<div className='img-item' key={item.id}>
							<img src={`./images/${item.img}`} alt='' />
							<input
								type='checkbox'
								className='img-selector'
								name=''
								onChange={(e) => handleSelectImages(e, item.id)}
							/>
							<div className={`overlay ${selectedImgs.includes(item.id) ? 'selected' : ''}`}></div>
						</div>
					))}
					<div className='drop-img-btn' onDragStart={(e) => e.preventDefault()}>
						<p>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
								<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
								<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
							</svg>
						</p>
						<p>Add Image</p>
					</div>
				</ReactSortable>
			</div>
		</div>
	);
}

export default Gallery;
