import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import Content from "../Content/Content";
import {
  MainContainer, SearchBtn
} from "./styles";

interface Movie {
  adult: boolean;
  title: string;
  poster_path: string;
  overview: string;
}

export function Main() {
  const {films, handleFilms} = useAppContext();

  return (
    <MainContainer>
      {films.length !== 0 ?
        <Content />
        :
        <SearchBtn onClick={() => handleFilms}>
          <Image src={"/shuffle.svg"} alt="FilmsCatalog" width={200} height={50}/>
          <p>Atualizar Catalogo</p>
        </SearchBtn>
      }
    </MainContainer>
  );
}
