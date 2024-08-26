'use client'

import { useState } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Upload, Button, Image, Spin, Row, Col, Slider } from 'antd'
import { CameraOutlined, UploadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function VirtualTryOnPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { data: outfits, isLoading: isLoadingOutfits } =
    Api.outfit.findMany.useQuery({})
  const { mutateAsync: createVirtualTryOn } =
    Api.virtualTryOn.create.useMutation()

  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const [selectedOutfitId, setSelectedOutfitId] = useState<string | null>(null)
  const [fitAdjustment, setFitAdjustment] = useState<number>(100)

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setUploadedImageUrl(url)
      enqueueSnackbar('Image uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload image', { variant: 'error' })
    }
  }

  const handleVirtualTryOn = async () => {
    if (uploadedImageUrl && selectedOutfitId) {
      try {
        await createVirtualTryOn({
          data: {
            tryOnImageUrl: uploadedImageUrl,
            userId: user.id,
            outfitId: selectedOutfitId,
          },
        })
        enqueueSnackbar('Virtual try-on created successfully', {
          variant: 'success',
        })
      } catch (error) {
        enqueueSnackbar('Failed to create virtual try-on', { variant: 'error' })
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Virtual Try-On</Title>
      <Text>
        Upload a photo or use your camera to see how different outfits look on
        you.
      </Text>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Upload
            showUploadList={false}
            beforeUpload={file => {
              handleUpload(file)
              return false
            }}
          >
            <Button icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Col>
        <Col>
          <Button icon={<CameraOutlined />}>Use Camera</Button>
        </Col>
      </Row>
      {uploadedImageUrl && (
        <Row justify="center" style={{ marginTop: '20px' }}>
          <Col>
            <Image src={uploadedImageUrl} alt="Uploaded Image" width={200} />
          </Col>
        </Row>
      )}
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Title level={4}>Select an Outfit</Title>
          {isLoadingOutfits ? (
            <Spin />
          ) : (
            <Row gutter={[16, 16]}>
              {outfits?.map(outfit => (
                <Col key={outfit.id} span={8}>
                  <Image
                    src={outfit.imageUrl}
                    alt={outfit.description}
                    width={100}
                    onClick={() => setSelectedOutfitId(outfit.id)}
                    style={{
                      border:
                        selectedOutfitId === outfit.id
                          ? '2px solid #1890ff'
                          : 'none',
                      cursor: 'pointer',
                    }}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Title level={4}>Adjust Fit</Title>
          <Slider
            min={50}
            max={150}
            value={fitAdjustment}
            onChange={value => setFitAdjustment(value)}
            tooltipVisible
          />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <Button type="primary" onClick={handleVirtualTryOn}>
            Try On
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
