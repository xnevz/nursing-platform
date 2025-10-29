import { CreditCard, Smartphone, DollarSign } from 'lucide-react'

export default function PaymentGateways() {
  const paymentMethods = [
    {
      name: 'Visa',
      icon: CreditCard,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Apple Pay',
      icon: Smartphone,
      color: 'text-gray-900 dark:text-white',
      bg: 'bg-gray-100 dark:bg-gray-800'
    },
    {
      name: 'PayPal',
      icon: DollarSign,
      color: 'text-blue-500 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
  ]

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">بوابات الدفع</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        بعد الدفع، يتم تفعيل الدورة مباشرة في حسابك.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className={`${method.bg} ${method.color} p-6 rounded-lg flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all cursor-pointer group`}
          >
            <method.icon className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg">{method.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          جميع المعاملات آمنة ومشفرة 🔒
        </p>
      </div>
    </div>
  )
}
