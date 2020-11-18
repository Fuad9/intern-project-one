import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Loading from "../../utilities/Loading";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    console.log(categories);

    // useEffect(() => {
    //     fetch("https://cryptic-harbor-99927.herokuapp.com/showCategories")
    //         .then((res) => res.json())
    //         .then((data) => setCategories(data));
    // }, []);

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
            <h2 className="text-primary p-5 text-center">Categories</h2>
            {loading ? (
                <Loading />
            ) : (
                <div className="row m-5">
                    {categories.map((category) => (
                        <div className="col-md-4">
                            <img className="w-75" src={`data:image/png;base64,${category.image.img}`} alt="" />
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
