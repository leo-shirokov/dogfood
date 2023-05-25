import { BiChevronRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function HeaderSecondLevel() {
	const navigate = useNavigate()
	return (
		<div className='h-[30rem] w-full bg-yellow-300'>
			<div className='mx-auto flex w-4/6 flex-col py-16 md:w-11/12'>
				<h1 className='mb-5 shrink text-4xl font-extrabold'>
					Крафтовые <br /> лакомства для <br /> собак
				</h1>
				<p className='mb-10 shrink font-extralight'>
					Всегда свежие лакомства ручной <br /> работы с доставкой по
					России и Миру
				</p>
				<button
					onClick={() => navigate('/catalog')}
					className='w-32 shrink rounded-[3.75rem] border-transparent bg-white px-2 py-3 font-bold shadow-md ring-blue-600 transition-all hover:bg-yellow-50 hover:ring-2'
				>
					<span className='text-md flex items-center justify-center'>
						Каталог
						<BiChevronRight className='text-xl' />
					</span>
				</button>
			</div>
		</div>
	)
}

export default HeaderSecondLevel
