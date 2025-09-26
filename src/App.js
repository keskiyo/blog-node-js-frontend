import Container from '@mui/material/Container'
import { Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from './components'
import { Home, FullPost, Registration, AddPost, Login } from './pages'
import { fetchAuthMe } from './redux/slices/auth'
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth'

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)

	React.useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<>
			<Header />
			<Container maxWidth='lg'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:id' element={<FullPost />} />
					<Route path='/add-post' element={<AddPost />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Registration />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
