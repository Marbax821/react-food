import { useParams, useNavigate } from "react-router-dom"

function Movie() {
    const params = useParams();
    const { id } = params;

    const navigate = useNavigate();

    const handleGoBack = () => {
        // Перейти на предыдущую страницу
        navigate(-1);
    };

    return (
        <>
            <h1>Page {id}.</h1>
            <button className="btn" onClick={handleGoBack}>go back</button>
        </>
    )
}

export { Movie }