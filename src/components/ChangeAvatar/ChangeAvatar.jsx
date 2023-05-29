import { Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeAvatar } from '../../api-user'
import { AuthContext } from '../../providers/AuthProvider'

function ChangeAvatar() {
	const { user, setUser } = useContext(AuthContext)
	const [opened, { close }] = useDisclosure(true)
	const navigate = useNavigate()

	// Инициализируем значение формы изменения аватара
	const form = useForm({
		initialValues: {
			avatar: '',
		},
	})

	const handleSubmit = async (values) => {
		const userInfo = await changeAvatar(user.token, user.data.group, values)
		setUser((prev) => ({ ...prev, data: userInfo }))
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
