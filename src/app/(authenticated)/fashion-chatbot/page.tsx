'use client'

import { useState } from 'react'
import { Input, Button, List, Typography, Row, Col, Spin } from 'antd'
import { SendOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FashionChatbotPage() {
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    [],
  )
  const [inputValue, setInputValue] = useState<string>('')

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      enqueueSnackbar('Please enter a message', { variant: 'info' })
      return
    }

    const userMessage = { text: inputValue, isUser: true }
    setMessages([...messages, userMessage])
    setInputValue('')

    try {
      const response = await generateText({ prompt: inputValue })
      const botMessage = { text: response.answer, isUser: false }
      setMessages(prevMessages => [...prevMessages, botMessage])
    } catch (error) {
      enqueueSnackbar('Failed to get response from chatbot', {
        variant: 'error',
      })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Fashion Chatbot</Title>
          <Text>
            Engage in real-time conversations with our fashion chatbot. Ask for
            styling advice and fashion tips, and receive instant responses and
            recommendations.
          </Text>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <List
            bordered
            dataSource={messages}
            renderItem={item => (
              <List.Item style={{ textAlign: item.isUser ? 'right' : 'left' }}>
                <Text strong={item.isUser}>{item.text}</Text>
              </List.Item>
            )}
            style={{
              marginBottom: '20px',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
          />
        </Col>
      </Row>
      <Row justify="center" gutter={16}>
        <Col span={20}>
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Type your message here..."
            onPressEnter={handleSendMessage}
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
