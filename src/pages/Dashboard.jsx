import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, FlaskConical, Calendar, MessageSquare, Award, User, TrendingUp, Clock, AlertCircle, CheckCircle, Bell } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import PaymentGateways from '../components/PaymentGateways'
import NotificationCenter from '../components/NotificationCenter'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showNotifications, setShowNotifications] = useState(false)

  const stats = [
    { label: 'الدروس المكتملة', value: '18 / 25', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'اختبارات المحاكاة المجتازة', value: '5 / 8', icon: FlaskConical, color: 'bg-green-500' },
    { label: 'آخر دخول', value: 'منذ يومين', icon: Clock, color: 'bg-purple-500' },
    { label: 'مستوى الأداء', value: 'جيد جداً', icon: TrendingUp, color: 'bg-yellow-500' },
  ]

  const quickAccessCards = [
    {
      title: 'المواد العلمية',
      description: 'الدروس، الشرائح، بنوك الأسئلة',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      path: '/materials'
    },
    {
      title: 'اختبارات المحاكاة',
      description: 'أسئلة شبيهة باختبار الهيئة',
      icon: FlaskConical,
      color: 'from-green-500 to-green-600',
      path: '/exams'
    },
    {
      title: 'احجز موعدًا',
      description: 'جلسات مراجعة مع المدربين',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600',
      path: '/booking'
    },
    {
      title: 'منتدى التجارب',
      description: 'مشاركة خبرات ونصائح',
      icon: MessageSquare,
      color: 'from-orange-500 to-orange-600',
      path: '/forum'
    },
    {
      title: 'شهاداتي',
      description: 'حفظ/طباعة الشهادات',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      path: '/certificates'
    },
    {
      title: 'ملفي الشخصي',
      description: 'البيانات، الإعدادات، التفضيلات',
      icon: User,
      color: 'from-gray-500 to-gray-600',
      path: '/profile'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            مرحبًا، {user?.name || 'مطارد'}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            هذا ملخص أدائك في منصة تمريض بلس
          </p>
        </div>

        {/* Progress Bar */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">تقدم المسار</h3>
            <span className="text-2xl font-bold text-primary">65%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light h-full rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">أكملت 65٪ من المسار</p>
        </div>

        {/* Alert Banner */}
        <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-800 dark:text-yellow-300">تذكير مهم</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-400">لديك اختبار محاكاة بعد 3 أيام. تأكد من مراجعة المواد.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">الوصول السريع</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card, index) => (
              <button
                key={index}
                onClick={() => navigate(card.path)}
                className="card-hover group overflow-hidden text-right"
              >
                <div className={`bg-gradient-to-br ${card.color} p-4 rounded-lg mb-4 group-hover:scale-105 transition-transform`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Notification Center */}
        <NotificationCenter />

        {/* Payment Gateways */}
        <PaymentGateways />
      </main>
    </div>
  )
}
