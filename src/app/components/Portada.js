'use client';
import React from 'react';
import Image from 'next/image';
import myCss from './portada.module.css';
import { Parallax } from 'react-parallax';

const Portada = () => {
	return (
		<Parallax bgImage='/portada.webp' strength={400} style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
			<div style={{ height: '400px' }}>
				<h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center'>
					Mi texto de título
				</h1>
			</div>
		</Parallax>
	);
};

export default Portada;
