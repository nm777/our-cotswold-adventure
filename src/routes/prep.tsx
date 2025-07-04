import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prep')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prep"!</div>
}
