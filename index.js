import '../css/styles.css'
import { motion } from 'framer-motion'

const number = 11;
const local = "SAN ISIDRO / COMERCIAL";

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>web-aforo</title>
			</Head>
			<div className="container">
				<header>
					<div className="index">
						<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<img src="/img/menu-icon-white.jpg" alt="" />
						</motion.button>
					</div>
				</header>
				<div className="contenido">
					<h1>AFORO</h1>
					<div className="info">
						<div className="img-container">
							<img src="/img/aforo-icono.png" alt="aforo-icono" />
						</div>
						<div className="number-value">
							<h1>{number}</h1>
							<h2> ACTUAL </h2>
						</div>
					</div>
					<div className="location">
						<h1>{local}</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default index