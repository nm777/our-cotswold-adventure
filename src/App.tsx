import './App.css';
import Card from './components/Card';
import CardTitle from './components/CardTitle';

const App = () => {
  return (
    <>
      <h1>Our Cotswold Adventure</h1>
      <div>
        <div>
          <Card>
            <CardTitle>Preparation</CardTitle>
          </Card>
          <Card>
            <CardTitle>The Journey</CardTitle>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App
