import { useEffect, useState } from "react";
import { getAllCategories } from "../api";

import { CategoryList } from "../components/CategoryList";
import { Preloader } from '../components/Preloader';
import { Search } from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const { search } = location;

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        navigate(`?search=${str}`);
    };

    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCatalog(data.categories);
                setFilteredCatalog(data.categories);
            });
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(search);
        const searchValue = params.get('search') || '';
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(searchValue.toLowerCase()))
        );
    }, [search, catalog]);

    return (
        <>
            <Search cb={handleSearch} />
            {
                !catalog.length ? <Preloader /> : (
                    <CategoryList catalog={filteredCatalog} />
                )
            }
        </>
    )
}

export { Home }