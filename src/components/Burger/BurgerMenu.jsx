import { useState } from "react";
import { Menu, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
// import { MenuDivider } from "@mantine/core/lib/Menu/MenuDivider/MenuDivider";
// import { MenuItem } from "@mantine/core/lib/Menu/MenuItem/MenuItem";

function BurgerMenu() {
    const [opened, setOpened] = useState(false);
    const toggle = () => setOpened((curr) => !curr);
    return (
        <Menu shadow="md" width={200} onChange={setOpened}>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} size={30} />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>
                    <Link to="/cart">Корзина</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Label>Меню</Menu.Label>
                <Menu.Item>
                    <Link to="/favorite">Избранное</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/promotions">Акции</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/news">Новости</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/reviews">Отзывы</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/payments">Оплата и доставка</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/faq">Часто спрашивают</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/feedback">Обратная связь</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/contacts">Контакты</Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Label>Управление</Menu.Label>
                <Menu.Item>
                    <Link to="/profile">Профиль</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/addproduct">Добавить товар</Link>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default BurgerMenu;
