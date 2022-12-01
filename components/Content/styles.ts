import styled from "styled-components";

export const FilmContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.2rem;
`;

export const Poster = styled.div`
    max-width: 80%;

    display: "flex";
    align-items: flex-start;

    gap: 1.875rem;

    img {
        width: 170px;
    }
`;


export const FilmDetails = styled.div`
    display: flex;
    flex-direction: column;
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