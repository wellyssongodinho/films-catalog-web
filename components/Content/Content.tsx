import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppContext } from "../../pages/context/AppContext";
import { api } from "../../service/api";
import { FilmContainer, FilmDetails, Poster } from "./styles";

const LIMIT = 10;

const Content = () => {
    const { films, handleFilms } = useAppContext();
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        const queryParams: AxiosRequestConfig = {
            params: {
                limit: LIMIT,
                id: films[films.length-1].id,
            },
        };
        const respose = await api.get('/films', queryParams );
        const newFilms = respose.data;
        const addFilms = [...films, ...newFilms];
        handleFilms(addFilms);
    };

    useEffect(() => {
        console.log('films.length'+films.length)
        if (films.length%LIMIT !== 0)
            setHasMore(false);
    }, [films.length])
    return (
    <>
        <InfiniteScroll
            dataLength={films.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
            >
            {films.map((data) => (
                <FilmContainer className='film-container' key={data.id}>
                    <Poster className="back">
                        <img src={data.url} alt={data.title}/>
                        <FilmDetails>
                            <strong>{data.title}</strong>
                            <p>{data.description}</p>
                        </FilmDetails>
                    </Poster>
                </FilmContainer>
            ))}
        </InfiniteScroll>
    </>
    );
};

export default Content;
