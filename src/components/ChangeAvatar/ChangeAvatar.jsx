import { Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'

function ChangeAvatar() {
	const { user } = useUser()
	const { changeAvatar } = useActions()
	const [opened, { close }] = useDisclosure(true)
	const navigate = useNavigate()

	// Инициализируем значение формы изменения аватара
	const form = useForm({
		initialValues: {
			avatar: '',
		},
	})

	const handleSubmit = async (values) => {
		await changeAvatar({ groupId: user.data.group, link: values })
		close()
		navigate('/profile')
	}

	return (
		<Modal
			opened={opened}
			onClose={close}
			title='Изменение аватара'
			centered
		>
			<form
				className='flex flex-col gap-y-3'
				onSubmit={form.onSubmit((values) => handleSubmit(values))}
			>
				<TextInput
					withAsterisk
					label='Ссылка на изображение'
					placeholder='Введите адрес ссылки'
					{...form.getInputProps('avatar')}
				/>
				<Group position='right' mt='md'>
					<button
						type='submit'
						className='text-md rounded-md bg-gray-200 px-3 py-2 hover:bg-gray-300'
					>
						Изменить
					</button>
				</Group>
			</form>
		</Modal>
	)
}

export default ChangeAvatar
