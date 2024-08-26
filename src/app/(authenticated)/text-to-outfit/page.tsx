'use client'

import { useState } from 'react'
import { Typography, Input, Button, Card, Row, Col, Spin } from 'antd'
import { SaveOutlined, HeartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function TexttoOutfitGeneratorPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [styleDescription, setStyleDescription] = useState<string>('')
  const [generatedOutfits, setGeneratedOutfits] = useState<Outfit[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { mutateAsync: generateOutfits } = Api.ai.generateText.useMutation()
  const { mutateAsync: saveOutfit } = Api.user.create.useMutation()

  const handleGenerateOutfits = async () => {
    setLoading(true)
    try {
      const response = await generateOutfits({ prompt: styleDescription })
      const outfits = JSON.parse(response.answer)
      setGeneratedOutfits(outfits)
      enqueueSnackbar('Outfits generated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to generate outfits.', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveOutfit = async (outfit: Outfit) => {
    try {
      await saveOutfit({ data: { userId: user.id, outfitId: outfit.id } })
      enqueueSnackbar('Outfit saved successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to save outfit.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Style Preferences</Title>
      <Text>Input your style preferences to generate outfits.</Text>
      <Input.TextArea
        rows={4}
        value={styleDescription}
        onChange={e => setStyleDescription(e.target.value)}
        placeholder="Describe your style preferences..."
      />
      <Button type="primary" onClick={handleGenerateOutfits} disabled={loading}>
        {loading ? <Spin /> : 'Generate Outfits'}
      </Button>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {generatedOutfits?.map(outfit => (
          <Col key={outfit.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={<img alt={outfit.description} src={outfit.imageUrl} />}
              actions={[
                <HeartOutlined
                  key="bookmark"
                  onClick={() => handleSaveOutfit(outfit)}
                />,
                <SaveOutlined
                  key="save"
                  onClick={() => handleSaveOutfit(outfit)}
                />,
              ]}
            >
              <Card.Meta title={outfit.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
