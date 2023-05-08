import Back from "../Back/Back";
import { Accordion } from "@mantine/core";

function Faq() {
    return (
        <>
            <Back />
            <h2 className="text-xl font-bold mb-10">Часто спрашивают</h2>
            <Accordion
                variant="separated"
                chevronPosition="left"
                defaultValue="one"
            >
                <Accordion.Item value="one">
                    <Accordion.Control>
                        Как выбрать правильный корм для моей собаки?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Рекомендуется обратиться к ветеринару, чтобы определить
                        оптимальный тип корма и его количество для вашей собаки.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="two">
                    <Accordion.Control>
                        Как часто мне нужно кормить мою собаку?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Обычно собаки кормятся 1-2 раза в день, но это может
                        зависеть от возраста, размера и активности вашей собаки.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="three">
                    <Accordion.Control>
                        Как долго могу хранить собачий корм?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Собачий корм можно хранить от 6 до 12 месяцев в
                        зависимости от производителя и условий хранения.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="four">
                    <Accordion.Control>
                        Могу ли я переключать корм для моей собаки?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Да, можно, но это нужно делать постепенно, чтобы
                        избежать возможных проблем со здоровьем вашей собаки.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="five">
                    <Accordion.Control>
                        Могу ли я вернуть корм, если моя собака не съела его?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Это зависит от политики возврата продавца. Многие
                        компании предлагают гарантии возврата денег, если корм
                        не подходит вашей собаке.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="six">
                    <Accordion.Control>
                        Какой корм лучше - сухой или влажный?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Это зависит от ваших личных предпочтений и потребностей
                        вашей собаки. Оба типа корма могут быть полезны для
                        вашей собаки.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="seven">
                    <Accordion.Control>
                        Могут ли собаки быть аллергичны на определенные
                        ингредиенты в корме?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Да, некоторые собаки могут иметь аллергию на
                        определенные ингредиенты в корме. В этом случае
                        необходимо обратиться к ветеринару.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="eight">
                    <Accordion.Control>
                        Какое количество корма мне нужно давать моей собаке?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Рекомендуется обратиться к ветеринару, чтобы определить
                        оптимальное количество корма для вашей собаки на основе
                        ее размера, возраста и активности.
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="nine">
                    <Accordion.Control>
                        Могу ли я кормить свою собаку домашней пищей?
                    </Accordion.Control>
                    <Accordion.Panel>
                        Да, некоторые хозяева предпочитают кормить своих собак
                        домашней пищей, но необходимо убедиться, что пища
                        содержит все необходимые питательные вещества.
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Faq;
