import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, AlertCircle, CheckCircle2, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import Logo from '../../components/Logo'
import { Moon, Sun } from 'lucide-react'

export default function ForgotPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  
  const { resetPassword } = useAuth()
  const { isDark, toggleTheme } = useTheme()

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await resetPassword(email)
      setSuccess('تم إرسال رمز التحقق إلى بريدك الإلكتروني')
      setStep(2)
      setResendTimer(60)
      startResendTimer()
    } catch (err) {
      setError('حدث خطأ. يرجى المحاولة مرة أخرى')
    } finally {
      setLoading(false)
    }
  }

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    const otpValue = otp.join('')
    
    if (otpValue.length !== 6) {
      setError('يرجى إدخال رمز التحقق كاملاً')
      return
    }

    setError('')
    setSuccess('تم التحقق بنجاح')
    setTimeout(() => {
      setStep(3)
      setSuccess('')
    }, 1000)
  }

  const handlePasswordReset = (e) => {
    e.preventDefault()
    setError('')

    if (newPassword !== confirmPassword) {
      setError('كلمات المرور غير متطابقة')
      return
    }

    if (newPassword.length < 8) {
      setError('كلمة المرور يجب أن تكون 8 أحرف على الأقل')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setSuccess('تم تغيير كلمة المرور بنجاح')
      setLoading(false)
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
    }, 1000)
  }

  const startResendTimer = () => {
    const interval = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResendOtp = () => {
    if (resendTimer > 0) return
    setResendTimer(60)
    startResendTimer()
    setSuccess('تم إعادة إرسال رمز التحقق')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-soft hover:shadow-soft-lg transition-all z-10"
        aria-label="تبديل الوضع الليلي"
      >
        {isDark ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            استعادة كلمة المرور
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {step === 1 && 'أدخل بريدك الإلكتروني لاستعادة حسابك'}
            {step === 2 && 'أدخل رمز التحقق المرسل إلى بريدك'}
            {step === 3 && 'أدخل كلمة المرور الجديدة'}
          </p>
        </div>

        <div className="card">
          {success && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-600 dark:text-green-400">{success}</p>
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  البريد الإلكتروني أو رقم الجوال
                </label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field pr-10"
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>جاري الإرسال...</span>
                  </>
                ) : (
                  'أرسل رمز الاستعادة'
                )}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
                  أدخل رمز التحقق المكون من 6 أرقام
                </label>
                <div className="flex gap-2 justify-center" dir="ltr">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      required
                    />
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">تحقق</button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className="text-sm text-primary hover:text-primary-hover disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  {resendTimer > 0 ? `إعادة الإرسال بعد ${resendTimer} ثانية` : 'إعادة إرسال الرمز'}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordReset} className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  كلمة المرور الجديدة
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input-field pr-10 pl-10"
                    placeholder="أدخل كلمة المرور الجديدة"
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
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

              <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>جاري الحفظ...</span>
                  </>
                ) : (
                  'حفظ كلمة المرور'
                )}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>العودة إلى تسجيل الدخول</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
