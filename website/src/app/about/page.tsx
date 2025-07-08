import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-emerald-300 transition-colors">
            ← 返回首页
          </Link>
          <h2 className="text-xl font-semibold">关于我们</h2>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-12">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
            关于我们
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            我们致力于创造更好的数字体验，用创新的技术解决实际问题
          </p>
        </div>

        {/* 内容区块 */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* 我们的故事 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-emerald-300">我们的故事</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              我们从一个简单的想法开始：让技术真正服务于人类。通过不断的创新和努力，
              我们已经成长为一个专业的技术团队，专注于前端开发、用户体验设计和数字化解决方案。
            </p>
            <p className="text-gray-300 leading-relaxed">
              每一个项目都承载着我们对完美的追求，每一行代码都体现着我们对品质的坚持。
            </p>
          </div>

          {/* 我们的使命 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">我们的使命</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              通过先进的技术和创新的思维，为客户提供最优质的数字化解决方案。
              我们相信技术的力量，也相信人文关怀的重要性。
            </p>
            <p className="text-gray-300 leading-relaxed">
              让每一个用户都能享受到流畅、美观、高效的数字体验。
            </p>
          </div>
        </div>

        {/* 团队特色 */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-white">团队特色</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-emerald-500/20 to-emerald-600/20 rounded-xl p-6 border border-emerald-500/30">
              <div className="text-emerald-400 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">快速响应</h4>
              <p className="text-gray-300 text-sm">敏捷开发，快速迭代，让想法快速变成现实</p>
            </div>

            <div className="bg-gradient-to-b from-teal-500/20 to-teal-600/20 rounded-xl p-6 border border-teal-500/30">
              <div className="text-teal-400 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">品质保证</h4>
              <p className="text-gray-300 text-sm">严格的质量控制，确保每一个交付都是精品</p>
            </div>

            <div className="bg-gradient-to-b from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-500/30">
              <div className="text-cyan-400 mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">用户至上</h4>
              <p className="text-gray-300 text-sm">以用户体验为核心，创造真正有价值的产品</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 