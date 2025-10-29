import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CreditCard, Lock, CheckCircle, ArrowRight, Tag, Gift } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Checkout() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  // بيانات الدورات (يمكن نقلها لملف مشترك)
  const courses = {
    2: {
      id: 2,
      title: 'العناية بمرضى السكري',
      thumbnail: '💉',
      price: 349,
      originalPrice: 549,
      discount: 36,
      instructor: 'د. محمد خالد'
    },
    5: {
      id: 5,
      title: 'صحة الأم والطفل',
      thumbnail: '🤱',
      price: 299,
      originalPrice: 499,
      discount: 40,
      instructor: 'د. فاطمة علي'
    },
    6: {
      id: 6,
      title: 'التمريض النفسي الأساسي',
      thumbnail: '🧠',
      price: 399,
      originalPrice: 599,
      discount: 33,
      instructor: 'د. أحمد حسن'
    },
    7: {
      id: 7,
      title: 'الإسعافات الأولية المتقدمة',
      thumbnail: '🚑',
      price: 249,
      originalPrice: 399,
      discount: 38,
      instructor: 'د. خالد محمود'
    },
    8: {
      id: 8,
      title: 'إدارة الألم والعناية التلطيفية',
      thumbnail: '💊',
      price: 199,
      originalPrice: 349,
      discount: 43,
      instructor: 'د. نورة السالم'
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

  const paymentMethods = [
    { id: 'credit-card', name: 'بطاقة ائتمان', icon: '💳', description: 'Visa, Mastercard, Mada' },
    { id: 'apple-pay', name: 'Apple Pay', icon: '🍎', description: 'الدفع السريع والآمن' },
    { id: 'stc-pay', name: 'STC Pay', icon: '📱', description: 'الدفع عبر STC Pay' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️', description: 'الدفع عبر PayPal' },
  ]

  const validCoupons = {
    'NURSING2025': { discount: 10, type: 'percentage' },
    'FIRST50': { discount: 50, type: 'fixed' },
    'WELCOME': { discount: 15, type: 'percentage' }
  }

  const applyCoupon = () => {
    if (validCoupons[couponCode]) {
      setAppliedCoupon({ code: couponCode, ...validCoupons[couponCode] })
    } else {
      alert('كود الخصم غير صحيح')
    }
  }

  const calculateTotal = () => {
    let total = course.price
    const vat = total * 0.15 // ضريبة القيمة المضافة 15%
    
    if (appliedCoupon) {
      if (appliedCoupon.type === 'percentage') {
        total = total - (total * appliedCoupon.discount / 100)
      } else {
        total = total - appliedCoupon.discount
      }
    }
    
    return {
      subtotal: course.price,
      discount: appliedCoupon ? (appliedCoupon.type === 'percentage' ? course.price * appliedCoupon.discount / 100 : appliedCoupon.discount) : 0,
      vat: total * 0.15,
      total: total + (total * 0.15)
    }
  }

  const totals = calculateTotal()

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // محاكاة عملية الدفع
    setTimeout(() => {
      setIsProcessing(false)
      // عرض رسالة نجاح
      alert('تم الدفع بنجاح! ستتم إعادة توجيهك إلى الدورة')
      navigate(`/course/${id}`)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(`/course/${id}`)}
            className="text-primary hover:text-primary-hover mb-4 flex items-center gap-2"
          >
            ← العودة للدورة
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🛒 إتمام عملية الشراء
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            أكمل بياناتك لشراء الدورة والبدء في التعلم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                💳 طريقة الدفع
              </h2>
              
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-right ${
                      paymentMethod === method.id
                        ? 'border-primary bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">{method.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle className="w-6 h-6 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Details */}
            {paymentMethod === 'credit-card' && (
              <div className="card">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  📝 بيانات البطاقة
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      رقم البطاقة
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      اسم حامل البطاقة
                    </label>
                    <input
                      type="text"
                      placeholder="الاسم كما هو مكتوب على البطاقة"
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        تاريخ الانتهاء
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Information */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                📍 معلومات الفوترة
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="مطارد العنزي"
                    defaultValue="مطارد العنزي"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    defaultValue="mohammed.ahmed@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    رقم الجوال
                  </label>
                  <input
                    type="tel"
                    placeholder="+966 50 123 4567"
                    defaultValue="+966 50 123 4567"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    المدينة
                  </label>
                  <input
                    type="text"
                    placeholder="الرياض"
                    defaultValue="الرياض"
                    className="input-field"
                  />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="card bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    🔒 دفع آمن ومشفر
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    جميع معلومات الدفع محمية بتشفير SSL 256-bit. نحن لا نحتفظ بمعلومات بطاقتك الائتمانية.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                📋 ملخص الطلب
              </h2>

              {/* Course Info */}
              <div className="flex items-start gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-5xl">{course.thumbnail}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {course.instructor}
                  </p>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Gift className="w-4 h-4 inline ml-1" />
                  كود الخصم
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="أدخل الكود"
                    className="input-field flex-1"
                    disabled={appliedCoupon}
                  />
                  {!appliedCoupon ? (
                    <button
                      onClick={applyCoupon}
                      className="btn-secondary px-4"
                    >
                      تطبيق
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setAppliedCoupon(null)
                        setCouponCode('')
                      }}
                      className="btn-secondary px-4"
                    >
                      إلغاء
                    </button>
                  )}
                </div>
                {appliedCoupon && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    تم تطبيق كود الخصم بنجاح!
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <span>السعر الأصلي</span>
                  <span className="line-through">{course.originalPrice} ر.س</span>
                </div>
                <div className="flex items-center justify-between text-green-600 dark:text-green-400">
                  <span>خصم الدورة ({course.discount}%)</span>
                  <span>-{course.originalPrice - course.price} ر.س</span>
                </div>
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <span>المجموع الفرعي</span>
                  <span>{totals.subtotal.toFixed(2)} ر.س</span>
                </div>
                {appliedCoupon && (
                  <div className="flex items-center justify-between text-green-600 dark:text-green-400">
                    <span>خصم الكوبون ({appliedCoupon.code})</span>
                    <span>-{totals.discount.toFixed(2)} ر.س</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <span>ضريبة القيمة المضافة (15%)</span>
                  <span>{totals.vat.toFixed(2)} ر.س</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  الإجمالي
                </span>
                <span className="text-3xl font-bold text-primary">
                  {totals.total.toFixed(2)} ر.س
                </span>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري المعالجة...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>إتمام الدفع الآن</span>
                  </>
                )}
              </button>

              {/* Money Back Guarantee */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💰 ضمان استرجاع المال خلال 30 يوم
                </p>
              </div>

              {/* What You Get */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  ✨ ما ستحصل عليه:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>وصول فوري للدورة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>وصول مدى الحياة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>شهادة معتمدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>دعم فني 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
