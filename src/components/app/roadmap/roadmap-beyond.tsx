import { ROADMAP_DATA } from '@/lib/constants'

export function RoadmapBeyond() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-brand-emerald dark:text-white text-center mb-12">2026 & Beyond</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(ROADMAP_DATA['2026']).map(([quarter, items]) => (
          <div
            key={quarter}
            className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-emerald/20"
          >
            <h3 className="text-xl font-semibold text-brand-emerald dark:text-white mb-4">{quarter} 2026</h3>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-emerald dark:bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-brand-emerald dark:text-white">{item.title}</h4>
                    <p className="text-brand-emerald/80 dark:text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
