import Image from "next/image";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Image src="/shuffle.svg" alt="RocketFlix" width={300} height={100} />
    </HeaderContainer>
  );
}
