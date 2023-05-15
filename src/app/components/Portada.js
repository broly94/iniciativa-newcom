'use client';
import Image from 'next/image';
import myCss from './portada.module.css';

const Portada = () => {
	return (
		<div className='w-full h-auto relative'>
			<img src='/portada3.jpg' className={myCss.image} />
			<h1 className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-100 text-4xl font-sans text-center font-bold uppercase'>
				<span className='md:bg-purple-500 py-1 px-2 text-center'>Iniciativa Newcom</span>
			</h1>
		</div>
	);
};

export default Portada;
