import { useState } from 'react'
import { Calendar, Clock, Video, User, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedInstructor, setSelectedInstructor] = useState(null)
  const [selectedType, setSelectedType] = useState('all')

  const sessionTypes = [
    { id: 'all', name: 'الكل', icon: Calendar },
    { id: 'review', name: 'مراجعة', icon: CheckCircle },
    { id: 'consultation', name: 'استشارة', icon: User },
    { id: 'exam-prep', name: 'تحضير للاختبار', icon: AlertCircle },
  ]

  const instructors = [
    {
      id: 1,
      name: 'د. سارة أحمد',
      specialty: 'تمريض باطني وجراحي',
      rating: 4.9,
      reviews: 156,
      experience: '12 سنة خبرة',
      avatar: '👩‍⚕️',
      available: true,
      price: 'مجاني',
      bio: 'خبيرة في التمريض الباطني والجراحي مع سجل حافل في تدريب الممرضين'
    },
    {
      id: 2,
      name: 'د. محمد خالد',
      specialty: 'تمريض الطوارئ والعناية المركزة',
      rating: 4.8,
      reviews: 142,
      experience: '10 سنوات خبرة',
      avatar: '👨‍⚕️',
      available: true,
      price: 'مجاني',
      bio: 'متخصص في تمريض الطوارئ والحالات الحرجة'
    },
    {
      id: 3,
      name: 'د. فاطمة علي',
      specialty: 'تمريض الأطفال وحديثي الولادة',
      rating: 5.0,
      reviews: 198,
      experience: '15 سنة خبرة',
      avatar: '👩‍⚕️',
      available: true,
      price: 'مجاني',
      bio: 'رائدة في مجال تمريض الأطفال والعناية بحديثي الولادة'
    },
    {
      id: 4,
      name: 'د. عبدالله حسن',
      specialty: 'صحة الأم والطفل',
      rating: 4.7,
      reviews: 128,
      experience: '8 سنوات خبرة',
      avatar: '👨‍⚕️',
      available: false,
      price: 'مجاني',
      bio: 'متخصص في رعاية صحة الأم والطفل والتوليد'
    },
  ]

  const upcomingBookings = [
    {
      id: 1,
      instructor: 'د. سارة أحمد',
      date: '2025-11-01',
      time: '20:00',
      duration: 60,
      type: 'review',
      status: 'confirmed',
      topic: 'مراجعة التمريض الباطني',
      meetingLink: 'https://meet.example.com/abc123'
    },
    {
      id: 2,
      instructor: 'د. فاطمة علي',
      date: '2025-11-05',
      time: '18:00',
      duration: 45,
      type: 'consultation',
      status: 'confirmed',
      topic: 'استشارة حول تمريض الأطفال',
      meetingLink: 'https://meet.example.com/xyz789'
    },
  ]

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ]

  const getStatusBadge = (status) => {
    const config = {
      confirmed: { label: 'مؤكد', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', icon: CheckCircle },
      pending: { label: 'قيد الانتظار', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400', icon: Clock },
      cancelled: { label: 'ملغي', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400', icon: XCircle },
    }
    return config[status] || config.pending
  }

  const getTypeBadge = (type) => {
    const config = {
      review: { label: 'مراجعة', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
      consultation: { label: 'استشارة', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
      'exam-prep': { label: 'تحضير للاختبار', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
    }
    return config[type] || config.review
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  const getDaysInMonth = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []
    
    // Add empty cells for days before the first day of the month
    const firstDayOfWeek = firstDay.getDay()
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ empty: true })
    }
    
    // Add all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i)
      const dayOfWeek = date.getDay()
      const dayName = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'][dayOfWeek]
      
      days.push({
        date: i,
        fullDate: date.toISOString().split('T')[0],
        dayName: dayName,
        isToday: i === today.getDate() && month === today.getMonth(),
        isPast: date < today && !(i === today.getDate() && month === today.getMonth()),
        isWeekend: dayOfWeek === 5 || dayOfWeek === 6 // Friday or Saturday
      })
    }
    return days
  }

  const getCurrentMonthName = () => {
    const today = new Date()
    return today.toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            📅 احجز موعدًا
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            جلسات مراجعة واستشارات مع المدربين المتخصصين - اختر الوقت المناسب لك
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">المواعيد القادمة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الجلسات المكتملة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="bg-green-500 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ساعات التدريب</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">المدربون المتاحون</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-lg">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Bookings */}
        {upcomingBookings.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📌 مواعيدك القادمة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingBookings.map((booking) => {
                const statusBadge = getStatusBadge(booking.status)
                const typeBadge = getTypeBadge(booking.type)
                
                return (
                  <div key={booking.id} className="card-hover border-r-4 border-primary">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {booking.topic}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          مع {booking.instructor}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${statusBadge.color}`}>
                        <statusBadge.icon className="w-3 h-3" />
                        {statusBadge.label}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{formatDate(booking.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{booking.time} ({booking.duration} دقيقة)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Video className="w-4 h-4 text-gray-400" />
                        <span className={typeBadge.color + ' px-2 py-0.5 rounded text-xs'}>
                          {typeBadge.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                        <Video className="w-4 h-4" />
                        <span>انضم للجلسة</span>
                      </button>
                      <button className="btn-secondary px-4">
                        إلغاء
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Session Type Filter */}
        <div className="card mb-8">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">نوع الجلسة</h3>
          <div className="flex gap-3 flex-wrap">
            {sessionTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  selectedType === type.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <type.icon className="w-4 h-4" />
                {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">👨‍⚕️ المدربون المتاحون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className={`card-hover ${!instructor.available ? 'opacity-60' : ''} ${
                  selectedInstructor?.id === instructor.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => instructor.available && setSelectedInstructor(instructor)}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{instructor.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {instructor.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {instructor.specialty}
                        </p>
                      </div>
                      {!instructor.available && (
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs rounded-full">
                          غير متاح
                        </span>
                      )}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{instructor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({instructor.reviews} تقييم)
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {instructor.bio}
                    </p>

                    {/* Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{instructor.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-primary">{instructor.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                {instructor.available && (
                  <button
                    onClick={() => setSelectedInstructor(instructor)}
                    className={`w-full ${
                      selectedInstructor?.id === instructor.id ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {selectedInstructor?.id === instructor.id ? 'تم الاختيار ✓' : 'اختر هذا المدرب'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        {selectedInstructor && (
          <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-primary">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📝 احجز موعدك مع {selectedInstructor.name}
            </h2>

            {/* Mini Calendar */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">اختر التاريخ</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {getCurrentMonthName()}
                  </h4>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-bold text-gray-600 dark:text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2">
                  {getDaysInMonth().map((day, index) => {
                    if (day.empty) {
                      return <div key={`empty-${index}`} className="aspect-square"></div>
                    }
                    
                    return (
                      <button
                        key={day.date}
                        onClick={() => !day.isPast && setSelectedDate(day.fullDate)}
                        disabled={day.isPast}
                        className={`aspect-square rounded-lg transition-all flex flex-col items-center justify-center p-2 relative ${
                          day.isPast
                            ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed bg-gray-50 dark:bg-gray-900'
                            : selectedDate === day.fullDate
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : day.isToday
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 ring-2 ring-blue-500'
                            : day.isWeekend
                            ? 'hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-900 dark:text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <span className={`text-lg font-bold ${selectedDate === day.fullDate ? 'text-white' : ''}`}>
                          {day.date}
                        </span>
                        {day.isToday && !selectedDate && (
                          <span className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full"></span>
                        )}
                        {day.isWeekend && !day.isPast && selectedDate !== day.fullDate && (
                          <span className="text-[8px] text-purple-600 dark:text-purple-400 font-medium">عطلة</span>
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/30 ring-2 ring-blue-500 rounded"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">اليوم</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">محدد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-100 dark:bg-purple-900/20 rounded"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">عطلة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">اختر الوقت</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-primary text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm Button */}
            {selectedDate && selectedTime && (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ملخص الحجز</h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>• المدرب: {selectedInstructor.name}</p>
                    <p>• التاريخ: {formatDate(selectedDate)}</p>
                    <p>• الوقت: {selectedTime}</p>
                    <p>• المدة: 60 دقيقة</p>
                  </div>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>تأكيد الحجز</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
