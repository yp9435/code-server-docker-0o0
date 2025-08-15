// For now, just a placeholder. We’ll point this iframe to code-server soon.
export default function CodeEditor() {
  return (
    <div style={{height: 'calc(100vh - 97px)'}}>
      <iframe
        title="code-server"
        src="/ide/"   // we'll make this work in dev & prod
        style={{border:'none', width:'100%', height:'100%'}}
        allow="clipboard-read; clipboard-write;"
      />
    </div>
  )
}
