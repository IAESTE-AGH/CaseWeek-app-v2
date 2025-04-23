import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/workshops')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/workshops"!</div>
}
