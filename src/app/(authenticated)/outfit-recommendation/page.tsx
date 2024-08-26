'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Card,
  Typography,
  Space,
} from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function OutfitRecommendationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [occasion, setOccasion] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [style, setStyle] = useState<string>('')
  const [recommendations, setRecommendations] = useState<
    Prisma.RecommendationGetPayload<{ include: { outfit: true } }>[]
  >([])
  const [favorites, setFavorites] = useState<string[]>([])

  const {
    data: userRecommendations,
    isLoading,
    refetch,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { recommendations: { include: { outfit: true } } },
  })

  const { mutateAsync: createRecommendation } =
    Api.recommendation.create.useMutation()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()

  useEffect(() => {
    if (userRecommendations) {
      setRecommendations(userRecommendations.recommendations || [])
    }
  }, [userRecommendations])

  const handleSubmit = async () => {
    try {
      const newRecommendation = await createRecommendation({
        data: {
          userId: user?.id,
          outfit: {
            create: {
              occasion,
              color,
              style,
            },
          },
        },
      })
      setRecommendations([...recommendations, newRecommendation])
      enqueueSnackbar('Recommendation created successfully!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to create recommendation', { variant: 'error' })
    }
  }

  const handleFavorite = async (outfitId: string) => {
    try {
      const updatedFavorites = favorites.includes(outfitId)
        ? favorites.filter(id => id !== outfitId)
        : [...favorites, outfitId]

      await updateUser({
        where: { id: user?.id },
        data: {
          recommendations: { connect: updatedFavorites.map(id => ({ id })) },
        },
      })

      setFavorites(updatedFavorites)
      enqueueSnackbar('Favorites updated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update favorites', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Outfit Recommendation</Title>
      <Text>
        Input your preferences to receive personalized outfit suggestions.
      </Text>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Occasion">
          <Input value={occasion} onChange={e => setOccasion(e.target.value)} />
        </Form.Item>
        <Form.Item label="Color">
          <Input value={color} onChange={e => setColor(e.target.value)} />
        </Form.Item>
        <Form.Item label="Style">
          <Input value={style} onChange={e => setStyle(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Get Recommendations
          </Button>
        </Form.Item>
      </Form>
      <Row gutter={[16, 16]}>
        {recommendations?.map(recommendation => (
          <Col key={recommendation.id} xs={24} sm={12} md={8}>
            <Card
              cover={<img alt="outfit" src={recommendation.outfit?.imageUrl} />}
              actions={[
                favorites.includes(recommendation.outfit?.id) ? (
                  <HeartFilled
                    onClick={() => handleFavorite(recommendation.outfit?.id)}
                  />
                ) : (
                  <HeartOutlined
                    onClick={() => handleFavorite(recommendation.outfit?.id)}
                  />
                ),
              ]}
            >
              <Card.Meta
                title={recommendation.outfit?.description}
                description={`Style: ${recommendation.outfit?.style}, Color: ${recommendation.outfit?.color}, Occasion: ${recommendation.outfit?.occasion}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
