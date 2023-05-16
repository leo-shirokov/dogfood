import { TextInput, PasswordInput, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

function AuthForm() {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Недопустимый email",
            password: (value) =>
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
                    value
                )
                    ? null
                    : "Недопустимый пароль",
        },
    });

    const [visible, { toggle }] = useDisclosure(false);

    return (
        <Box maw={300} mx="auto">
            <form
                className="flex flex-col gap-y-3"
                onSubmit={form.onSubmit((values) => console.log(values))}
            >
                <TextInput
                    withAsterisk
                    label="E-mail"
                    placeholder="ваш@email.com"
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    placeholder="Пароль"
                    label="Пароль"
                    visible={visible}
                    onVisibilityChange={toggle}
                    withAsterisk
                    {...form.getInputProps("password")}
                />

                <Group position="right" mt="md">
                    <button
                        type="submit"
                        className="text-md bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300"
                    >
                        Войти
                    </button>
                </Group>
            </form>
        </Box>
    );
}

export default AuthForm;
