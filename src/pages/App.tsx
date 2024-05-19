import { RouterProvider } from 'react-router'
import { router } from '../routes/index.routes'

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
