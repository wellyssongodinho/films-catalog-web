import styled from "styled-components";

export const FilmContainer = styled.section`
    flex: 1;
    justify-content: start;
    padding: 0.5rem 1.2rem;
`;

export const Poster = styled.div`
    align-items: start;
    justify-content: center;

    gap: 1.875rem;

    p {
        width: 100%;
    }

    img {
        width: 170px;
    }
`;


export const FilmDetails = styled.div`
    width: 100%;
    gap: 1.1875rem;

    strong {
        font-size: 1.5rem;
        color: #fff;
        font-family: "Poppins", sans-serif;
    }

    p {
        width: 100%;
        font-size: 0.85rem;
        color: #fff;
        font-family: "Poppins", sans-serif;
    }
`;