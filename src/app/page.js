import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col flex-wrap'>
			<div className='description flex flex-col justify-center w-full max-w-screen-lg mx-auto py-5 text-black text-center text-lg'>
				<h2 className='py-5 text-6xl'>Torneo de Newcom</h2>
				<p className='break-words'>
					Nuevo torneo de newcom, actualmente con 12 equipos en competición. Varias zonas en disputa, nueva tabla de{' '}
					<span>
						<Link href='/positions' className='text-indigo-500 font-bold'>
							posiciones.
						</Link>
					</span>
					&nbsp; Ademas tenemos todos los cruces marcados, premios y mas...
				</p>
			</div>
		</div>
	);
}
