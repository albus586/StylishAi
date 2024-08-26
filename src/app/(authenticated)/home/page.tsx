'use client'

import { Typography, Row, Col, Card } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
  SmileOutlined,
  UploadOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout layout="narrow">
      <Row
        justify="center"
        align="middle"
        style={{ textAlign: 'center', padding: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Welcome to Stylist AI</Title>
          <Paragraph>
            Discover the amazing features of Stylist AI. Navigate through the
            sections to explore more.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/text-to-outfit')}
            cover={
              <HomeOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="Text to Outfit Generator"
              description="Generate outfits from text descriptions."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/human-identification')}
            cover={
              <UserOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="Human Identification"
              description="Identify human body measurements."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/outfit-recommendation')}
            cover={
              <AppstoreOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="Outfit Recommendation"
              description="Get personalized outfit recommendations."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/virtual-try-on')}
            cover={
              <SmileOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="Virtual Try-On"
              description="Try outfits virtually."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/fashion-chatbot')}
            cover={
              <SmileOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="Fashion Chatbot"
              description="Chat with our fashion assistant."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            onClick={() => navigateTo('/file-upload-rag')}
            cover={
              <UploadOutlined style={{ fontSize: '48px', padding: '20px' }} />
            }
          >
            <Card.Meta
              title="File Upload for RAG"
              description="Upload files for RAG processing."
            />
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
