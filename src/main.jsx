import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskApp from "./TaskApp.jsx";

//index.htmlのrootに、TaskAppコンポーネントをReactとして表示してね
createRoot(document.getElementById('root')).render(
    //StrictModeでチェック強化
    <StrictMode>
        <TaskApp/>
    </StrictMode>,
);
