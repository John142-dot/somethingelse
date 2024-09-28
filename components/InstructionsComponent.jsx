import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					create<span>-funny web</span>
				</h1>
				<p>
					this is zonkeys website!
					<span>/pages/index.js</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"no"}
				>
					<div className={styles.button}>
						{/* <img src="" width={"20px"} height={"20px"} /> */}
						<p>Discord</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://r.mtdv.me/articles/fkaPFkkzDi"}
				>
					<div className={styles.button}>
						{/<img src="idk" width={"20px"} height={"20px"} /> */}
						<p>nothing much</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://github.com/John142-dot"}
				>
					<div className={styles.button}>
						<img
							src="https://s2.ezgif.com/tmp/ezgif-2-617f3fa81a.jpg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Visit Docs</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="https://r.mtdv.me/articles/fkaPFkkzDi" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://s2.ezgif.com/tmp/ezgif-2-617f3fa81a.jpg"
						alt="wha"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/John142-dot"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/AlchemyPlatform"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
