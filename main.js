import React from "react"
import ReactDOM from "react-dom"

function MyIntroduction(){
    return (
        <div>
            <h1>Abichal Ghosh</h1>
        </div>
    )
}

const pageRoot = ReactDOM.createRoot(document.getElementById("root"))
pageRoot.render(<MyIntroduction/>)