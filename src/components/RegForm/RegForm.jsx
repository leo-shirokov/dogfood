import { TextInput, PasswordInput, Stack, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

function RegForm() {
    const form = useForm({
        initialValues: {
            email: "",
            group: "",
            password: "",
            confirmPassword: "",
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
            confirmPassword: (value, values) =>
                value !== values.password ? "Пароли не совпадают" : null,
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
                <TextInput
                    withAsterisk
                    label="Группа"
                    placeholder="group-"
                    {...form.getInputProps("group")}
                />
                <Stack maw={380} mx="auto">
                    <PasswordInput
                        placeholder="Пароль"
                        label="Пароль"
                        description="Пароль длиной от 6 символов, содержащий буквы в верхнем и нижнем регистре, цифру и специальный знак"
                        visible={visible}
                        onVisibilityChange={toggle}
                        withAsterisk
                        {...form.getInputProps("password")}
                    />
                    <PasswordInput
                        placeholder="Пароль"
                        label="Повторить пароль"
                        visible={visible}
                        onVisibilityChange={toggle}
                        withAsterisk
                        {...form.getInputProps("confirmPassword")}
                    />
                </Stack>

                <Group position="right" mt="md">
                    <button
                        type="submit"
                        className="text-md bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300"
                    >
                        Отправить
                    </button>
                </Group>
            </form>
        </Box>
    );
}

export default RegForm;
