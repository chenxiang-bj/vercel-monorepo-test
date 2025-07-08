'use client';

import { useState } from 'react';

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [messages, setMessages] = useState<Array<{type: 'ai' | 'user', text: string}>>([]);

  const handleStartDemo = () => {
    setIsStarted(true);
    const demoMessages = [
      { type: 'ai' as const, text: '👋 你好！我是 AI 智能助手，很高兴为您服务！' },
      { type: 'user' as const, text: '你能帮我做什么？' },
      { type: 'ai' as const, text: '我可以帮助您解答问题、提供建议、分析数据、创作内容等。让我们开始探索 AI 的无限可能吧！' }
    ];
    
    // 模拟逐条显示消息
    demoMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 1500);
    });
  };

  const resetDemo = () => {
    setIsStarted(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* 主要内容区域 */}
      <main className="container mx-auto px-4 py-16">
        {/* 英雄区域 */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-8 animate-bounce">🤖</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 智能助手
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            体验下一代人工智能技术的强大功能，让智能改变您的工作和生活方式
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            我们的 AI 助手集成了最先进的机器学习算法，能够理解自然语言、提供智能分析，
            为您提供个性化的解决方案。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={isStarted ? resetDemo : handleStartDemo}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 
                         text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 
                         transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
            >
              {isStarted ? '🔄 重新开始' : '🚀 开始体验'}
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white 
                             font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 
                             transform hover:scale-105 backdrop-blur-sm">
              📚 了解更多
            </button>
          </div>
        </div>

        {/* 演示区域 */}
        {isStarted && (
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">💬 AI 对话演示</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                  >
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                        : 'bg-white/20 text-white border border-white/30'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{msg.type === 'user' ? '👤' : '🤖'}</span>
                        <span className="text-sm opacity-75">{msg.type === 'user' ? '用户' : 'AI 助手'}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 功能特性区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">智能分析</h3>
            <p className="text-blue-100">
              深度学习算法驱动，提供精准的数据分析和洞察，帮助您做出更明智的决策。
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">极速响应</h3>
            <p className="text-blue-100">
              毫秒级响应速度，实时处理您的请求，无论是简单问答还是复杂任务。
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-white/20">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">个性化服务</h3>
            <p className="text-blue-100">
              根据您的需求和偏好，提供量身定制的解决方案和建议。
            </p>
          </div>
        </div>

        {/* 统计数据区域 */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-3xl p-8 mb-16 backdrop-blur-lg border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-8">🏆 用户信赖的选择</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-lg">活跃用户</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg">服务可用性</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg">全天候服务</div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-black/20 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-blue-200 mb-4">
            © 2024 AI 智能助手 - 让人工智能成为您最好的伙伴
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-300 hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">服务条款</a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">联系我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
