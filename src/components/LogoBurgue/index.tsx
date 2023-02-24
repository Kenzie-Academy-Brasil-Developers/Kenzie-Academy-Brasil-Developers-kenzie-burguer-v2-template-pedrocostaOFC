import { LogoBurgueStyle } from "./style";
import shoppingBag from "../../assets/shoppingBag.svg";
import bubbles from "../../assets/bubbles.svg";
import logo from "../../assets/logo-kenzie-burgue.png";

export const LogoBurgue = () => {
  return (
    <LogoBurgueStyle>
      <img src={logo} alt="" />
      <div>
        <div>
          <img src={shoppingBag} alt="Sacola de compras" />
        </div>
        <span>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores</strong> ingredientes.
        </span>
      </div>
      <img src={bubbles} alt="Círculos cinzas" />
    </LogoBurgueStyle>
  );
};
