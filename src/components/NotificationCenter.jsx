import { CheckCircle, AlertTriangle, Calendar } from 'lucide-react'

export default function NotificationCenter() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle,
      title: 'تم رفع درس جديد',
      message: 'في «تمريض باطني»',
      time: 'منذ ساعتين',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800'
    },
    {
      id: 2,
      type: 'warning',
      icon: AlertTriangle,
      title: 'تذكير',
      message: 'لديك اختبار محاكاة بعد 3 أيام',
      time: 'منذ 5 ساعات',
      color: 'text-yellow-600 dark:text-yellow-400',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800'
    },
    {
      id: 3,
      type: 'info',
      icon: Calendar,
      title: 'موعدك مع المدرب',
      message: 'يوم الثلاثاء 8:00 م (قاعة تدريب افتراضية)',
      time: 'منذ يوم',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800'
    },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">مركز الإشعارات</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${notification.bg} ${notification.border} border rounded-lg p-4 flex items-start gap-4 hover:shadow-md transition-shadow`}
          >
            <div className={`${notification.color} flex-shrink-0`}>
              <notification.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className={`font-semibold ${notification.color} mb-1`}>
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {notification.message}
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap mr-4">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
