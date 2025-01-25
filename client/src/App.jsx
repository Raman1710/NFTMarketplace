import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import Homepage from "./Pages/Homepage"
import ArtistProfile from "./Pages/ArtistProfile"
import Drops from "./Pages/Drops"
import ListNFT from "./Pages/ListNFT"
import TokenDetail from "./Pages/TokenDetail"
import UserProfile from "./Pages/UserProfile"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/artist-profile/:id',
        element: <ArtistProfile />
      },
      {
        path: '/drops',
        element: <Drops />
      },
      {
        path: '/list',
        element: <ListNFT />
      },
      {
        path: '/token/:id',
        element: <TokenDetail />
      },
      {
        path: '/user-profile/:id',
        element: <UserProfile />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
