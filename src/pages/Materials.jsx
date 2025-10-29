import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, FileText, Video, Download, Search, Filter, Clock, CheckCircle, Lock } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Materials() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'الكل', count: 45 },
    { id: 'medical', name: 'تمريض باطني', count: 12 },
    { id: 'surgical', name: 'تمريض جراحي', count: 10 },
    { id: 'pediatric', name: 'تمريض أطفال', count: 8 },
    { id: 'maternal', name: 'تمريض صحة الأم', count: 7 },
    { id: 'psychiatric', name: 'تمريض نفسي', count: 8 },
  ]

  const materials = [
    {
      id: 1,
      title: 'أساسيات التمريض الباطني',
      category: 'medical',
      type: 'video',
      duration: '45 دقيقة',
      lessons: 8,
      completed: true,
      locked: false,
      description: 'مقدمة شاملة عن التمريض الباطني والرعاية الصحية للمرضى',
      thumbnail: '🏥',
      progress: 100,
      isPurchased: true
    },
    {
      id: 2,
      title: 'العناية بمرضى السكري',
      category: 'medical',
      type: 'pdf',
      duration: '30 دقيقة',
      lessons: 5,
      completed: false,
      locked: false,
      description: 'دليل شامل للعناية بمرضى السكري وإدارة الحالات الحرجة',
      thumbnail: '💉',
      progress: 0,
      isPurchased: false,
      price: 349
    },
    {
      id: 3,
      title: 'التمريض الجراحي المتقدم',
      category: 'surgical',
      type: 'video',
      duration: '60 دقيقة',
      lessons: 10,
      completed: false,
      locked: false,
      description: 'تقنيات متقدمة في التمريض الجراحي والعناية بعد العمليات',
      thumbnail: '🔬',
      progress: 45,
      isPurchased: true
    },
    {
      id: 4,
      title: 'رعاية الأطفال حديثي الولادة',
      category: 'pediatric',
      type: 'video',
      duration: '50 دقيقة',
      lessons: 7,
      completed: false,
      locked: false,
      description: 'أساسيات العناية بالأطفال حديثي الولادة والخدج',
      thumbnail: '👶',
      progress: 20,
      isPurchased: true
    },
    {
      id: 5,
      title: 'صحة الأم والطفل',
      category: 'maternal',
      type: 'pdf',
      duration: '40 دقيقة',
      lessons: 6,
      completed: false,
      locked: false,
      description: 'الرعاية الصحية للأم أثناء الحمل والولادة وما بعدها',
      thumbnail: '🤱',
      progress: 0,
      isPurchased: false,
      price: 299
    },
    {
      id: 6,
      title: 'التمريض النفسي الأساسي',
      category: 'psychiatric',
      type: 'video',
      duration: '55 دقيقة',
      lessons: 9,
      completed: false,
      locked: false,
      description: 'مبادئ التمريض النفسي والتعامل مع المرضى النفسيين',
      thumbnail: '🧠',
      progress: 0,
      isPurchased: false,
      price: 399
    },
    {
      id: 7,
      title: 'الإسعافات الأولية المتقدمة',
      category: 'medical',
      type: 'video',
      duration: '35 دقيقة',
      lessons: 5,
      completed: false,
      locked: false,
      description: 'تقنيات الإسعافات الأولية والتعامل مع الحالات الطارئة',
      thumbnail: '🚑',
      progress: 0,
      isPurchased: false,
      price: 249
    },
    {
      id: 8,
      title: 'إدارة الألم والعناية التلطيفية',
      category: 'medical',
      type: 'pdf',
      duration: '25 دقيقة',
      lessons: 4,
      completed: false,
      locked: false,
      description: 'أساليب إدارة الألم والرعاية التلطيفية للمرضى',
      thumbnail: '💊',
      progress: 0,
      isPurchased: false,
      price: 199
    },
  ]

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="w-5 h-5" />
      case 'pdf': return <FileText className="w-5 h-5" />
      default: return <BookOpen className="w-5 h-5" />
    }
  }

  const getTypeLabel = (type) => {
    switch(type) {
      case 'video': return 'فيديو'
      case 'pdf': return 'ملف PDF'
      default: return 'درس'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            📚 المادة العلمية
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            الدروس، الشرائح، بنوك الأسئلة - كل ما تحتاجه للتحضير لاختبار الهيئة
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">إجمالي الدروس</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">45</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الدروس المكتملة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
              </div>
              <div className="bg-green-500 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ساعات الدراسة</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">32</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">نسبة الإنجاز</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">40%</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Filter className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن درس..."
                className="input-field pr-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              onClick={() => navigate(`/course/${material.id}`)}
              className={`card-hover relative overflow-hidden cursor-pointer ${
                material.locked ? 'opacity-75' : ''
              }`}
            >
              {/* Lock Badge */}
              {material.locked && (
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm z-10">
                  <Lock className="w-4 h-4" />
                  <span>مغلق</span>
                </div>
              )}

              {/* Thumbnail */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 flex items-center justify-center text-6xl mb-4 rounded-lg">
                {material.thumbnail}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-1">
                    {material.title}
                  </h3>
                  {material.completed && (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {material.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    {getTypeIcon(material.type)}
                    <span>{getTypeLabel(material.type)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{material.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{material.lessons} دروس</span>
                  </div>
                </div>

                {/* Progress Bar or Price */}
                {material.isPurchased ? (
                  // Show progress bar for purchased courses
                  material.progress > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>التقدم</span>
                        <span>{material.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all"
                          style={{ width: `${material.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                ) : (
                  // Show price for non-purchased courses
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">السعر</span>
                    <span className="text-2xl font-bold text-primary">{material.price} ر.س</span>
                  </div>
                )}

                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/course/${material.id}`)
                  }}
                  className={`w-full ${
                    material.isPurchased
                      ? material.completed
                        ? 'btn-secondary'
                        : 'btn-primary'
                      : 'bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200'
                  } flex items-center justify-center gap-2`}
                >
                  {material.isPurchased ? (
                    material.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>مراجعة</span>
                      </>
                    ) : material.progress > 0 ? (
                      <>
                        <BookOpen className="w-4 h-4" />
                        <span>متابعة</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-4 h-4" />
                        <span>ابدأ الآن</span>
                      </>
                    )
                  ) : (
                    <>
                      <span>عرض التفاصيل</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              لا توجد نتائج
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              جرب تغيير معايير البحث أو الفلتر
            </p>
          </div>
        )}

        {/* Download Resources Section */}
        <div className="card mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📥 موارد إضافية للتحميل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">دليل الاختبار الشامل</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PDF - 5.2 MB</p>
                </div>
              </div>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">بنك الأسئلة الكامل</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PDF - 8.7 MB</p>
                </div>
              </div>
              <button className="btn-secondary text-sm">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
