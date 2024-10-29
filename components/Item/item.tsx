import { headerAccent, item, title } from "~/components/Item/item.css";

type ItemProps = {
	children: React.ReactNode;
};
export const Item = ({ children }: ItemProps) => {
	return <div className={item}>{children}</div>;
};

type TitleProps = {
	children: React.ReactNode;
};
const Title = ({ children }: TitleProps) => {
	return (
		<h2 className={title}>
			<div className={headerAccent} />
			{children}
		</h2>
	);
};

type BodyProps = {
	children: React.ReactNode;
};
const Body = ({ children }: BodyProps) => {
	return <div>{children}</div>;
};

Item.Title = Title;
Item.Body = Body;
