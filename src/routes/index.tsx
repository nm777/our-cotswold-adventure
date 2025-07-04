import { createFileRoute, Link } from '@tanstack/react-router'
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <h1>Our Cotswold Adventure</h1>
      <div>
        <div>
          <Link to="/prep">
            <Card>
              <CardTitle>Preparation</CardTitle>
            </Card>
          </Link>
          <Link to="/journey">
            <Card>
              <CardTitle>The Journey</CardTitle>
            </Card>
          </Link>
        </div>
      </div>
    </>
  )
}
