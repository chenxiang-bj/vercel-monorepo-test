import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the main title', () => {
    render(<App />)
    
    const title = screen.getByRole('heading', { name: /ai assistant/i })
    expect(title).toBeInTheDocument()
  })

  it('renders the subtitle and description', () => {
    render(<App />)
    
    const subtitle = screen.getByText(/体验下一代人工智能助手的强大功能/)
    const description = screen.getByText(/我们的 AI 助手能够帮助您解决各种问题/)
    
    expect(subtitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders all feature cards', () => {
    render(<App />)
    
    const features = ['智能对话', '快速响应', '精准分析']
    
    features.forEach(feature => {
      const featureElement = screen.getByText(feature)
      expect(featureElement).toBeInTheDocument()
    })
  })

  it('renders feature descriptions', () => {
    render(<App />)
    
    const descriptions = [
      /自然语言处理，理解您的需求/,
      /毫秒级响应，实时处理您的请求/,
      /深度学习算法，提供准确的结果/
    ]
    
    descriptions.forEach(description => {
      const descriptionElement = screen.getByText(description)
      expect(descriptionElement).toBeInTheDocument()
    })
  })

  it('shows "开始体验" button initially', () => {
    render(<App />)
    
    const startButton = screen.getByRole('button', { name: /开始体验/ })
    expect(startButton).toBeInTheDocument()
  })

  it('shows "了解更多" button', () => {
    render(<App />)
    
    const learnMoreButton = screen.getByRole('button', { name: /了解更多/ })
    expect(learnMoreButton).toBeInTheDocument()
  })

  it('does not show demo section initially', () => {
    render(<App />)
    
    const demoSection = screen.queryByText(/你好！我是您的 AI 助手/)
    expect(demoSection).not.toBeInTheDocument()
  })

  it('toggles demo section when clicking start button', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const startButton = screen.getByRole('button', { name: /开始体验/ })
    
    // Click to show demo
    await user.click(startButton)
    
    // Check if demo section appears
    const demoMessage = screen.getByText(/你好！我是您的 AI 助手/)
    expect(demoMessage).toBeInTheDocument()
    
    // Check if button text changes
    expect(startButton).toHaveTextContent('重新开始')
    
    // Click to hide demo
    await user.click(startButton)
    
    // Check if demo section disappears
    expect(screen.queryByText(/你好！我是您的 AI 助手/)).not.toBeInTheDocument()
    
    // Check if button text changes back
    expect(startButton).toHaveTextContent('开始体验')
  })

  it('shows all demo messages when demo is active', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const startButton = screen.getByRole('button', { name: /开始体验/ })
    await user.click(startButton)
    
    const demoMessages = [
      /你好！我是您的 AI 助手/,
      /帮我介绍一下这个产品/,
      /这是一个演示 AI 助手的简单页面/
    ]
    
    demoMessages.forEach(message => {
      const messageElement = screen.getByText(message)
      expect(messageElement).toBeInTheDocument()
    })
  })

  it('renders AI and user message icons', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const startButton = screen.getByRole('button', { name: /开始体验/ })
    await user.click(startButton)
    
    // Check for AI robot icons
    const aiIcons = screen.getAllByText('🤖')
    expect(aiIcons.length).toBeGreaterThan(1) // At least one in hero section + demo messages
    
    // Check for user icon
    const userIcon = screen.getByText('👤')
    expect(userIcon).toBeInTheDocument()
  })

}) 