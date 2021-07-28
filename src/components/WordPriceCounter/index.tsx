import * as WPC from "./styles";

interface WordPriceCounterProps {
  wordsCounter: number;
  pricePerWord: number;
}

export function WordPriceCounter(props: WordPriceCounterProps) {
  if (props.wordsCounter < 0) {
    throw Error("A quantidade de palavras não pode ser negativa");
  }

  if (props.pricePerWord < 0) {
    throw Error("A preço não pode ser negativo");
  }

  return (
    <WPC.Wrapper>
      <WPC.WordCounter>{props.wordsCounter} palavras</WPC.WordCounter>
      <WPC.PricePreview>
        {(props.wordsCounter * props.pricePerWord).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 2,
        })}
      </WPC.PricePreview>
    </WPC.Wrapper>
  );
}
