import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
} from "@chakra-ui/react";

function Header() {
    const [User, setUser] = useState([]);
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem('userLogin');
        return navigate('/');
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userLogin')))
    }, []);
    return (
        <>
            <div className="">
                <div className="logo d-flex justify-content-start align-items-center my-5 mx-5">
                    <img src="https://th.bing.com/th/id/OIP.ChybjLMYptVVu6R6sjpb7wHaGC?pid=ImgDet&rs=1" alt="Logo.io" height={'100px'} width={"100px"} />
                    <h1 className="mx-5 d-flex"> <span>i</span><span style={{ color: "#44b4" }}>PHONE</span> SHOP</h1>
                    <h1 className="mx-5"></h1>
                    <h1 className="mx-5"></h1>
                    <h1 className="mx-5"></h1>
                    <h1 className="mx-5"></h1>
                    <h1 className="mx-5"></h1>
                    <h1 className="mx-5"></h1>
                    <Menu>
                        <MenuButton
                            style={{ cursor: 'pointer' }}
                            className="fw-bold text-primary"
                            data-bs-toggle="tooltip"
                            title="Click to logout"
                        >{User.name}</MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem onClick={Logout}>Login</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </div>
            </div>
        </>
    );
}

export default Header;