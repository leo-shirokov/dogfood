import Back from '../../components/Back/Back'
import food1 from './img/img-1.png'
import food2 from './img/img-2.png'
import food3 from './img/img-3.png'
import food4 from './img/img-4.png'
import food5 from './img/img-5.png'
import food6 from './img/img-6.png'
import food7 from './img/img-7.png'

function News() {
	return (
		<>
			<Back />
			<h2 className='mb-10 text-xl font-semibold'>Новости</h2>
			<div className='flex flex-col gap-y-10'>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food1}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Новый бренд добавлен в наш ассортимент!
						</h2>
						<p className='text-md'>
							Мы рады представить новый бренд собачьего корма -
							"Happy Dog". Этот немецкий бренд известен своей
							высококачественной продукцией, которая состоит из
							натуральных ингредиентов и содержит все необходимые
							питательные вещества для здоровья вашего питомца. Не
							упустите возможность попробовать этот прекрасный
							корм для вашей собаки!
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food2}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Обновление цен на популярные бренды кормов!
						</h2>
						<p className='text-md'>
							Мы постоянно следим за ценами на собачий корм и
							стараемся предоставлять нашим клиентам лучшие цены
							на самые популярные бренды. Теперь вы можете
							приобрести корм "Royal Canin" и "Acana" по еще более
							выгодной цене!
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food3}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Новости из мира науки: как правильно выбрать корм
							для собаки.
						</h2>
						<p className='text-md'>
							Каждый хозяин заботится о здоровье своего питомца, и
							выбор правильного корма является важным аспектом
							заботы о нем. Наши специалисты подготовили статью,
							которая поможет вам сделать правильный выбор
							собачьего корма. Мы подробно расскажем о видах
							кормов, их составе и питательной ценности, а также
							дадим советы по выбору корма в зависимости от
							возраста и размера вашей собаки.
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food4}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Конкурс для наших клиентов!
						</h2>
						<p className='text-md'>
							Мы любим своих клиентов и поэтому проводим для вас
							конкурс! Каждый месяц мы выбираем победителя,
							который получает бесплатный пакет собачьего корма на
							выбор. Чтобы принять участие в конкурсе, достаточно
							сделать заказ на нашем сайте и оставить отзыв о
							продукте, который вы купили. Удачи!
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food5}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Новая серия кормов для собак с чувствительным
							пищеварением
						</h2>
						<p className='text-md'>
							Мы рады представить новую серию собачьего корма от
							бренда "Hill's Science Diet", которая разработана
							специально для собак с чувствительным пищеварением.
							Эта линейка кормов содержит легкоусвояемые
							ингредиенты, которые не нагружают желудок собаки, а
							также специальные добавки, которые улучшают работу
							пищеварительной системы. Попробуйте новый корм и
							помогите вашей собаке чувствовать себя еще лучше!
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food6}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Летняя акция: скидки на корм для собак
						</h2>
						<p className='text-md'>
							Лето - это отличное время для активных прогулок и
							игр с собакой, и мы хотим помочь вам сделать этот
							период еще более приятным! Мы запускаем летнюю акцию
							на корм для собак - скидки до 30% на популярные
							бренды. Теперь вы можете купить корм для вашей
							собаки по выгодной цене и наслаждаться активным
							летом вместе с ней!
						</p>
					</div>
				</div>
				<div className='flex flex-col justify-start gap-y-4'>
					<div className='w-20'>
						<img
							className='object-contain'
							src={food7}
							alt='собачий корм'
						></img>
					</div>
					<div>
						<h2 className='mb-5 text-lg font-semibold'>
							Как ухаживать за зубами вашей собаки
						</h2>
						<p className='text-md'>
							Здоровье зубов и десен - это важный аспект здоровья
							собаки. Мы подготовили статью, которая поможет вам
							правильно ухаживать за зубами вашей собаки. Мы
							расскажем о том, как часто нужно чистить зубы
							собаки, какой зубной пастой пользоваться и какие
							продукты помогают улучшить здоровье зубов. Следуйте
							нашим советам и помогите своей собаке сохранить
							крепкие зубы и здоровые десны на долгие годы!
						</p>
					</div>
				</div>
				<hr />
				<p>
					Благодарим вас за внимание к нашим новостям. Мы будем рады
					продолжать делиться с вами информацией о самых интересных
					событиях в мире собачьего корма. Оставайтесь с нами и
					следите за обновлениями на нашем сайте!
				</p>
			</div>
		</>
	)
}

export default News
