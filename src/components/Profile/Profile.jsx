import Back from "../Back/Back";
import { getUserInfo } from "../../api";
import { useEffect, useState, useContext } from "react";
import RegForm from "../RegForm/RegForm";
import { AuthContext } from "../../providers/AuthProvider";
import AuthForm from "../AuthForm/AuthForm";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Profile() {
    const groupId = "group-12";

    const { user, setUser } = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    const [opened, { open, close }] = useDisclosure(false);

    const loginUser = () => {
        open();
    };

    useEffect(() => {
        (async () => {
            try {
                const res = await getUserInfo(groupId);
                setUserData(res);
            } catch (error) {
                console.error(error.message);
            }
        })();
    }, []);

    return (
        <>
            <Back />
            <h2 className="text-xl font-semibold mb-10">Профиль</h2>
            {user ? (
                <>
                    <p className="text-lg font-semibold">{userData.name}</p>
                    <p className="text-xs text-gray-400 mb-4">
                        {userData.group}
                    </p>
                    <p className="text-md mb-2">{userData.about}</p>
                    <p>{userData.email}</p>
                    <button onClick={() => setUser(null)}>Выйти</button>
                </>
            ) : (
                <div className="inline-flex flex-col gap-y-5">
                    <button
                        onClick={loginUser}
                        className="text-md bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 transition-all"
                    >
                        Войти
                    </button>
                    <button
                        // onClick={open}
                        className="text-md bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 transition-all"
                    >
                        Регистрация
                    </button>
                </div>
            )}
            <Modal
                opened={opened}
                onClose={close}
                title="Вход для пользователей"
            >
                <AuthForm />
            </Modal>
        </>
    );
}

export default Profile;
