const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
        </nav>
    );
}

const Sidebar = () => {
    return (
        <div className="d-none d-md-block col-md-3">
            <div className="border border-primary py-4 px-3">
                Sidebar
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="border-top p-2">
            Template Demo © 2020
        </div>
    );
}

const Template = (props) => {
    return (
        <div>
            <Navbar />
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-md-9">
                        {props.children}
                    </div>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const App = () => {
    return (
        <Template>
            <h1>Main Content</h1>
        </Template>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);