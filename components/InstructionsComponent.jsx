import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					create<span>zonkey?</span>
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
						{/ <img src="https://cdn.prod.website-files.com/625fe439fb70a9d901e138ab/648c1a09c6a80c200fa95349_628c05f2e63f068e62b96336_Discord%20Author%20Black.png" width={"20px"} height={"20px"} /> */}
						<p>discord me</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://discord.gg/qbtukq7rHY"}
				>
					<div className={styles.button}>
						{/<img src="https://cdn.prod.website-files.com/625fe439fb70a9d901e138ab/648c1a09c6a80c200fa95349_628c05f2e63f068e62b96336_Discord%20Author%20Black.png" width={"20px"} height={"20px"} /> */}
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
