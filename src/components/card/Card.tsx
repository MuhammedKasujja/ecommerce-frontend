import { mergeClassNames } from "src/utils/utils";

import classes from "./Card.module.scss";
import { CardProps } from "./Card.type";
import Header from "./header/Header";

const Card: React.FC<CardProps & React.ComponentProps<"div">> = ({ children, header, ...rest }) => {
  return (
    <div className={mergeClassNames(classes.card)} {...rest}>
      <div className={mergeClassNames(classes.card_header)}>
        {header &&
          (typeof header === "string" ? <Header title={header} /> : header)}
      </div>
      <div className={mergeClassNames(classes.card_body)}>{children}</div>
    </div>
  );
};

export default Card;
