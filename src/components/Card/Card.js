
import { CardContainer, Imagem } from "./style";

export const Card = ({text, backgroudColor, textColor, image, house}) => {
  return (
    <CardContainer backgroudColor={backgroudColor} textColor={textColor}>
   
      <p>{text}</p>
      <Imagem src={image} ></Imagem>
      
    </CardContainer>
  );
};