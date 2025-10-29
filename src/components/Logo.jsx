import { Activity } from 'lucide-react'

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary text-white p-2 rounded-lg">
        <Activity className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 dark:text-white">تمريض بلس</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Nursing Plus</span>
      </div>
    </div>
  )
}
