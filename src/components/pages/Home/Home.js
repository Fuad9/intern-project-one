import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Loading from "../../utilities/Loading";
import "./Home.css";
import NavBar from "../Shared/NavBar/NavBar";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await Axios.get("https://cryptic-harbor-99927.herokuapp.com/showCategories");
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, [setCategories]);

    return (
        <>
            <NavBar />
            <h2 className="text-primary p-5 text-center">Categories</h2>
            {loading ? (
                <Loading />
            ) : (
                <div className="row mx-5">
                    {categories.map((category) => (
                        <div className="col-sm-6 col-md-4 card p-4 my-4 text-center">
                            <img className="w-100" src={`data:image/png;base64,${category.image.img}`} alt="" />
                            <h3 className="text-success">{category.name}</h3>
                            <button className="btn btn-primary" onClick={() => history.push("/dashboard")}>
                                Add Expense
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Home;
