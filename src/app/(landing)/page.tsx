'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Text-to-Outfit Generator',
      description:
        'Describe your style preferences and receive tailored outfit suggestions instantly.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Human Identification Technology',
      description:
        'Ensure virtual try-ons and recommendations are precisely aligned with your body.',
      icon: <UserOutlined />,
    },
    {
      heading: 'Advanced Semantic Search',
      description:
        'Get personalized outfit recommendations based on occasion, color, and style preferences.',
      icon: <SearchOutlined />,
    },
    {
      heading: 'Virtual Try-On',
      description:
        'See how outfits would look on you without physically trying them on.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Fashion Chatbot',
      description: 'Receive real-time expert styling advice and fashion tips.',
      icon: <SmileOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Fashion Enthusiast',
      content:
        'Stylist AI has completely transformed my wardrobe. I save so much time and always look my best!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Busy Professional',
      content:
        'With Stylist AI, I never have to worry about what to wear. The recommendations are always spot on!',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Brown',
      designation: 'Tech Savvy',
      content:
        'The virtual try-on feature is a game-changer. I can see how clothes look on me without leaving my house.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Perfect for individuals looking to enhance their wardrobe.',
      monthly: 9,
      yearly: 69,
      features: ['Text-to-Outfit Generator', 'Human Identification Technology'],
    },
    {
      title: 'Premium',
      description: 'Ideal for fashion enthusiasts and busy professionals.',
      monthly: 19,
      yearly: 149,
      features: [
        'All Basic Features',
        'Advanced Semantic Search',
        'Virtual Try-On',
      ],
      highlight: true,
    },
    {
      title: 'Pro',
      description: 'For those who want the ultimate fashion experience.',
      monthly: 29,
      yearly: 229,
      features: [
        'All Premium Features',
        'Fashion Chatbot',
        'Exclusive Style Tips',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the Text-to-Outfit Generator work?',
      answer:
        'Simply describe your style preferences, and our AI will generate tailored outfit suggestions for you.',
    },
    {
      question: 'Can I see how clothes look on me?',
      answer:
        'Yes, our Virtual Try-On feature lets you see how outfits would look on you without physically trying them on.',
    },
    {
      question: 'Is the Fashion Chatbot available 24/7?',
      answer:
        'Absolutely! Our Fashion Chatbot provides real-time expert styling advice and fashion tips anytime you need.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Describe Your Style',
      description: 'Tell us about your fashion preferences and needs.',
    },
    {
      heading: 'Receive Tailored Suggestions',
      description: 'Get personalized outfit recommendations instantly.',
    },
    {
      heading: 'Try On Virtually',
      description:
        'See how outfits look on you without trying them on physically.',
    },
    {
      heading: 'Get Expert Advice',
      description: 'Receive real-time styling tips from our Fashion Chatbot.',
    },
  ]

  const painPoints = [
    {
      emoji: '😫',
      title: 'Overwhelmed by Choices',
    },
    {
      emoji: '⏳',
      title: 'Wasting Time Deciding',
    },
    {
      emoji: '👗',
      title: 'Wardrobe Clutter',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Elevate Your Style with AI"
        subtitle="Discover the perfect outfit effortlessly with Stylist AI."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/X09fTS-stylistai-z7Gy"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints title="The Struggle is Real" painPoints={painPoints} />
      <LandingHowItWorks title="How Stylist AI Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Fashion Dreams"
        subtitle="Our features are designed to make your wardrobe choices effortless."
        features={features}
      />
      <LandingTestimonials
        title="What Our Users Say"
        subtitle="See how Stylist AI has transformed their fashion experience."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to suit your fashion needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Wardrobe?"
        subtitle="Sign up now and start your fashion journey with Stylist AI."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
