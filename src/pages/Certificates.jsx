import { useState } from 'react'
import { Award, Download, Share2, Eye, Calendar, CheckCircle, Clock, Printer, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: 'شهادة إتمام دورة التمريض الباطني',
      description: 'شهادة إتمام دورة التمريض الباطني الشاملة بنجاح',
      issueDate: '2025-10-15',
      completionDate: '2025-10-15',
      grade: 'ممتاز',
      score: 95,
      hours: 40,
      instructor: 'د. سارة أحمد',
      certificateNumber: 'NP-2025-001234',
      status: 'issued',
      category: 'course',
      skills: ['التمريض الباطني', 'العناية بالمرضى', 'إدارة الأدوية'],
      thumbnail: '🏥'
    },
    {
      id: 2,
      title: 'شهادة اجتياز اختبار المحاكاة الشامل',
      description: 'اجتياز اختبار المحاكاة الكامل لاختبار الهيئة السعودية',
      issueDate: '2025-10-20',
      completionDate: '2025-10-20',
      grade: 'جيد جداً',
      score: 85,
      hours: 2,
      instructor: 'منصة تمريض بلس',
      certificateNumber: 'NP-2025-001567',
      status: 'issued',
      category: 'exam',
      skills: ['اختبار الهيئة', 'المحاكاة', 'التقييم'],
      thumbnail: '🎯'
    },
    {
      id: 3,
      title: 'شهادة دورة تمريض الأطفال',
      description: 'إتمام دورة تمريض الأطفال وحديثي الولادة',
      issueDate: '2025-09-28',
      completionDate: '2025-09-28',
      grade: 'ممتاز',
      score: 92,
      hours: 35,
      instructor: 'د. فاطمة علي',
      certificateNumber: 'NP-2025-000891',
      status: 'issued',
      category: 'course',
      skills: ['تمريض الأطفال', 'حديثي الولادة', 'العناية المركزة'],
      thumbnail: '👶'
    },
    {
      id: 4,
      title: 'شهادة دورة التمريض الجراحي',
      description: 'دورة متقدمة في التمريض الجراحي والعمليات',
      issueDate: null,
      completionDate: null,
      grade: null,
      score: null,
      hours: 45,
      instructor: 'د. محمد خالد',
      certificateNumber: null,
      status: 'in_progress',
      category: 'course',
      progress: 65,
      skills: ['التمريض الجراحي', 'العمليات', 'الرعاية بعد الجراحة'],
      thumbnail: '🔬'
    },
    {
      id: 5,
      title: 'شهادة المشاركة في منتدى التجارب',
      description: 'شهادة تقدير للمشاركة الفعالة في منتدى التجارب',
      issueDate: '2025-10-25',
      completionDate: '2025-10-25',
      grade: 'مشارك نشط',
      score: null,
      hours: null,
      instructor: 'منصة تمريض بلس',
      certificateNumber: 'NP-2025-001789',
      status: 'issued',
      category: 'participation',
      skills: ['المشاركة المجتمعية', 'تبادل الخبرات'],
      thumbnail: '💬'
    },
  ]

  const stats = [
    { label: 'الشهادات المكتملة', value: '4', icon: Award, color: 'bg-green-500' },
    { label: 'قيد التقدم', value: '1', icon: Clock, color: 'bg-yellow-500' },
    { label: 'ساعات التدريب', value: '117', icon: Calendar, color: 'bg-blue-500' },
    { label: 'متوسط الدرجات', value: '91%', icon: CheckCircle, color: 'bg-purple-500' },
  ]

  const getStatusBadge = (status) => {
    const config = {
      issued: { label: 'صادرة', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', icon: CheckCircle },
      in_progress: { label: 'قيد التقدم', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400', icon: Clock },
      pending: { label: 'قيد المراجعة', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400', icon: Clock },
    }
    return config[status] || config.pending
  }

  const getCategoryBadge = (category) => {
    const config = {
      course: { label: 'دورة تدريبية', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
      exam: { label: 'اختبار', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
      participation: { label: 'مشاركة', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400' },
    }
    return config[category] || config.course
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'غير محدد'
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const handleDownload = (certificate) => {
    alert(`جاري تحميل شهادة: ${certificate.title}`)
  }

  const handleShare = (certificate) => {
    alert(`مشاركة شهادة: ${certificate.title}`)
  }

  const handlePrint = (certificate) => {
    alert(`طباعة شهادة: ${certificate.title}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🏅 شهاداتي
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            جميع شهاداتك وإنجازاتك في مكان واحد - احفظها، اطبعها، أو شاركها
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {certificates.map((certificate) => {
            const statusBadge = getStatusBadge(certificate.status)
            const categoryBadge = getCategoryBadge(certificate.category)
            
            return (
              <div
                key={certificate.id}
                className="card-hover relative overflow-hidden"
                onClick={() => certificate.status === 'issued' && setSelectedCertificate(certificate)}
              >
                {/* Certificate Visual */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-48 flex items-center justify-center text-7xl mb-4 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">{certificate.thumbnail}</div>
                  {certificate.status === 'issued' && (
                    <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${statusBadge.color}`}>
                      <statusBadge.icon className="w-3 h-3" />
                      {statusBadge.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryBadge.color}`}>
                      {categoryBadge.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
                    {certificate.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {certificate.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {certificate.status === 'issued' ? (
                      <>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">التقدير</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{certificate.grade}</p>
                        </div>
                        {certificate.score && (
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">الدرجة</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{certificate.score}%</p>
                          </div>
                        )}
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">تاريخ الإصدار</p>
                          <p className="text-xs font-medium text-gray-900 dark:text-white">
                            {formatDate(certificate.issueDate)}
                          </p>
                        </div>
                        {certificate.hours && (
                          <div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">الساعات</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{certificate.hours} ساعة</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="col-span-2">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">التقدم</p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all"
                            style={{ width: `${certificate.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{certificate.progress}% مكتمل</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {certificate.status === 'issued' ? (
                    <div className="flex gap-2 pt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDownload(certificate)
                        }}
                        className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span>تحميل</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCertificate(certificate)
                        }}
                        className="btn-secondary px-4"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button className="btn-secondary w-full text-sm" disabled>
                      قيد التقدم...
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certificate Preview Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">معاينة الشهادة</h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                {/* Certificate Design */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-12 border-4 border-primary relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-16 translate-y-16"></div>
                  
                  {/* Logo/Icon */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{selectedCertificate.thumbnail}</div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">منصة تمريض بلس</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Nursing Plus Platform</p>
                  </div>

                  {/* Certificate Title */}
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-primary mb-4">شهادة إتمام</h4>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">تشهد هذه الشهادة بأن</p>
                    <h5 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">مطارد العنزي</h5>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">قد أتم بنجاح</p>
                    <h6 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      {selectedCertificate.title}
                    </h6>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">التقدير</p>
                      <p className="font-bold text-gray-900 dark:text-white">{selectedCertificate.grade}</p>
                    </div>
                    {selectedCertificate.score && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الدرجة</p>
                        <p className="font-bold text-gray-900 dark:text-white">{selectedCertificate.score}%</p>
                      </div>
                    )}
                    {selectedCertificate.hours && (
                      <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الساعات</p>
                        <p className="font-bold text-gray-900 dark:text-white">{selectedCertificate.hours} ساعة</p>
                      </div>
                    )}
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">تاريخ الإصدار</p>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">
                        {formatDate(selectedCertificate.issueDate)}
                      </p>
                    </div>
                  </div>

                  {/* Instructor & Certificate Number */}
                  <div className="flex justify-between items-end pt-8 border-t border-gray-300 dark:border-gray-600">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">المدرب</p>
                      <p className="font-bold text-gray-900 dark:text-white">{selectedCertificate.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">رقم الشهادة</p>
                      <p className="font-mono font-bold text-gray-900 dark:text-white">
                        {selectedCertificate.certificateNumber}
                      </p>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="text-center mt-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">شهادة موثقة ومعتمدة</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">المهارات المكتسبة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => handleDownload(selectedCertificate)}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>تحميل PDF</span>
                  </button>
                  <button
                    onClick={() => handlePrint(selectedCertificate)}
                    className="btn-secondary flex items-center justify-center gap-2 px-6"
                  >
                    <Printer className="w-5 h-5" />
                    <span>طباعة</span>
                  </button>
                  <button
                    onClick={() => handleShare(selectedCertificate)}
                    className="btn-secondary flex items-center justify-center gap-2 px-6"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>مشاركة</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">💡 معلومات مهمة</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>جميع الشهادات معتمدة وموثقة من منصة تمريض بلس</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>يمكنك تحميل الشهادات بصيغة PDF عالية الجودة</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>شارك شهاداتك على LinkedIn أو منصات التواصل الاجتماعي</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>يمكن التحقق من صحة الشهادة باستخدام رقم الشهادة</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
