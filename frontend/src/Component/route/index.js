import { useRoutes } from "react-router-dom";
import { routes } from "./route";

const Routersr = () => {
    const routing = useRoutes(routes());
    return routing;
};
export default Routersr;