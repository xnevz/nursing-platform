import { useState } from 'react'
import { Bell, CheckCircle, AlertCircle, Info, Calendar, MessageSquare, Award, Trash2, Check, X } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'تم رفع درس جديد',
      message: 'درس جديد في قسم التمريض الباطني: "إدارة مرضى القلب"',
      time: 'منذ 5 دقائق',
      read: false,
      icon: CheckCircle,
      link: '/materials'
    },
    {
      id: 2,
      type: 'warning',
      title: 'تذكير: اختبار قادم',
      message: 'لديك اختبار محاكاة في التمريض الجراحي غداً الساعة 8:00 مساءً',
      time: 'منذ ساعة',
      read: false,
      icon: AlertCircle,
      link: '/exams'
    },
    {
      id: 3,
      type: 'info',
      title: 'موعد مع المدرب',
      message: 'لديك جلسة مراجعة مع د. سارة أحمد اليوم الساعة 8:00 مساءً',
      time: 'منذ ساعتين',
      read: false,
      icon: Calendar,
      link: '/booking'
    },
    {
      id: 4,
      type: 'success',
      title: 'شهادة جديدة متاحة',
      message: 'تهانينا! شهادة إتمام دورة التمريض الباطني جاهزة للتحميل',
      time: 'منذ 3 ساعات',
      read: true,
      icon: Award,
      link: '/certificates'
    },
    {
      id: 5,
      type: 'info',
      title: 'رد جديد على منشورك',
      message: 'قام أحمد خالد بالرد على منشورك في منتدى التجارب',
      time: 'منذ 5 ساعات',
      read: true,
      icon: MessageSquare,
      link: '/forum'
    },
    {
      id: 6,
      type: 'warning',
      title: 'انتهت صلاحية الجلسة',
      message: 'انتهت صلاحية جلسة المراجعة مع د. محمد خالد',
      time: 'منذ يوم',
      read: true,
      icon: AlertCircle,
      link: '/booking'
    },
    {
      id: 7,
      type: 'success',
      title: 'تم تحديث المحتوى',
      message: 'تم إضافة 5 دروس جديدة في قسم تمريض الأطفال',
      time: 'منذ يومين',
      read: true,
      icon: Info,
      link: '/materials'
    },
    {
      id: 8,
      type: 'info',
      title: 'تحديث النظام',
      message: 'تم تحديث المنصة بميزات جديدة. تعرف على المزيد',
      time: 'منذ 3 أيام',
      read: true,
      icon: Info,
      link: '/dashboard'
    },
  ])

  const [filter, setFilter] = useState('all')

  const unreadCount = notifications.filter(n => !n.read).length

  const getTypeConfig = (type) => {
    const config = {
      success: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-400',
        border: 'border-green-500'
      },
      warning: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-700 dark:text-yellow-400',
        border: 'border-yellow-500'
      },
      info: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-700 dark:text-blue-400',
        border: 'border-blue-500'
      },
    }
    return config[type] || config.info
  }

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return !n.read
    if (filter === 'read') return n.read
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Bell className="w-8 h-8" />
              الإشعارات
            </h1>
            {unreadCount > 0 && (
              <span className="px-4 py-2 bg-primary text-white rounded-full font-bold">
                {unreadCount} جديد
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            تابع آخر التحديثات والأخبار المهمة
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">إجمالي الإشعارات</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{notifications.length}</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">غير مقروءة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{unreadCount}</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">مقروءة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {notifications.length - unreadCount}
                </p>
              </div>
              <div className="bg-green-500 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                الكل ({notifications.length})
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === 'unread'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                غير مقروءة ({unreadCount})
              </button>
              <button
                onClick={() => setFilter('read')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === 'read'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                مقروءة ({notifications.length - unreadCount})
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="btn-secondary flex items-center gap-2 text-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>تحديد الكل كمقروء</span>
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="btn-secondary flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>حذف الكل</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const typeConfig = getTypeConfig(notification.type)
              const Icon = notification.icon
              
              return (
                <div
                  key={notification.id}
                  className={`card-hover ${!notification.read ? 'border-r-4 ' + typeConfig.border : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`${typeConfig.bg} p-3 rounded-lg flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${typeConfig.text}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <h3 className={`font-bold mb-1 ${
                            !notification.read 
                              ? 'text-gray-900 dark:text-white' 
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {notification.title}
                            {!notification.read && (
                              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {notification.message}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </span>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-primary hover:text-primary-hover font-medium"
                            >
                              تحديد كمقروء
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="card text-center py-12">
              <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                لا توجد إشعارات
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {filter === 'unread' 
                  ? 'جميع الإشعارات مقروءة' 
                  : filter === 'read'
                  ? 'لا توجد إشعارات مقروءة'
                  : 'ستظهر الإشعارات هنا عند توفرها'}
              </p>
            </div>
          )}
        </div>

        {/* Info Section */}
        {notifications.length > 0 && (
          <div className="card mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">💡 نصيحة</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              يمكنك النقر على أي إشعار للانتقال مباشرة إلى الصفحة المرتبطة به. 
              احرص على متابعة الإشعارات بانتظام لعدم تفويت أي تحديثات مهمة.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
