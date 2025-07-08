import { useState } from 'react'
import './App.css'

function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="ai-app">
      <div className="hero-section">
        <div className="ai-icon">🤖</div>
        <h1 className="ai-title">AI Assistant</h1>
        <p className="ai-subtitle">
          体验下一代人工智能助手的强大功能
        </p>
        <p className="ai-description">
          我们的 AI 助手能够帮助您解决各种问题，提供智能化的解决方案，
          让您的工作更加高效便捷。
        </p>
        
        <div className="button-group">
          <button 
            className="primary-button"
            onClick={() => setIsStarted(!isStarted)}
          >
            {isStarted ? '重新开始' : '开始体验'}
          </button>
          <button className="secondary-button">
            了解更多
          </button>
        </div>

        {isStarted && (
          <div className="demo-section">
            <div className="chat-demo">
              <div className="message ai-message">
                <span className="message-icon">🤖</span>
                <span>你好！我是您的 AI 助手，有什么可以帮助您的吗？</span>
              </div>
              <div className="message user-message">
                <span>帮我介绍一下这个产品</span>
                <span className="message-icon">👤</span>
              </div>
              <div className="message ai-message">
                <span className="message-icon">🤖</span>
                <span>这是一个演示 AI 助手的简单页面，展示了现代 AI 技术的可能性...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>核心功能</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>智能对话</h3>
            <p>自然语言处理，理解您的需求</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>快速响应</h3>
            <p>毫秒级响应，实时处理您的请求</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>精准分析</h3>
            <p>深度学习算法，提供准确的结果</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
