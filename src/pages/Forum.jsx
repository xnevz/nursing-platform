import { useState } from 'react'
import { MessageSquare, ThumbsUp, MessageCircle, Eye, Clock, TrendingUp, Search, Filter, Plus, Award, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')

  const categories = [
    { id: 'all', name: 'الكل', count: 156, icon: MessageSquare },
    { id: 'experiences', name: 'تجارب النجاح', count: 45, icon: Award },
    { id: 'tips', name: 'نصائح وإرشادات', count: 38, icon: TrendingUp },
    { id: 'questions', name: 'أسئلة واستفسارات', count: 52, icon: MessageCircle },
    { id: 'resources', name: 'مصادر ومراجع', count: 21, icon: CheckCircle },
  ]

  const sortOptions = [
    { id: 'recent', name: 'الأحدث' },
    { id: 'popular', name: 'الأكثر شعبية' },
    { id: 'trending', name: 'الأكثر تفاعلاً' },
  ]

  const posts = [
    {
      id: 1,
      title: 'تجربتي في اجتياز اختبار الهيئة من المحاولة الأولى 🎉',
      content: 'السلام عليكم، أحببت أن أشارككم تجربتي في اجتياز اختبار الهيئة السعودية للتخصصات الصحية. بعد 3 أشهر من التحضير المكثف، الحمد لله نجحت من المحاولة الأولى بدرجة 85%. أهم النصائح...',
      author: {
        name: 'سارة محمد',
        avatar: '👩‍⚕️',
        badge: 'خريج متميز',
        verified: true
      },
      category: 'experiences',
      likes: 124,
      comments: 45,
      views: 892,
      timeAgo: 'منذ ساعتين',
      tags: ['اختبار_الهيئة', 'نجاح', 'تجربة_شخصية'],
      isPinned: true
    },
    {
      id: 2,
      title: 'أفضل المصادر للتحضير لقسم التمريض الباطني',
      content: 'بناءً على طلب الكثيرين، جمعت لكم أفضل المصادر والكتب التي ساعدتني في التحضير لقسم التمريض الباطني. القائمة تشمل كتب، فيديوهات، وتطبيقات مفيدة...',
      author: {
        name: 'أحمد خالد',
        avatar: '👨‍⚕️',
        badge: 'مساهم نشط',
        verified: false
      },
      category: 'resources',
      likes: 89,
      comments: 23,
      views: 567,
      timeAgo: 'منذ 5 ساعات',
      tags: ['مصادر', 'تمريض_باطني', 'كتب'],
      isPinned: false
    },
    {
      id: 3,
      title: 'كيف أتعامل مع ضغط الوقت في الاختبار؟',
      content: 'مرحباً جميعاً، أنا على وشك دخول الاختبار وأشعر بالقلق من إدارة الوقت. هل لديكم نصائح حول كيفية توزيع الوقت بشكل فعال؟',
      author: {
        name: 'فاطمة علي',
        avatar: '👩‍⚕️',
        badge: 'عضو جديد',
        verified: false
      },
      category: 'questions',
      likes: 34,
      comments: 18,
      views: 234,
      timeAgo: 'منذ يوم',
      tags: ['استفسار', 'إدارة_وقت', 'نصائح'],
      isPinned: false
    },
    {
      id: 4,
      title: 'نصائح ذهبية لمراجعة ليلة الاختبار',
      content: 'من تجربتي الشخصية، ليلة الاختبار مهمة جداً. إليكم أهم النصائح التي طبقتها وساعدتني كثيراً: 1. لا تحاول دراسة مواضيع جديدة 2. راجع النقاط الأساسية فقط...',
      author: {
        name: 'محمد حسن',
        avatar: '👨‍⚕️',
        badge: 'خبير',
        verified: true
      },
      category: 'tips',
      likes: 156,
      comments: 32,
      views: 1203,
      timeAgo: 'منذ يومين',
      tags: ['نصائح', 'مراجعة', 'استعداد'],
      isPinned: false
    },
    {
      id: 5,
      title: 'تجربتي مع القلق والتوتر قبل الاختبار',
      content: 'أردت مشاركة تجربتي في التعامل مع القلق والتوتر. كنت أعاني من قلق شديد، لكن هذه الطرق ساعدتني كثيراً...',
      author: {
        name: 'نورة أحمد',
        avatar: '👩‍⚕️',
        badge: 'مساهم نشط',
        verified: false
      },
      category: 'experiences',
      likes: 78,
      comments: 27,
      views: 445,
      timeAgo: 'منذ 3 أيام',
      tags: ['تجربة_شخصية', 'قلق', 'صحة_نفسية'],
      isPinned: false
    },
    {
      id: 6,
      title: 'ما هي أصعب أقسام الاختبار؟',
      content: 'بناءً على تجاربكم، ما هي الأقسام التي وجدتموها الأصعب في اختبار الهيئة؟ وكيف تحضرتم لها؟',
      author: {
        name: 'عبدالله سعيد',
        avatar: '👨‍⚕️',
        badge: 'عضو جديد',
        verified: false
      },
      category: 'questions',
      likes: 45,
      comments: 38,
      views: 567,
      timeAgo: 'منذ 4 أيام',
      tags: ['استفسار', 'صعوبة', 'أقسام'],
      isPinned: false
    },
  ]

  const topContributors = [
    { name: 'سارة محمد', avatar: '👩‍⚕️', posts: 45, likes: 892 },
    { name: 'محمد حسن', avatar: '👨‍⚕️', posts: 38, likes: 756 },
    { name: 'أحمد خالد', avatar: '👨‍⚕️', posts: 32, likes: 634 },
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryBadge = (categoryId) => {
    const config = {
      experiences: { label: 'تجارب النجاح', color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' },
      tips: { label: 'نصائح', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' },
      questions: { label: 'سؤال', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' },
      resources: { label: 'مصادر', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' },
    }
    return config[categoryId] || config.tips
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            💬 منتدى التجارب
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            شارك تجربتك، استفد من خبرات الآخرين، وتواصل مع زملائك
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">إجمالي المنشورات</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">الأعضاء النشطون</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
              </div>
              <div className="bg-green-500 p-3 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">التعليقات</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">المشاهدات</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">15.3k</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <div className="card">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في المنتدى..."
                    className="input-field pr-10"
                  />
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field md:w-48"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>

                {/* New Post Button */}
                <button className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap">
                  <Plus className="w-4 h-4" />
                  <span>منشور جديد</span>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="card">
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => {
                const categoryBadge = getCategoryBadge(post.category)
                
                return (
                  <div
                    key={post.id}
                    className={`card-hover ${post.isPinned ? 'border-r-4 border-yellow-500' : ''}`}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{post.author.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-gray-900 dark:text-white">
                                {post.author.name}
                              </h3>
                              {post.author.verified && (
                                <CheckCircle className="w-4 h-4 text-blue-500" />
                              )}
                              <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs rounded-full">
                                {post.author.badge}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <Clock className="w-3 h-3" />
                              <span>{post.timeAgo}</span>
                            </div>
                          </div>
                          {post.isPinned && (
                            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs rounded-full flex items-center gap-1">
                              📌 مثبت
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {post.content}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryBadge.color}`}>
                        {categoryBadge.label}
                      </span>
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </button>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{post.views}</span>
                        </div>
                      </div>
                      <button className="text-sm text-primary hover:text-primary-hover font-medium">
                        اقرأ المزيد ←
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="card text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  لا توجد منشورات
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  جرب تغيير الفئة أو البحث
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                أكثر المساهمين
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-3xl">{contributor.avatar}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {contributor.name}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                        <span>{contributor.posts} منشور</span>
                        <span>•</span>
                        <span>{contributor.likes} إعجاب</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forum Rules */}
            <div className="card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                📋 قواعد المنتدى
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>احترم الآخرين وكن لطيفاً</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>شارك محتوى مفيد وذو قيمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>لا تنشر معلومات خاطئة</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>استخدم العناوين الواضحة</span>
                </li>
              </ul>
            </div>

            {/* Trending Tags */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                🔥 الوسوم الرائجة
              </h3>
              <div className="flex flex-wrap gap-2">
                {['اختبار_الهيئة', 'نصائح', 'تجربة_شخصية', 'مصادر', 'تمريض_باطني', 'نجاح'].map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
