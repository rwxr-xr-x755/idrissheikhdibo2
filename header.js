const header = document.createElement('div'); // Creates the header for the html documents.
header.innerHTML = `
    <header>
        <h1>Viva Chess Club</h1>
    </header>
    <hr>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
`

document.body.prepend(header);  // Prepends the header to the body element.

/*
    Here, I am using Dynamic HTML, which is faster than having written the header and nav in all html files.
    It also saves on storage space, so it speeds up loading by abit aswell.    
*/