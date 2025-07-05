import { createFileRoute, Link } from '@tanstack/react-router'
import Card from '../components/Card'
import CardTitle from '../components/CardTitle'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <div className="home-background"></div>
      <h1>Our Cotswold Adventure</h1>
      <div className='card-container'>
        <Card to="/prep">
          <CardTitle>Preparation</CardTitle>
        </Card>
        <Card>
          <CardTitle>The Journey</CardTitle>
          Coming in September
        </Card>
      </div>
    </>
  )
}
