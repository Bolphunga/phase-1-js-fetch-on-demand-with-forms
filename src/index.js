const init = () => {
  const inputForm = document.querySelector("form")
    inputForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        const input = document.querySelector("input#searchByID")
        console.log("Submitted:" + e)
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(r=>r.json())
        .then((json)=>{
            console.log(json)
            const title = document.querySelector("h4")
            const summary = document.querySelector("p")
            title.textContent = json.title
            summary.textContent = json.summary
        })
    })
}

document.addEventListener('DOMContentLoaded', init);