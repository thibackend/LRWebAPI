import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Deletel = (id) => {
    const navigate = useNavigate();
    const delet = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${id}`)
                .then(
                    (res) => {
                        alert("Delete successful product ! " + id + " !")
                        if (res.data) {
                            navigate('/admin');
                        }
                    }
                )
        } catch (error) {
            console.log(error);
        }
    };
    delet();
}