import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/faq/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/faq/new/"!</div>
}
