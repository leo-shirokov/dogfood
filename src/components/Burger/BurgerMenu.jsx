import { Badge, Burger, Menu } from '@mantine/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'

function BurgerMenu() {
	const { cartItems, totalItems } = useCart()
	const [opened, setOpened] = useState(false)
	const toggle = () => setOpened((curr) => !curr)
	return (
		<Menu shadow='md' width={200} onChange={setOpened}>
			<Menu.Target>
				<Burger opened={opened} onClick={toggle} size={30} />
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>Личный кабинет</Menu.Label>
				<Menu.Item>
					<Link to='/profile'>Профиль</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/cart'>
						Корзина{' '}
						{cartItems.length > 0 ? (
							<Badge
								color='yellow'
								size='xs'
								variant='filled'
								className=''
							>
								{totalItems}
							</Badge>
						) : (
							<></>
						)}
					</Link>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Label>Меню</Menu.Label>
				<Menu.Item>
					<Link to='/favorite'>Избранное</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/promotions'>Акции</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/news'>Новости</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/payments'>Оплата и доставка</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/faq'>Часто спрашивают</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to='/contacts'>Контакты</Link>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}

export default BurgerMenu
