import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // محاكاة التحقق من المستخدم المسجل
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // محاكاة عملية تسجيل الدخول
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const userData = {
            id: 1,
            name: 'مطارد العنزي',
            email: email,
            avatar: null
          }
          setUser(userData)
          localStorage.setItem('user', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('تعذّر تسجيل الدخول. يرجى التحقق من البيانات والمحاولة مرة أخرى.'))
        }
      }, 1000)
    })
  }

  const register = async (userData) => {
    // محاكاة عملية التسجيل
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password) {
          const newUser = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            avatar: null
          }
          setUser(newUser)
          localStorage.setItem('user', JSON.stringify(newUser))
          resolve(newUser)
        } else {
          reject(new Error('فشل إنشاء الحساب. يرجى المحاولة مرة أخرى.'))
        }
      }, 1000)
    })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const resetPassword = async (email) => {
    // محاكاة عملية استعادة كلمة المرور
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true })
      }, 1000)
    })
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
