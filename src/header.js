import React from 'react';

function App_header() {
    return (
        <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand" href="/">Home</a>

            <a class="navbar-brand" href="/post">Board</a>

            <a class="navbar-brand" href="/joongo">Joongo</a>

            <a class="navbar-brand" href="/plus">Help</a>


            <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
        </nav>
    );
}

export default App_header;
