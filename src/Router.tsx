import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Order } from './pages/ConfirmedOrder'
import { Home } from './pages/Home'
import { Pay } from './pages/pay'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/confirmedorder" element={<Order />} />
      </Route>
    </Routes>
  )
}
