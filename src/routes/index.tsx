import { createFileRoute } from '@tanstack/react-router'
import HomePage from '../components/pages/HomePage';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <div>

      <HomePage /> 

      </div>
    </>
  );
}