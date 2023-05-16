'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
	const activeSegment = useSelectedLayoutSegment();

	const links = [
		{ label: 'Inicio', path: '/', targetSegment: null },
		{ label: 'Posiciones', path: '/positions', targetSegment: 'positions' },
		{ label: 'Cruces', path: '/cruces', targetSegment: 'cruces' },
		{ label: 'Institucionál', path: '/institucional', targetSegment: 'institucional' },
	];

	return (
		<Disclosure as='nav' className='bg-white shadow w-full'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex h-16 justify-between'>
							<div className='flex'>
								<div className='flex flex-shrink-0 items-center'>
									<b className='font-sans text-zinc-50 bg-indigo-500 py-1 px-2'>INICIATIVA NEWCOM</b>
								</div>
								<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
									{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
									{links.map((l, i) => (
										<Link
											key={i}
											href={l.path}
											className={`inline-flex items-center px-1 pt-1 text-sm font-bold text-gray-900 ${
												activeSegment === l.targetSegment ? 'border-b-2 border-indigo-500 text-indigo-700' : 'border-none text-black'
											}`}
										>
											{l.label}
										</Link>
									))}
								</div>
							</div>
							<div className='-mr-2 flex items-center sm:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 pb-3 pt-2'>
							{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
							{links.map((l, i) => (
								<Disclosure.Button
									as='a'
									key={i}
									href={l.path}
									className={`block py-2 pl-3 pr-4 text-base font-bold ${
										activeSegment === l.targetSegment ? 'border-l-4 border-indigo-500 text-indigo-700' : 'border-none text-black'
									}`}
								>
									{l.label}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
