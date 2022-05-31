import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "d3ff0cc6-fdf9-4a59-a5e5-023b3b05c386"
            userName = "testuser"
            userSecret = "1234"

        />
    )
}

export default App;