import Header from "../components/Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="conntainer">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
