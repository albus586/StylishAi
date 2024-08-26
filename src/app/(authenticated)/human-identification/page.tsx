'use client'

import { useState } from 'react'
import { Typography, Upload, Button, Spin, Row, Col, Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HumanIdentificationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: createHumanIdentification } =
    Api.humanIdentification.create.useMutation()

  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload = async (file: File) => {
    setIsLoading(true)
    try {
      const { url } = await upload({ file })
      setImageUrl(url)
      const humanIdentification = await createHumanIdentification({
        data: {
          userId: user.id,
          bodyMeasurements: 'Sample body measurements',
          poseData: 'Sample pose data',
        },
      })
      enqueueSnackbar('Image uploaded successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload image', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const uploadProps = {
    beforeUpload: (file: File) => {
      handleUpload(file)
      return false
    },
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Human Figure Detection</Title>
      <Paragraph>
        Upload a photo to detect the human figure. Ensure the detected figure
        aligns with your body for accurate recommendations.
      </Paragraph>
      <Row justify="center" align="middle" style={{ minHeight: '50vh' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Upload {...uploadProps} showUploadList={false}>
            <Button icon={<UploadOutlined />} type="primary" size="large">
              Upload Photo
            </Button>
          </Upload>
          {isLoading && <Spin style={{ marginTop: 20 }} />}
          {imageUrl && (
            <div style={{ marginTop: 20 }}>
              <Image
                src={imageUrl}
                alt="Uploaded Image"
                style={{ maxWidth: '100%' }}
              />
            </div>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
