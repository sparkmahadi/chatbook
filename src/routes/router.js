import { createBrowserRouter } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>
    },
    {
        path:'/chat',
        element: <ChatPage></ChatPage>
    }
])