import { createFileRoute } from '@tanstack/react-router'
import FaqCreatePage from '../../pages/FaqCreatePage'

export const Route = createFileRoute('/create/')({
  component: FaqCreatePage,
})
