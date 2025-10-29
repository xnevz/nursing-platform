import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, User, Phone, GraduationCap, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Logo from '../../components/Logo'
import { Moon, Sun } from 'lucide-react'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    graduationYear: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  
  const { register } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++
    return strength
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة')
      return
    }

    if (passwordStrength < 3) {
      setError('كلمة المرور ضعيفة. يجب أن تحتوي على 8 أحرف على الأقل وتتضمن أحرف كبيرة وصغيرة وأرقام')
      return
    }

    if (!agreedToTerms) {
      setError('يجب الموافقة على الشروط والأحكام')
      return
    }

    setLoading(true)

    try {
      await register(formData)
      setSuccess(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500'
    if (passwordStrength === 3) return 'bg-yellow-500'
    if (passwordStrength === 4) return 'bg-green-500'
    return 'bg-green-600'
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'ضعيفة'
    if (passwordStrength === 3) return 'متوسطة'
    if (passwordStrength === 4) return 'قوية'
    return 'قوية جداً'
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 py-12">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-soft hover:shadow-soft-lg transition-all z-10"
        aria-label="تبديل الوضع الليلي"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-gray-300" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            إنشاء حساب جديد
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            انضم إلى منصة تمريض بلس وابدأ رحلتك التعليمية
          </p>
        </div>

        {/* Register Card */}
        <div className="card">
          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-600 dark:text-green-400">
                تم إنشاء حسابك بنجاح. يرجى التحقق من بريدك الإلكتروني لإتمام التفعيل.
              </p>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                الاسم الكامل *
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pr-10"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
            </div>

            {/* Email and Phone - Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  البريد الإلكتروني *
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field pr-10"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  رقم الجوال *
                </label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field pr-10"
                    placeholder="05xxxxxxxx"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Specialty and Graduation Year - Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Specialty Field */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  التخصص / الجامعة
                </label>
                <div className="relative">
                  <GraduationCap className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="specialty"
                    name="specialty"
                    type="text"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="input-field pr-10"
                    placeholder="مثال: تمريض - جامعة الملك سعود"
                  />
                </div>
              </div>

              {/* Graduation Year Field */}
              <div>
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  سنة التخرج
                </label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="input-field pr-10 appearance-none"
                  >
                    <option value="">اختر السنة</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                كلمة المرور *
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pr-10 pl-10"
                  placeholder="أدخل كلمة المرور"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          level <= passwordStrength ? getPasswordStrengthColor() : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    قوة كلمة المرور: <span className="font-medium">{getPasswordStrengthText()}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                تأكيد كلمة المرور *
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field pr-10 pl-10"
                  placeholder="أعد إدخال كلمة المرور"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                أوافق على{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  الشروط والأحكام
                </Link>
                {' '}و{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>جاري إنشاء الحساب...</span>
                </>
              ) : (
                'إنشاء حساب'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              لديك حساب بالفعل؟{' '}
              <Link
                to="/login"
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                سجّل دخولك
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
