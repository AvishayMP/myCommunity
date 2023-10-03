import { Outlet } from "react-router-dom";

function Content() {
    return (
        <>
            <h1>Content</h1>
            <Outlet />
        </>);
}

export default Content;