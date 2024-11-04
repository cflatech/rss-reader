"use client";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import {
	bodyOverflowHidden,
	h1,
	header,
	menu,
	menuBackground,
	menuBackgroundVisible,
	sideMenu,
	sideMenuHidden,
} from "~/components/Header/header.css";

type HeaderProps = {
	readonly title: string;
};

export const Header = ({ title }: HeaderProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add(bodyOverflowHidden);
		} else {
			document.body.classList.remove(bodyOverflowHidden);
		}

		return () => {
			document.body.classList.remove(bodyOverflowHidden);
		};
	}, [isOpen]);

	return (
		<>
			<header className={header}>
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					{!isOpen ? <FaBars size={"2rem"} /> : <FaXmark size={"2rem"} />}
				</button>
				<h1 className={h1}>{title}</h1>
			</header>
			<div className={menu}>
				<div
					className={`${menuBackground} ${isOpen ? menuBackgroundVisible : ""}`}
				/>
				<div className={`${sideMenu} ${!isOpen ? sideMenuHidden : ""}`}>
					hoge
				</div>
			</div>
		</>
	);
};
