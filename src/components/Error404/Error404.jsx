import React from "react";

function Error404() {
    return (
        <section className="flex items-center h-full mb-20 p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">
                        Извините, такой страницы не существует
                    </p>
                    <p className="mt-4 mb-8 dark:text-gray-400">
                        Но вы можете найти много других вещей на нашей домашней
                        странице
                    </p>
                    <a
                        rel="noopener noreferrer"
                        href="/"
                        className="px-8 py-3 font-semibold rounded dark:bg-yellow-400 dark:text-gray-900"
                    >
                        На главную
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Error404;
