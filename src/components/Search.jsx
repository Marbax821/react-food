import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
        navigate(`?search=${value}`);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchValue = params.get('search') || '';
        setValue(searchValue);
    }, [location.search]);

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id='search-field'
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                    onClick={handleSubmit}
                >Search</button>
            </div>
        </div>
    );
}

export { Search }