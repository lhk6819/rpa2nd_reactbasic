import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/* xml형태는 root가 필요하기 때문에 root를 rendering함 */

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* 여기서의 App은 react DOM속의 Element를 의미 */}
    {/* Object의 property는 XML의 Element를 의미 */}
    {/* App.jsx에서 선언한 function 다발 */}
    <App />
  </React.StrictMode>
  
)