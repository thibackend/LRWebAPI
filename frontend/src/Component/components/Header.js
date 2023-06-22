import React from "react";


function Header() {
    return (
        <>
            <div className="logo d-flex justify-content-start align-items-center my-5 mx-5">
                <img src="https://th.bing.com/th/id/OIP.ChybjLMYptVVu6R6sjpb7wHaGC?pid=ImgDet&rs=1" alt="Logo.io" height={'100px'} width={"100px"} />
                <h1 className="mx-5 d-flex"> <span>i</span><span style={{color:"#44b4"}}>PHONE</span> SHOP</h1>
            </div>
        </>
    );
}

export default Header;