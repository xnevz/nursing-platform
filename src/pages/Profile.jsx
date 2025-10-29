import { useState } from 'react'
import { User, Mail, Phone, Calendar, MapPin, Award, BookOpen, Clock, Edit2, Save, X, Camera, Shield, Bell, Globe } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState('info')
  
  const [profileData, setProfileData] = useState({
    fullName: 'مطارد العنزي',
    email: 'mohammed.ahmed@example.com',
    phone: '+966 50 123 4567',
    specialty: 'تمريض باطني وجراحي',
    graduationYear: '2020',
    city: 'الرياض',
    bio: 'ممرض متخصص في التمريض الباطني والجراحي، أسعى للحصول على ترخيص الهيئة السعودية للتخصصات الصحية.',
    university: 'جامعة الملك سعود',
    experience: '3 سنوات',
  })

  const [tempData, setTempData] = useState(profileData)

  const stats = [
    { label: 'الدورات المكتملة', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'الشهادات', value: '5', icon: Award, color: 'bg-green-500' },
    { label: 'ساعات التدريب', value: '117', icon: Clock, color: 'bg-purple-500' },
    { label: 'متوسط الدرجات', value: '91%', icon: Award, color: 'bg-yellow-500' },
  ]

  const achievements = [
    {
      id: 1,
      title: 'متعلم نشط',
      description: 'أكمل 10 دورات تدريبية',
      icon: '🎓',
      earned: true,
      date: '2025-09-15'
    },
    {
      id: 2,
      title: 'نجم المنتدى',
      description: 'حصل على 100 إعجاب في المنتدى',
      icon: '⭐',
      earned: true,
      date: '2025-10-01'
    },
    {
      id: 3,
      title: 'محترف الاختبارات',
      description: 'اجتاز 5 اختبارات محاكاة',
      icon: '🎯',
      earned: true,
      date: '2025-10-10'
    },
    {
      id: 4,
      title: 'الخبير',
      description: 'أكمل 20 دورة تدريبية',
      icon: '👑',
      earned: false,
      progress: 60
    },
    {
      id: 5,
      title: 'المتفوق',
      description: 'احصل على معدل 95% في جميع الاختبارات',
      icon: '🏆',
      earned: false,
      progress: 85
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'course',
      title: 'أكمل دورة التمريض الباطني',
      date: '2025-10-15',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'exam',
      title: 'اجتاز اختبار المحاكاة الشامل',
      date: '2025-10-20',
      icon: Award,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'forum',
      title: 'نشر تجربة في منتدى التجارب',
      date: '2025-10-22',
      icon: Globe,
      color: 'text-purple-500'
    },
    {
      id: 4,
      type: 'certificate',
      title: 'حصل على شهادة تمريض الأطفال',
      date: '2025-09-28',
      icon: Award,
      color: 'text-yellow-500'
    },
  ]

  const handleEdit = () => {
    setIsEditing(true)
    setTempData(profileData)
  }

  const handleSave = () => {
    setProfileData(tempData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempData(profileData)
    setIsEditing(false)
  }

  const handleChange = (field, value) => {
    setTempData({ ...tempData, [field]: value })
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            👤 الملف الشخصي
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            إدارة معلوماتك الشخصية وإنجازاتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="card text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                  👨‍⚕️
                </div>
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary-hover transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              {/* Name & Role */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {profileData.fullName}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {profileData.specialty}
              </p>

              {/* Edit Button */}
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>تعديل الملف الشخصي</span>
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>حفظ</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-secondary flex-1 flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    <span>إلغاء</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">📊 إحصائيات سريعة</h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`${stat.color} p-2 rounded-lg`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="card">
              <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700 pb-4">
                <button
                  onClick={() => setActiveTab('info')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'info'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  المعلومات الشخصية
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'achievements'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  الإنجازات
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeTab === 'activity'
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  النشاط الأخير
                </button>
              </div>
            </div>

            {/* Personal Information Tab */}
            {activeTab === 'info' && (
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  المعلومات الشخصية
                </h3>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4" />
                      الاسم الكامل
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4" />
                      البريد الإلكتروني
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={tempData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Phone className="w-4 h-4" />
                      رقم الجوال
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={tempData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.phone}</p>
                    )}
                  </div>

                  {/* Specialty */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Award className="w-4 h-4" />
                      التخصص
                    </label>
                    {isEditing ? (
                      <select
                        value={tempData.specialty}
                        onChange={(e) => handleChange('specialty', e.target.value)}
                        className="input-field"
                      >
                        <option value="تمريض باطني وجراحي">تمريض باطني وجراحي</option>
                        <option value="تمريض الأطفال">تمريض الأطفال</option>
                        <option value="تمريض صحة الأم">تمريض صحة الأم</option>
                        <option value="تمريض نفسي">تمريض نفسي</option>
                        <option value="تمريض الطوارئ">تمريض الطوارئ</option>
                      </select>
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.specialty}</p>
                    )}
                  </div>

                  {/* University */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <BookOpen className="w-4 h-4" />
                      الجامعة
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.university}
                        onChange={(e) => handleChange('university', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.university}</p>
                    )}
                  </div>

                  {/* Graduation Year */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Calendar className="w-4 h-4" />
                      سنة التخرج
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.graduationYear}
                        onChange={(e) => handleChange('graduationYear', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.graduationYear}</p>
                    )}
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Clock className="w-4 h-4" />
                      سنوات الخبرة
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.experience}
                        onChange={(e) => handleChange('experience', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.experience}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <MapPin className="w-4 h-4" />
                      المدينة
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.city}</p>
                    )}
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4" />
                      نبذة عني
                    </label>
                    {isEditing ? (
                      <textarea
                        value={tempData.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                        rows="4"
                        className="input-field"
                      />
                    ) : (
                      <p className="text-gray-900 dark:text-white">{profileData.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="space-y-4">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    🏆 الإنجازات والأوسمة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          achievement.earned
                            ? 'border-primary bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 opacity-60'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-4xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {achievement.description}
                            </p>
                            {achievement.earned ? (
                              <p className="text-xs text-green-600 dark:text-green-400">
                                ✓ تم الحصول عليه في {formatDate(achievement.date)}
                              </p>
                            ) : (
                              <div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                                  <div
                                    className="bg-primary h-2 rounded-full transition-all"
                                    style={{ width: `${achievement.progress}%` }}
                                  ></div>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {achievement.progress}% مكتمل
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  📅 النشاط الأخير
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const Icon = activity.icon
                    return (
                      <div
                        key={activity.id}
                        className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <div className={`p-2 bg-white dark:bg-gray-800 rounded-lg ${activity.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white mb-1">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {formatDate(activity.date)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
