import { createBrowserRouter } from "react-router-dom";
import ChatProvider from "../context/ChatProvider";
import ChatPage from "../pages/ChatPage";
import Homepage from "../pages/Homepage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>
    },
    {
        path:'/chats',
        element: <ChatProvider><ChatPage></ChatPage></ChatProvider>
    }
])