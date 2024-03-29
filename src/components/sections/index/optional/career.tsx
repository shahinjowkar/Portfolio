
// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'
import Education from "./education";


export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="full stack developer and software engineer looking forward to expand experiences in AI engineering field"
				/>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Software Engineering Inter</h3>
									<h4>Capita – Ottawa, Ontario</h4>
							</span>
							<p>
								
							In my recent role as a Software Engineer, I made significant strides in blockchain technology, Utlizing Hardhat and Mocha, I enhancied software reliability. My expertise also extended to developing a blockchain interface for collaborative investment and decision making, using Ethers.js, React, and Next.js. This development was crucial in enabling direct consent verification between parties through public key cryptography, thereby ensuring secure, transparent, and efficient digital interactions. A pivotal achievement was migrating our application to Next.js 13, which brought about a leaner client-side bundle, faster load times, and an overall boost in performance. Additionally, I automated the generation of tailored DAO interfaces using Sanity CMS API and TypeScript scripts, which facilitated the creation of new Token instances on the blockchain. This comprehensive approach not only advanced our technological capabilities but also fostered a more collaborative and efficient work environment.
							</p>
						</div>
						<div className={career.companyAlt}></div>
						</div>

				</section>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Backend Developer Intern </h3>
									<h4>ThinkingLab – Vancouver, British Colombia</h4>
							</span>
							<p>
							working as a backend developer I spearheaded significant enhancements in our system`&apos;`s efficiency and capabilities. This was achieved through a strategic redesign of the Amazon RDS architecture, coupled with the design and implementation of a new ER diagram. Leading a team of four, we conducted a thorough analysis and reporting on both backend and frontend functionalities, which was instrumental for a smooth transition during our tech stack migration. I harnessed the power of Postman for automated testing and deployment, significantly advancing our CI/CD pipeline and ensuring more efficient development workflows. My technical acumen was further demonstrated in the development of over ten new backend endpoints, integrating Infusionsoft and Ottolearn  to substantially expand system capabilities. Additionally, I resolved complex OAuth2 Authentication issues by configuring OAuth flow and payloads, enhancing the robustness of our authentication processes, and contributing to a more secure and reliable system.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						</div>
	
				</section>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>WebApp freelancing</h3>
									<h4>Permanent Full Time · Present</h4>
							</span>
							<p>
								https://myplans.vercel.app
							</p>
							<p>
							- Online marketplace, featuring token-based payments via Stripe, session-based auth, and streamlined management via user friendly CMS.
							</p>
							<p>
								https://www.denthusiasts.com
							</p>
							<p>
							- Fully automated research paper summarizer using OpenAI GPT APIs, enabling the creation of blog posts directly from uploaded PDFs, streamlining content generation and enhancing digital publishing efficiency.
							leading to an enthusiest individual getting into a dental school							
							</p>
							<p>
								https://aceairheatingandcooling.ca
							</p>
							<p>
							- more than 5 static website for local bussinesses. Having experience working with wordpress and WIX							
							</p>
							

						</div>
						<div className={career.companyAlt}></div>

						</div>

				</section>
			</Container>
			{/* <Education/> */}

		</Section>

	)
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cpp', name: 'C++', type: 'devicon' },
	{ key: 'ajax', name: 'ajax', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'kotlin', name: 'Kotlin', type: 'devicon' },
	{ key: 'vuejs', name: 'Vuejs', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{key:"angularjs",name:"AngularJS",type:"devicon"},
	{key:"android",name:"Android",type:"devicon"},
	{key:"firebase",name:"Firebase",type:"devicon"},
	{key:"flask",name:"Flask",type:"devicon"}


];