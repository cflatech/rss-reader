import { listItem } from "~/components/ListItem/listItem.css";

type Props = {
	children: React.ReactNode;
};

// TODO: 複合パターンでの実装を行う
export const ListItem = ({ children }: Props) => {
	return <div className={listItem}>{children}</div>;
};
