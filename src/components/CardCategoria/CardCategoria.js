import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../CardCategoria/CardCategoria.module.scss";

export const CardsCategoria = () => {
	const categorias = useSelector((state) => state.categorias);
	return (
		<div className={styles.container}>
			{categorias?.map((categoria, index) => (

				<div className={styles.cardesContainer} key={index}>
					<div className={styles.divImg}>
						<Link to={`/categoria/${categoria.id}`}>
							<img src={categoria.thumbnail} alt={categoria.id} />
						</Link>
					</div>
					<h3>{categoria.name}</h3>
				</div>
			))}
		</div>
	);
};
