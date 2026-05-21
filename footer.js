const footer = document.createElement("footer");
footer.innerHTML = `
    <h4>Copyright (C) Idris Sheikh Dibo</h4>
    <img src="img/logo.png" width=80px height=60px>
`

document.body.append(footer);

/*
    Here, I am using Dynamic HTML, which is faster than having written the header and nav in all html files.
    It also saves on storage space, so it speeds up loading by abit aswell.    
*/