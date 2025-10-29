import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BookOpen, Clock, Award, Star, Users, PlayCircle, Lock, CheckCircle, ChevronDown, ChevronUp, ShoppingCart, CreditCard } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function CourseDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [expandedModule, setExpandedModule] = useState(null)

  // بيانات الدورات (يمكن نقلها لملف منفصل أو API)
  const courses = {
    1: {
      id: 1,
      title: 'أساسيات التمريض الباطني',
      description: 'دورة شاملة تغطي جميع جوانب التمريض الباطني والرعاية الصحية للمرضى. تتضمن الدورة شرحاً مفصلاً للأمراض الباطنية الشائعة، طرق التشخيص، والعلاج، بالإضافة إلى المهارات العملية اللازمة للممرضين.',
      thumbnail: '🏥',
      category: 'medical',
      instructor: {
        name: 'د. سارة أحمد',
        avatar: '👩‍⚕️',
        bio: 'خبيرة في التمريض الباطني مع 15 سنة خبرة',
        rating: 4.9,
        students: 1250
      },
      price: 499,
      originalPrice: 799,
      discount: 38,
      duration: '45 ساعة',
      lessonsCount: 8,
      studentsCount: 1250,
      rating: 4.8,
      reviewsCount: 342,
      level: 'متوسط',
      language: 'العربية',
      certificate: true,
      isPurchased: true,
      modules: [
        {
          id: 1,
          title: 'مقدمة في التمريض الباطني',
          duration: '2 ساعة',
          lessons: [
            { id: 1, title: 'نظرة عامة على التمريض الباطني', duration: '15 دقيقة', type: 'video', completed: true, locked: false },
            { id: 2, title: 'دور الممرض في الرعاية الباطنية', duration: '20 دقيقة', type: 'video', completed: true, locked: false },
            { id: 3, title: 'أخلاقيات المهنة', duration: '25 دقيقة', type: 'video', completed: false, locked: false },
            { id: 4, title: 'اختبار الوحدة الأولى', duration: '10 دقائق', type: 'quiz', completed: false, locked: false }
          ]
        },
        {
          id: 2,
          title: 'أمراض القلب والأوعية الدموية',
          duration: '8 ساعات',
          lessons: [
            { id: 5, title: 'تشريح القلب والأوعية الدموية', duration: '30 دقيقة', type: 'video', completed: false, locked: false },
            { id: 6, title: 'أمراض القلب الشائعة', duration: '45 دقيقة', type: 'video', completed: false, locked: false },
            { id: 7, title: 'ارتفاع ضغط الدم', duration: '40 دقيقة', type: 'video', completed: false, locked: false },
            { id: 8, title: 'العناية بمرضى القلب', duration: '50 دقيقة', type: 'video', completed: false, locked: false },
            { id: 9, title: 'حالات عملية', duration: '35 دقيقة', type: 'reading', completed: false, locked: false },
            { id: 10, title: 'اختبار الوحدة الثانية', duration: '15 دقيقة', type: 'quiz', completed: false, locked: false }
          ]
        },
        {
          id: 3,
          title: 'أمراض الجهاز التنفسي',
          duration: '6 ساعات',
          lessons: [
            { id: 11, title: 'تشريح الجهاز التنفسي', duration: '25 دقيقة', type: 'video', completed: false, locked: false },
            { id: 12, title: 'الربو والحساسية', duration: '35 دقيقة', type: 'video', completed: false, locked: false },
            { id: 13, title: 'الالتهاب الرئوي', duration: '30 دقيقة', type: 'video', completed: false, locked: false },
            { id: 14, title: 'العناية التنفسية', duration: '40 دقيقة', type: 'video', completed: false, locked: false }
          ]
        }
      ],
      features: [
        'محتوى فيديو عالي الجودة',
        'اختبارات تفاعلية',
        'شهادة معتمدة عند الإتمام',
        'دعم فني على مدار الساعة',
        'وصول مدى الحياة',
        'تحديثات مجانية'
      ],
      requirements: [
        'معرفة أساسية بالتمريض',
        'اتصال بالإنترنت',
        'الرغبة في التعلم والتطوير'
      ],
      whatYouWillLearn: [
        'فهم شامل للأمراض الباطنية الشائعة',
        'مهارات التشخيص والتقييم',
        'طرق العلاج والرعاية الصحيحة',
        'التعامل مع الحالات الطارئة',
        'مهارات التواصل مع المرضى',
        'إدارة الأدوية بشكل صحيح'
      ]
    },
    2: {
      id: 2,
      title: 'العناية بمرضى السكري',
      description: 'دليل شامل للعناية بمرضى السكري وإدارة الحالات الحرجة. تعلم كيفية التعامل مع مرضى السكري من النوع الأول والثاني، إدارة الأنسولين، والوقاية من المضاعفات.',
      thumbnail: '💉',
      category: 'medical',
      instructor: {
        name: 'د. محمد خالد',
        avatar: '👨‍⚕️',
        bio: 'متخصص في رعاية مرضى السكري',
        rating: 4.7,
        students: 890
      },
      price: 349,
      originalPrice: 549,
      discount: 36,
      duration: '30 ساعة',
      lessonsCount: 5,
      studentsCount: 890,
      rating: 4.7,
      reviewsCount: 215,
      level: 'مبتدئ',
      language: 'العربية',
      certificate: true,
      isPurchased: false,
      modules: [
        {
          id: 1,
          title: 'مقدمة في مرض السكري',
          duration: '3 ساعات',
          lessons: [
            { id: 1, title: 'ما هو مرض السكري؟', duration: '20 دقيقة', type: 'video', completed: false, locked: true },
            { id: 2, title: 'أنواع السكري', duration: '25 دقيقة', type: 'video', completed: false, locked: true },
            { id: 3, title: 'الأعراض والتشخيص', duration: '30 دقيقة', type: 'video', completed: false, locked: true }
          ]
        },
        {
          id: 2,
          title: 'إدارة الأنسولين',
          duration: '5 ساعات',
          lessons: [
            { id: 4, title: 'أنواع الأنسولين', duration: '35 دقيقة', type: 'video', completed: false, locked: true },
            { id: 5, title: 'طرق الحقن الصحيحة', duration: '40 دقيقة', type: 'video', completed: false, locked: true },
            { id: 6, title: 'حساب الجرعات', duration: '30 دقيقة', type: 'video', completed: false, locked: true }
          ]
        },
        {
          id: 3,
          title: 'المضاعفات والوقاية',
          duration: '4 ساعات',
          lessons: [
            { id: 7, title: 'المضاعفات الحادة', duration: '35 دقيقة', type: 'video', completed: false, locked: true },
            { id: 8, title: 'المضاعفات المزمنة', duration: '40 دقيقة', type: 'video', completed: false, locked: true },
            { id: 9, title: 'الوقاية والمتابعة', duration: '30 دقيقة', type: 'video', completed: false, locked: true }
          ]
        }
      ],
      features: [
        'محتوى متخصص في رعاية مرضى السكري',
        'حالات عملية واقعية',
        'شهادة معتمدة',
        'وصول مدى الحياة'
      ],
      requirements: [
        'معرفة أساسية بالتمريض',
        'الرغبة في التخصص'
      ],
      whatYouWillLearn: [
        'فهم شامل لمرض السكري',
        'إدارة الأنسولين بشكل احترافي',
        'التعامل مع المضاعفات',
        'تثقيف المرضى'
      ]
    },
    3: {
      id: 3,
      title: 'التمريض الجراحي المتقدم',
      description: 'تقنيات متقدمة في التمريض الجراحي والعناية بعد العمليات. دورة شاملة تغطي جميع جوانب التمريض الجراحي من التحضير قبل العملية إلى الرعاية بعد العملية.',
      thumbnail: '🔬',
      category: 'surgical',
      instructor: {
        name: 'د. محمد خالد',
        avatar: '👨‍⚕️',
        bio: 'خبير في التمريض الجراحي مع 12 سنة خبرة',
        rating: 4.8,
        students: 890
      },
      price: 549,
      originalPrice: 899,
      discount: 39,
      duration: '60 ساعة',
      lessonsCount: 10,
      studentsCount: 890,
      rating: 4.8,
      reviewsCount: 267,
      level: 'متقدم',
      language: 'العربية',
      certificate: true,
      isPurchased: true,
      modules: [
        {
          id: 1,
          title: 'التحضير قبل العملية',
          duration: '8 ساعات',
          lessons: [
            { id: 1, title: 'تقييم المريض قبل الجراحة', duration: '30 دقيقة', type: 'video', completed: true, locked: false },
            { id: 2, title: 'التحضيرات الجسدية والنفسية', duration: '35 دقيقة', type: 'video', completed: true, locked: false },
            { id: 3, title: 'الفحوصات المطلوبة', duration: '25 دقيقة', type: 'video', completed: false, locked: false }
          ]
        },
        {
          id: 2,
          title: 'العناية أثناء العملية',
          duration: '12 ساعة',
          lessons: [
            { id: 4, title: 'دور الممرض في غرفة العمليات', duration: '40 دقيقة', type: 'video', completed: false, locked: false },
            { id: 5, title: 'التعقيم والسلامة', duration: '35 دقيقة', type: 'video', completed: false, locked: false },
            { id: 6, title: 'مراقبة العلامات الحيوية', duration: '30 دقيقة', type: 'video', completed: false, locked: false }
          ]
        },
        {
          id: 3,
          title: 'الرعاية بعد العملية',
          duration: '10 ساعات',
          lessons: [
            { id: 7, title: 'العناية في غرفة الإفاقة', duration: '35 دقيقة', type: 'video', completed: false, locked: false },
            { id: 8, title: 'إدارة الألم بعد الجراحة', duration: '40 دقيقة', type: 'video', completed: false, locked: false },
            { id: 9, title: 'الوقاية من المضاعفات', duration: '45 دقيقة', type: 'video', completed: false, locked: false }
          ]
        }
      ],
      features: [
        'محتوى فيديو عالي الجودة',
        'حالات عملية واقعية',
        'شهادة معتمدة عند الإتمام',
        'دعم فني على مدار الساعة',
        'وصول مدى الحياة',
        'تحديثات مجانية'
      ],
      requirements: [
        'معرفة متقدمة بالتمريض',
        'خبرة سابقة في التمريض الأساسي',
        'اتصال بالإنترنت'
      ],
      whatYouWillLearn: [
        'التحضير الشامل للعمليات الجراحية',
        'دور الممرض في غرفة العمليات',
        'تقنيات التعقيم والسلامة',
        'الرعاية المتقدمة بعد العملية',
        'إدارة المضاعفات الجراحية',
        'مهارات التواصل مع الفريق الطبي'
      ]
    },
    4: {
      id: 4,
      title: 'رعاية الأطفال حديثي الولادة',
      description: 'أساسيات العناية بالأطفال حديثي الولادة والخدج. دورة متخصصة تغطي جميع جوانب رعاية الأطفال حديثي الولادة والعناية المركزة.',
      thumbnail: '👶',
      category: 'pediatric',
      instructor: {
        name: 'د. فاطمة علي',
        avatar: '👩‍⚕️',
        bio: 'متخصصة في تمريض الأطفال وحديثي الولادة',
        rating: 5.0,
        students: 720
      },
      price: 449,
      originalPrice: 699,
      discount: 36,
      duration: '50 ساعة',
      lessonsCount: 7,
      studentsCount: 720,
      rating: 5.0,
      reviewsCount: 198,
      level: 'متوسط',
      language: 'العربية',
      certificate: true,
      isPurchased: true,
      modules: [
        {
          id: 1,
          title: 'أساسيات رعاية حديثي الولادة',
          duration: '10 ساعات',
          lessons: [
            { id: 1, title: 'تقييم حديث الولادة', duration: '30 دقيقة', type: 'video', completed: true, locked: false },
            { id: 2, title: 'الرضاعة الطبيعية', duration: '35 دقيقة', type: 'video', completed: false, locked: false },
            { id: 3, title: 'العناية بالحبل السري', duration: '20 دقيقة', type: 'video', completed: false, locked: false }
          ]
        },
        {
          id: 2,
          title: 'العناية بالخدج',
          duration: '15 ساعة',
          lessons: [
            { id: 4, title: 'خصائص الأطفال الخدج', duration: '40 دقيقة', type: 'video', completed: false, locked: false },
            { id: 5, title: 'التغذية الخاصة', duration: '35 دقيقة', type: 'video', completed: false, locked: false },
            { id: 6, title: 'مراقبة النمو والتطور', duration: '30 دقيقة', type: 'video', completed: false, locked: false }
          ]
        },
        {
          id: 3,
          title: 'الحالات الطارئة',
          duration: '8 ساعات',
          lessons: [
            { id: 7, title: 'الإنعاش القلبي الرئوي للأطفال', duration: '45 دقيقة', type: 'video', completed: false, locked: false }
          ]
        }
      ],
      features: [
        'محتوى متخصص في رعاية الأطفال',
        'فيديوهات توضيحية عالية الجودة',
        'شهادة معتمدة',
        'وصول مدى الحياة',
        'تحديثات مستمرة'
      ],
      requirements: [
        'معرفة أساسية بالتمريض',
        'الرغبة في التخصص في تمريض الأطفال'
      ],
      whatYouWillLearn: [
        'تقييم حديثي الولادة بشكل شامل',
        'تقنيات الرضاعة الطبيعية',
        'العناية بالأطفال الخدج',
        'التعامل مع الحالات الطارئة',
        'مراقبة النمو والتطور',
        'التواصل مع الأهل'
      ]
    },
    5: {
      id: 5,
      title: 'صحة الأم والطفل',
      description: 'دورة شاملة في الرعاية الصحية للأم أثناء الحمل والولادة وما بعدها',
      thumbnail: '🤱',
      category: 'maternal',
      instructor: {
        name: 'د. فاطمة علي',
        avatar: '👩‍⚕️',
        bio: 'متخصصة في صحة الأم والطفل',
        rating: 5.0,
        students: 650
      },
      price: 299,
      originalPrice: 499,
      discount: 40,
      duration: '40 ساعة',
      lessonsCount: 6,
      studentsCount: 650,
      rating: 5.0,
      reviewsCount: 180,
      level: 'مبتدئ',
      language: 'العربية',
      certificate: true,
      isPurchased: false,
      modules: [
        {
          id: 1,
          title: 'الحمل والرعاية قبل الولادة',
          duration: '15 ساعة',
          lessons: [
            { id: 1, title: 'مراحل الحمل', duration: '30 دقيقة', type: 'video', completed: false, locked: true },
            { id: 2, title: 'الفحوصات الدورية', duration: '25 دقيقة', type: 'video', completed: false, locked: true }
          ]
        }
      ],
      features: [
        'محتوى شامل عن صحة الأم',
        'حالات عملية',
        'شهادة معتمدة',
        'وصول مدى الحياة'
      ],
      requirements: ['معرفة أساسية بالتمريض'],
      whatYouWillLearn: [
        'رعاية الحامل',
        'التعامل مع الولادة',
        'العناية بعد الولادة',
        'صحة الطفل'
      ]
    },
    6: {
      id: 6,
      title: 'التمريض النفسي الأساسي',
      description: 'مبادئ التمريض النفسي والتعامل مع المرضى النفسيين',
      thumbnail: '🧠',
      category: 'psychiatric',
      instructor: {
        name: 'د. أحمد حسن',
        avatar: '👨‍⚕️',
        bio: 'خبير في التمريض النفسي',
        rating: 4.6,
        students: 420
      },
      price: 399,
      originalPrice: 599,
      discount: 33,
      duration: '55 ساعة',
      lessonsCount: 9,
      studentsCount: 420,
      rating: 4.6,
      reviewsCount: 95,
      level: 'متوسط',
      language: 'العربية',
      certificate: true,
      isPurchased: false,
      modules: [
        {
          id: 1,
          title: 'مقدمة في الصحة النفسية',
          duration: '10 ساعات',
          lessons: [
            { id: 1, title: 'الصحة النفسية والمرض النفسي', duration: '35 دقيقة', type: 'video', completed: false, locked: true }
          ]
        }
      ],
      features: [
        'محتوى متخصص',
        'شهادة معتمدة',
        'وصول مدى الحياة'
      ],
      requirements: ['معرفة أساسية بالتمريض'],
      whatYouWillLearn: [
        'مبادئ الصحة النفسية',
        'التعامل مع المرضى',
        'العلاج النفسي'
      ]
    },
    7: {
      id: 7,
      title: 'الإسعافات الأولية المتقدمة',
      description: 'تقنيات الإسعافات الأولية والتعامل مع الحالات الطارئة',
      thumbnail: '🚑',
      category: 'medical',
      instructor: {
        name: 'د. خالد محمود',
        avatar: '👨‍⚕️',
        bio: 'متخصص في طب الطوارئ',
        rating: 4.8,
        students: 980
      },
      price: 249,
      originalPrice: 399,
      discount: 38,
      duration: '35 ساعة',
      lessonsCount: 5,
      studentsCount: 980,
      rating: 4.8,
      reviewsCount: 220,
      level: 'مبتدئ',
      language: 'العربية',
      certificate: true,
      isPurchased: false,
      modules: [
        {
          id: 1,
          title: 'أساسيات الإسعافات الأولية',
          duration: '8 ساعات',
          lessons: [
            { id: 1, title: 'تقييم الحالة', duration: '25 دقيقة', type: 'video', completed: false, locked: true }
          ]
        }
      ],
      features: [
        'تدريب عملي',
        'شهادة معتمدة',
        'وصول مدى الحياة'
      ],
      requirements: ['لا يوجد متطلبات مسبقة'],
      whatYouWillLearn: [
        'الإنعاش القلبي الرئوي',
        'التعامل مع الجروح',
        'إدارة الطوارئ'
      ]
    },
    8: {
      id: 8,
      title: 'إدارة الألم والعناية التلطيفية',
      description: 'أساليب إدارة الألم والرعاية التلطيفية للمرضى',
      thumbnail: '💊',
      category: 'medical',
      instructor: {
        name: 'د. نورة السالم',
        avatar: '👩‍⚕️',
        bio: 'خبيرة في إدارة الألم',
        rating: 4.7,
        students: 340
      },
      price: 199,
      originalPrice: 349,
      discount: 43,
      duration: '25 ساعة',
      lessonsCount: 4,
      studentsCount: 340,
      rating: 4.7,
      reviewsCount: 78,
      level: 'متوسط',
      language: 'العربية',
      certificate: true,
      isPurchased: false,
      modules: [
        {
          id: 1,
          title: 'مقدمة في إدارة الألم',
          duration: '6 ساعات',
          lessons: [
            { id: 1, title: 'أنواع الألم', duration: '20 دقيقة', type: 'video', completed: false, locked: true }
          ]
        }
      ],
      features: [
        'محتوى متخصص',
        'شهادة معتمدة',
        'وصول مدى الحياة'
      ],
      requirements: ['معرفة أساسية بالتمريض'],
      whatYouWillLearn: [
        'تقييم الألم',
        'طرق العلاج',
        'العناية التلطيفية'
      ]
    }
  }

  const course = courses[id]

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">الدورة غير موجودة</h1>
          <button onClick={() => navigate('/materials')} className="btn-primary">
            العودة للمواد العلمية
          </button>
        </div>
      </div>
    )
  }

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId)
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <PlayCircle className="w-4 h-4" />
      case 'quiz': return <Award className="w-4 h-4" />
      case 'reading': return <BookOpen className="w-4 h-4" />
      default: return <BookOpen className="w-4 h-4" />
    }
  }

  const getTypeLabel = (type) => {
    switch(type) {
      case 'video': return 'فيديو'
      case 'quiz': return 'اختبار'
      case 'reading': return 'قراءة'
      default: return 'درس'
    }
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.completed).length, 0
  )
  const progress = course.isPurchased ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/materials')}
          className="text-primary hover:text-primary-hover mb-6 flex items-center gap-2"
        >
          ← العودة للمواد العلمية
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div className="card">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                  {course.thumbnail}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {course.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-gray-600 dark:text-gray-400">({course.reviewsCount} تقييم)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{course.studentsCount} طالب</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <BookOpen className="w-4 h-4" />
                      <span>{totalLessons} درس</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-4xl">{course.instructor.avatar}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{course.instructor.bio}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-semibold text-gray-900 dark:text-white">{course.instructor.rating}</span>
                </div>
              </div>
            </div>

            {/* What You Will Learn */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📚 ماذا ستتعلم؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📖 محتوى الدورة
              </h2>
              
              {course.isPurchased && progress > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      تقدمك في الدورة
                    </span>
                    <span className="text-sm font-bold text-primary">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-primary-light h-3 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {course.modules.map((module) => (
                  <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    {/* Module Header */}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-right">
                        <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                          {module.id}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">{module.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {module.lessons.length} دروس • {module.duration}
                          </p>
                        </div>
                      </div>
                      {expandedModule === module.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>

                    {/* Module Lessons */}
                    {expandedModule === module.id && (
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`p-4 flex items-center justify-between ${
                              lesson.locked ? 'opacity-60' : 'hover:bg-gray-50 dark:hover:bg-gray-800/30'
                            }`}
                          >
                            <div className="flex items-center gap-3 flex-1">
                              {lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : lesson.locked ? (
                                <Lock className="w-5 h-5 text-gray-400" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                              )}
                              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                {getTypeIcon(lesson.type)}
                                <span className="text-xs">{getTypeLabel(lesson.type)}</span>
                              </div>
                              <span className={`${
                                lesson.locked 
                                  ? 'text-gray-500 dark:text-gray-500' 
                                  : 'text-gray-900 dark:text-white'
                              }`}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {lesson.duration}
                              </span>
                              {lesson.locked && (
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                                  مغلق
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📋 المتطلبات
              </h2>
              <ul className="space-y-2">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-primary mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar - Purchase Card */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              {!course.isPurchased ? (
                <>
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-primary">{course.price} ر.س</span>
                      <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                        {course.originalPrice} ر.س
                      </span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-semibold">
                      خصم {course.discount}%
                    </span>
                  </div>

                  {/* Purchase Button */}
                  <button 
                    onClick={() => navigate(`/checkout/${course.id}`)}
                    className="btn-primary w-full mb-4 flex items-center justify-center gap-2 text-lg py-4"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>شراء الدورة الآن</span>
                  </button>

                  <button className="btn-secondary w-full mb-6 flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    <span>إضافة للسلة</span>
                  </button>

                  <div className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    💰 ضمان استرجاع المال خلال 30 يوم
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      أنت مسجل في هذه الدورة
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      تقدمك: {progress}%
                    </p>
                  </div>

                  <button className="btn-primary w-full mb-4 flex items-center justify-center gap-2">
                    <PlayCircle className="w-5 h-5" />
                    <span>متابعة التعلم</span>
                  </button>
                </>
              )}

              {/* Features */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">هذه الدورة تتضمن:</h3>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">المستوى</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">اللغة</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.language}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">الشهادة</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {course.certificate ? 'نعم ✓' : 'لا'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
