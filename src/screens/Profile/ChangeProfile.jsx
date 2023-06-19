import { Group, Modal, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import useActions from '../../hooks/useActions'
import useUser from '../../hooks/useUser'

function ChangeProfile() {
	const { changeUserInfo } = useActions()
	const [opened, { close }] = useDisclosure(true)
	const { user } = useUser()
	const navigate = useNavigate()

	const form = useForm({
		initialValues: {
			name: '',
			about: '',
		},
	})

	const handleSubmit = async (values) => {
		changeUserInfo({
			groupId: user.data.group,
			info: values,
		})
		close()
		navigate('/profile')
	}

	return (
		<Modal
			opened={opened}
			onClose={close}
			title='Редактирование профиля'
			centered
		>
			<form
				className='flex flex-col gap-y-3'
				onSubmit={form.onSubmit((values) => handleSubmit(values))}
			>
				<TextInput
					withAsterisk
					label='Имя'
					placeholder='Введите текст'
					{...form.getInputProps('name')}
				/>
				<TextInput
					withAsterisk
					label='Обо мне'
					placeholder='Введите текст'
					{...form.getInputProps('about')}
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

export default ChangeProfile
