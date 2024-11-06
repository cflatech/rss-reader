import { card } from "~/components/Card/card.css";

type CardProps = { children: React.ReactNode };

export const Card = ({ children }: CardProps) => {
	return <div className={card}>{children}</div>;
};

type BodyProps = { children: React.ReactNode };
const Body = ({ children }: BodyProps) => {
	return <div>{children}</div>;
};

Card.Body = Body;
