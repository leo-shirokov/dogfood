import { BiChevronRight } from "react-icons/bi";

function HeaderIndex() {
    return (
        <div className="w-full h-[30rem] bg-yellow-300">
            <div className="w-4/6 mx-auto flex flex-col py-16 md:w-11/12">
                <h1 className="text-4xl font-extrabold mb-5 shrink">
                    Крафтовые <br /> лакомства для <br /> собак
                </h1>
                <p className="font-extralight mb-10 shrink">
                    Всегда свежие лакомства ручной <br /> работы с доставкой по
                    России и Миру
                </p>
                <button className="w-32 shrink rounded-[3.75rem] bg-white px-2 py-3 shadow-md border-transparent font-bold hover:bg-yellow-50 hover:ring-2 ring-blue-600 transition-all">
                    <span className="flex justify-center items-center text-md">
                        Каталог
                        <BiChevronRight className="text-xl" />
                    </span>
                </button>
            </div>
        </div>
    );
}

export default HeaderIndex;
