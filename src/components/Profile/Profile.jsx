import Back from "../Back/Back";
import { getUserInfo } from "../../api";
import { useEffect, useState } from "react";

function Profile() {
    const groupId = "group-12";

    const [userData, setUserData] = useState({});

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
            {userData && (
                <>
                    <p className="text-lg font-semibold">{userData.name}</p>
                    <p className="text-xs text-gray-400 mb-4">
                        {userData.group}
                    </p>
                    <p className="text-md mb-2">{userData.about}</p>
                    <p>{userData.email}</p>
                </>
            )}
        </>
    );
}

export default Profile;
