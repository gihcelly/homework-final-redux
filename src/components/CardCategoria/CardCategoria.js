import styles from "../CardCategoria/CardCategoria.module.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CardsCategoria = () => {
	const categories = useSelector((state) => state.categories);
	return (
		<div className={styles.container}>
			{categories?.map((category) => (
				<div className={styles.cardesContainer} key={category.id}>
					<div className={styles.divImg}>
						<Link to={`/categoria/${category.id}`}>
							<img src={category.thumbnail} alt='Card IMG' />
						</Link>
					</div>
					<h3>{category.name}</h3>
				</div>
			))}
		</div>
	);
};
