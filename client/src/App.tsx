import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import CodeEditor from './pages/CodeEditor'

export default function App() {
  return (
    <div style={{minHeight:'100vh', display:'flex', flexDirection:'column'}}>
      <header style={{display:'flex', gap:16, alignItems:'center', padding:'12px 16px', borderBottom:'1px solid #eee'}}>
        <NavLink to="/" style={{textDecoration:'none', fontWeight:700}}>⚡ React + code-server</NavLink>
        <nav style={{display:'flex', gap:12}}>
          <NavLink to="/" style={({isActive})=>({textDecoration: isActive ? 'underline' : 'none'})}>Home</NavLink>
          <NavLink to="/code-editor" style={({isActive})=>({textDecoration: isActive ? 'underline' : 'none'})}>Code Editor</NavLink>
        </nav>
      </header>
      <main style={{flex:1}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/code-editor" element={<CodeEditor/>} />
        </Routes>
      </main>
      <footer style={{padding:'12px 16px', borderTop:'1px solid #eee', fontSize:12, color:'#666'}}>
        Built with React + Vite + Docker + code-server
      </footer>
    </div>
  )
}
