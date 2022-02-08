import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div className=''>
			<p className='f3'>
				{'Esse cérebro mágico detectará as faces nas suas fotos. É só tentar!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' text='tex' onChange = {onInputChange}/>
					<button 
					className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onButtonSubmit}>Detectar</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;