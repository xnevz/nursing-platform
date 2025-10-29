import { useState } from 'react'
import { FlaskConical, Clock, Award, TrendingUp, Play, CheckCircle, XCircle, AlertCircle, BarChart3, Target } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Exams() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const difficulties = [
    { id: 'all', name: 'الكل', color: 'bg-gray-500' },
    { id: 'easy', name: 'سهل', color: 'bg-green-500' },
    { id: 'medium', name: 'متوسط', color: 'bg-yellow-500' },
    { id: 'hard', name: 'صعب', color: 'bg-red-500' },
  ]

  const stats = [
    { label: 'الاختبارات المجتازة', value: '5 / 8', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'متوسط الدرجات', value: '85%', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'أعلى درجة', value: '95%', icon: Award, color: 'bg-yellow-500' },
    { label: 'الوقت المستغرق', value: '12 ساعة', icon: Clock, color: 'bg-purple-500' },
  ]

  const exams = [
    {
      id: 1,
      title: 'اختبار شامل - تمريض باطني',
      difficulty: 'medium',
      questions: 50,
      duration: 60,
      passingScore: 70,
      attempts: 2,
      bestScore: 85,
      lastAttempt: 'منذ 3 أيام',
      status: 'passed',
      description: 'اختبار شامل يغطي جميع جوانب التمريض الباطني',
      category: 'تمريض باطني'
    },
    {
      id: 2,
      title: 'اختبار سريع - العناية المركزة',
      difficulty: 'hard',
      questions: 30,
      duration: 40,
      passingScore: 75,
      attempts: 1,
      bestScore: 78,
      lastAttempt: 'منذ أسبوع',
      status: 'passed',
      description: 'أسئلة متقدمة حول العناية المركزة والحالات الحرجة',
      category: 'عناية مركزة'
    },
    {
      id: 3,
      title: 'محاكاة كاملة - اختبار الهيئة',
      difficulty: 'hard',
      questions: 100,
      duration: 120,
      passingScore: 70,
      attempts: 1,
      bestScore: 72,
      lastAttempt: 'منذ أسبوعين',
      status: 'passed',
      description: 'محاكاة كاملة لاختبار الهيئة السعودية للتخصصات الصحية',
      category: 'محاكاة كاملة'
    },
    {
      id: 4,
      title: 'اختبار - تمريض الأطفال',
      difficulty: 'medium',
      questions: 40,
      duration: 50,
      passingScore: 70,
      attempts: 3,
      bestScore: 95,
      lastAttempt: 'منذ شهر',
      status: 'passed',
      description: 'اختبار متخصص في تمريض الأطفال وحديثي الولادة',
      category: 'تمريض أطفال'
    },
    {
      id: 5,
      title: 'اختبار - صحة الأم والطفل',
      difficulty: 'easy',
      questions: 35,
      duration: 45,
      passingScore: 70,
      attempts: 1,
      bestScore: 88,
      lastAttempt: 'منذ شهر',
      status: 'passed',
      description: 'أسئلة حول رعاية الأم والطفل والتوليد',
      category: 'صحة الأم'
    },
    {
      id: 6,
      title: 'اختبار - التمريض الجراحي',
      difficulty: 'medium',
      questions: 45,
      duration: 55,
      passingScore: 70,
      attempts: 2,
      bestScore: 65,
      lastAttempt: 'منذ 5 أيام',
      status: 'failed',
      description: 'اختبار شامل للتمريض الجراحي والعمليات',
      category: 'تمريض جراحي'
    },
    {
      id: 7,
      title: 'اختبار - الصحة النفسية',
      difficulty: 'easy',
      questions: 30,
      duration: 40,
      passingScore: 70,
      attempts: 0,
      bestScore: null,
      lastAttempt: null,
      status: 'not_started',
      description: 'أسئلة حول التمريض النفسي والصحة العقلية',
      category: 'تمريض نفسي'
    },
    {
      id: 8,
      title: 'اختبار متقدم - الطوارئ',
      difficulty: 'hard',
      questions: 40,
      duration: 50,
      passingScore: 75,
      attempts: 0,
      bestScore: null,
      lastAttempt: null,
      status: 'not_started',
      description: 'اختبار متقدم في تمريض الطوارئ والإسعافات الأولية',
      category: 'طوارئ'
    },
  ]

  const filteredExams = exams.filter(exam => 
    selectedDifficulty === 'all' || exam.difficulty === selectedDifficulty
  )

  const getDifficultyBadge = (difficulty) => {
    const config = {
      easy: { label: 'سهل', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
      medium: { label: 'متوسط', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' },
      hard: { label: 'صعب', color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' },
    }
    return config[difficulty]
  }

  const getStatusBadge = (status, score, passingScore) => {
    if (status === 'not_started') {
      return { label: 'لم يبدأ', color: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400', icon: AlertCircle }
    } else if (status === 'passed') {
      return { label: `نجح - ${score}%`, color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', icon: CheckCircle }
    } else {
      return { label: `رسب - ${score}%`, color: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400', icon: XCircle }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🧪 اختبارات المحاكاة
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            أسئلة شبيهة باختبار الهيئة السعودية للتخصصات الصحية - اختبر معلوماتك وقيّم مستواك
          </p>
        </div>

        {/* Stats Cards */}
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

        {/* Performance Chart */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">📈 تحليل الأداء</h2>
            <BarChart3 className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Progress Circle */}
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="relative w-32 h-32 mb-4">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.625)}`}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">62.5%</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">معدل النجاح</p>
            </div>

            {/* Stats List */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">نسبة الإجابات الصحيحة</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">من إجمالي الأسئلة المحلولة</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">82%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">متوسط الوقت للسؤال</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">الوقت المستغرق لكل سؤال</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.2 د</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">التحسن</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">مقارنة بالمحاولات السابقة</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">+12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="card mb-8">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900 dark:text-white">مستوى الصعوبة:</span>
            <div className="flex gap-2 flex-wrap">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty.id}
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDifficulty === difficulty.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {difficulty.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExams.map((exam) => {
            const difficultyBadge = getDifficultyBadge(exam.difficulty)
            const statusBadge = getStatusBadge(exam.status, exam.bestScore, exam.passingScore)
            
            return (
              <div key={exam.id} className="card-hover">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {exam.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {exam.description}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyBadge.color}`}>
                    {difficultyBadge.label}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${statusBadge.color}`}>
                    <statusBadge.icon className="w-3 h-3" />
                    {statusBadge.label}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                    {exam.category}
                  </span>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">عدد الأسئلة</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{exam.questions} سؤال</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">المدة</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{exam.duration} دقيقة</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">درجة النجاح</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{exam.passingScore}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">المحاولات</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{exam.attempts} {exam.attempts === 0 ? '' : exam.attempts === 1 ? 'محاولة' : 'محاولات'}</p>
                  </div>
                </div>

                {/* Last Attempt */}
                {exam.lastAttempt && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    آخر محاولة: {exam.lastAttempt}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>{exam.status === 'not_started' ? 'ابدأ الاختبار' : 'إعادة المحاولة'}</span>
                  </button>
                  {exam.status !== 'not_started' && (
                    <button className="btn-secondary flex items-center justify-center gap-2 px-4">
                      <BarChart3 className="w-4 h-4" />
                      <span>النتائج</span>
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <FlaskConical className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              لا توجد اختبارات
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              جرب تغيير مستوى الصعوبة
            </p>
          </div>
        )}

        {/* Tips Section */}
        <div className="card mt-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            💡 نصائح للنجاح في الاختبار
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>اقرأ السؤال بعناية قبل اختيار الإجابة</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>راجع إجاباتك قبل تسليم الاختبار</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>لا تقضِ وقتاً طويلاً على سؤال واحد، انتقل وعد إليه لاحقاً</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>استخدم تقنية الاستبعاد للإجابات الخاطئة الواضحة</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
