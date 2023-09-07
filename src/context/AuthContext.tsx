// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/navigation'

// ** Axios
import { axios } from '@/api'

// ** Types
import { AuthValuesType, LoginParams, UserDataType } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem('token')
      const storedUser = window.localStorage.getItem('userData')

      if (storedToken && storedUser) {
        setUser(JSON.parse(storedUser))
        setLoading(false)
      } else {
        localStorage.clear()
        setUser(null)
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params: LoginParams): Promise<any> =>
    axios
      .post('/', {
        query: `mutation LoginPatient {
          loginPatient(
            email: "${params.email}",
            password: "${params.password}",
            device_name: "web"
            )
      }`
      })
      .then(async loginResponse => {
        const token = loginResponse.data.data.loginPatient.replace(' Token: ', '')
        window.localStorage.setItem('token', token)

        await axios
          .post('/', {
            query: `query MeP {
              meP {
                  id
                  name
                  email
              }
          }`
          })
          .then(async getDataResponse => {
            setUser({ ...getDataResponse.data.data.meP })
            window.localStorage.setItem('userData', JSON.stringify(getDataResponse.data.data.meP))
          })

        setLoading(false)
        router.replace('/')
      })

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem('token')
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
