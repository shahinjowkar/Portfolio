
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
						<h3>Open Source Contributor & Full Stack Developer</h3>
									<h4>Permanent Full Time · Present</h4>
							</span>
							<p>
							In my recent role as a Software Engineer, I made significant strides in blockchain technology, Utlizing Hardhat and Mocha, I enhancied software reliability. My expertise also extended to developing a blockchain interface for collaborative investment and decision making, using Ethers.js, React, and Next.js. This development was crucial in enabling direct consent verification between parties through public key cryptography, thereby ensuring secure, transparent, and efficient digital interactions. A pivotal achievement was migrating our application to Next.js 13, which brought about a leaner client-side bundle, faster load times, and an overall boost in performance. Additionally, I automated the generation of tailored DAO interfaces using Sanity CMS API and TypeScript scripts, which facilitated the creation of new Token instances on the blockchain. This comprehensive approach not only advanced our technological capabilities but also fostered a more collaborative and efficient work environment.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						{/* <Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/> */}
						</div>

					{/*	<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
								</span>
								<p>
As a  Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.								</p>
								<p>
								Liber consectetur graece nostra commune. Eam dolores ancillae lobortis noster. Vim posse elit dui theophrastus. Reque atqui corrumpit quam minim quisque. Taciti moderatius graece usu aenean. Agam orci commodo mea sit quam. Mus mazim morbi conclusionemque causae constituto congue sed indoctum. Efficiantur non movet saepe meliore evertitur posidonium vocibus efficitur. Veniam ius epicurei has vitae discere quisque dictumst. Viris pri vituperatoribus inimicus neque petentium erat tibique porttitor. Tacimates auctor in omittam utroque saperet eleifend utroque definitiones. Venenatis mediocritatem recteque consequat fusce debet facilisis. Aperiri nobis erat vivendo morbi falli rutrum ancillae dicant persius. Congue habemus nulla fringilla quaerendum augue mucius ei quam quo. Accumsan cetero ex sapien idque quaestio eget natoque eum ponderum. Interdum mauris eripuit volutpat sententiae. Conubia singulis natoque vestibulum morbi affert epicurei. Mentitum solum duis adolescens persecuti propriae neque agam. Habitasse detraxit mi fabellas voluptaria nunc suscipit. Senserit ea feugait indoctum mi. Vero scripserit quaerendum iriure facilisi his iusto quod. Finibus vulputate eirmod adipisci nullam usu ante quaestio maiorum doctus. Nunc simul suspendisse nisi salutatus error sanctus curabitur invidunt. Falli dolor consul dissentiunt dictumst reformidans delectus qui. Mauris veniam mauris constituto volutpat quidam. Aliquip eruditi senserit atomorum augue moderatius. His reque porttitor senectus etiam sem quam dissentiunt fringilla conclusionemque. Nihil parturient constituto decore voluptatum atqui quod alienum at. Nulla nostrum ad platea scripserit. Commune ubique tractatos sollicitudin doming. Ignota hac persequeris litora accommodare. Conclusionemque augue ignota elitr auctor orci. Sapien lobortis finibus partiendo arcu referrentur. Nostra aenean numquam dolores class aenean viderer. Errem praesent ubique habitasse comprehensam elaboraret. Delectus sapien elementum nec reque. Melius error novum adhuc referrentur dictum. Percipit elit principes placerat repudiandae auctor mollis. Mei reque sollicitudin ferri accommodare civibus quas. Moderatius interdum massa risus graece vero conclusionemque adhuc. Ne cubilia dicit maecenas mollis. Iudicabit numquam definiebas necessitatibus habitant dolorem iisque. Varius corrumpit curae dicat cursus. Scripserit nostra molestiae periculis audire propriae viderer. Etiam expetendis vidisse evertitur signiferumque dicant natum. Causae lectus reformidans tortor amet. Tempor doctus falli vivendo aenean liber magnis mus. Neque delenit quo nisl altera sagittis. Tale consectetuer metus ante elit. Errem vitae mazim mandamus impetus ridiculus aliquam indoctum dicant inimicus.
								</p>
								<ul className={career.list}>
									<li>
										Lorem
										<span className={career.subList}><span className={career.bullet}></span>Lorem</span>
									</li>


								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>
*/}
				</section>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Backend Developer Intern </h3>
									<h4>ThinkingLab – Vancouver, British Colombia</h4>
							</span>
							<p>
								
							working as a backend developer I successfully optimized system efficiency by proposing and implementing a new structure for Amazon RDS, aligned with the designed ER diagram. This initiative notably improved the system's performance and reliability. I also led a team of four in producing a critical report on the backend and frontend functionalities, crucial for the pre-migration phase to a new technology stack, ensuring a seamless transition. My role further extended to enhancing our continuous integration and delivery pipeline, where I effectively utilized Postman for automated testing and deployment, streamlining our processes and bolstering overall system robustness. Demonstrating proficiency in backend development, I developed over ten new endpoints, integrating Infusionsoft and Ottolearn APIs to expand our system's capabilities. Additionally, I resolved a significant OAuth2 Authentication challenge by configuring the OAuth flow and payloads, thereby reinforcing our system's security and authentication mechanisms. These accomplishments underscore my commitment to technical innovation, team leadership, and proactive problem-solving, contributing substantially to the project's success.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						{/* <Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/> */}
						</div>

					{/*	<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
								</span>
								<p>
As a  Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.								</p>
								<p>
								Liber consectetur graece nostra commune. Eam dolores ancillae lobortis noster. Vim posse elit dui theophrastus. Reque atqui corrumpit quam minim quisque. Taciti moderatius graece usu aenean. Agam orci commodo mea sit quam. Mus mazim morbi conclusionemque causae constituto congue sed indoctum. Efficiantur non movet saepe meliore evertitur posidonium vocibus efficitur. Veniam ius epicurei has vitae discere quisque dictumst. Viris pri vituperatoribus inimicus neque petentium erat tibique porttitor. Tacimates auctor in omittam utroque saperet eleifend utroque definitiones. Venenatis mediocritatem recteque consequat fusce debet facilisis. Aperiri nobis erat vivendo morbi falli rutrum ancillae dicant persius. Congue habemus nulla fringilla quaerendum augue mucius ei quam quo. Accumsan cetero ex sapien idque quaestio eget natoque eum ponderum. Interdum mauris eripuit volutpat sententiae. Conubia singulis natoque vestibulum morbi affert epicurei. Mentitum solum duis adolescens persecuti propriae neque agam. Habitasse detraxit mi fabellas voluptaria nunc suscipit. Senserit ea feugait indoctum mi. Vero scripserit quaerendum iriure facilisi his iusto quod. Finibus vulputate eirmod adipisci nullam usu ante quaestio maiorum doctus. Nunc simul suspendisse nisi salutatus error sanctus curabitur invidunt. Falli dolor consul dissentiunt dictumst reformidans delectus qui. Mauris veniam mauris constituto volutpat quidam. Aliquip eruditi senserit atomorum augue moderatius. His reque porttitor senectus etiam sem quam dissentiunt fringilla conclusionemque. Nihil parturient constituto decore voluptatum atqui quod alienum at. Nulla nostrum ad platea scripserit. Commune ubique tractatos sollicitudin doming. Ignota hac persequeris litora accommodare. Conclusionemque augue ignota elitr auctor orci. Sapien lobortis finibus partiendo arcu referrentur. Nostra aenean numquam dolores class aenean viderer. Errem praesent ubique habitasse comprehensam elaboraret. Delectus sapien elementum nec reque. Melius error novum adhuc referrentur dictum. Percipit elit principes placerat repudiandae auctor mollis. Mei reque sollicitudin ferri accommodare civibus quas. Moderatius interdum massa risus graece vero conclusionemque adhuc. Ne cubilia dicit maecenas mollis. Iudicabit numquam definiebas necessitatibus habitant dolorem iisque. Varius corrumpit curae dicat cursus. Scripserit nostra molestiae periculis audire propriae viderer. Etiam expetendis vidisse evertitur signiferumque dicant natum. Causae lectus reformidans tortor amet. Tempor doctus falli vivendo aenean liber magnis mus. Neque delenit quo nisl altera sagittis. Tale consectetuer metus ante elit. Errem vitae mazim mandamus impetus ridiculus aliquam indoctum dicant inimicus.
								</p>
								<ul className={career.list}>
									<li>
										Lorem
										<span className={career.subList}><span className={career.bullet}></span>Lorem</span>
									</li>


								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>
*/}
				</section>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Open Source Contributor & Full Stack Developer</h3>
									<h4>Permanent Full Time · Present</h4>
							</span>
							<p>
								As a Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						{/* <Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/> */}
						</div>

					{/*	<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
								</span>
								<p>
As a  Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.								</p>
								<p>
								Liber consectetur graece nostra commune. Eam dolores ancillae lobortis noster. Vim posse elit dui theophrastus. Reque atqui corrumpit quam minim quisque. Taciti moderatius graece usu aenean. Agam orci commodo mea sit quam. Mus mazim morbi conclusionemque causae constituto congue sed indoctum. Efficiantur non movet saepe meliore evertitur posidonium vocibus efficitur. Veniam ius epicurei has vitae discere quisque dictumst. Viris pri vituperatoribus inimicus neque petentium erat tibique porttitor. Tacimates auctor in omittam utroque saperet eleifend utroque definitiones. Venenatis mediocritatem recteque consequat fusce debet facilisis. Aperiri nobis erat vivendo morbi falli rutrum ancillae dicant persius. Congue habemus nulla fringilla quaerendum augue mucius ei quam quo. Accumsan cetero ex sapien idque quaestio eget natoque eum ponderum. Interdum mauris eripuit volutpat sententiae. Conubia singulis natoque vestibulum morbi affert epicurei. Mentitum solum duis adolescens persecuti propriae neque agam. Habitasse detraxit mi fabellas voluptaria nunc suscipit. Senserit ea feugait indoctum mi. Vero scripserit quaerendum iriure facilisi his iusto quod. Finibus vulputate eirmod adipisci nullam usu ante quaestio maiorum doctus. Nunc simul suspendisse nisi salutatus error sanctus curabitur invidunt. Falli dolor consul dissentiunt dictumst reformidans delectus qui. Mauris veniam mauris constituto volutpat quidam. Aliquip eruditi senserit atomorum augue moderatius. His reque porttitor senectus etiam sem quam dissentiunt fringilla conclusionemque. Nihil parturient constituto decore voluptatum atqui quod alienum at. Nulla nostrum ad platea scripserit. Commune ubique tractatos sollicitudin doming. Ignota hac persequeris litora accommodare. Conclusionemque augue ignota elitr auctor orci. Sapien lobortis finibus partiendo arcu referrentur. Nostra aenean numquam dolores class aenean viderer. Errem praesent ubique habitasse comprehensam elaboraret. Delectus sapien elementum nec reque. Melius error novum adhuc referrentur dictum. Percipit elit principes placerat repudiandae auctor mollis. Mei reque sollicitudin ferri accommodare civibus quas. Moderatius interdum massa risus graece vero conclusionemque adhuc. Ne cubilia dicit maecenas mollis. Iudicabit numquam definiebas necessitatibus habitant dolorem iisque. Varius corrumpit curae dicat cursus. Scripserit nostra molestiae periculis audire propriae viderer. Etiam expetendis vidisse evertitur signiferumque dicant natum. Causae lectus reformidans tortor amet. Tempor doctus falli vivendo aenean liber magnis mus. Neque delenit quo nisl altera sagittis. Tale consectetuer metus ante elit. Errem vitae mazim mandamus impetus ridiculus aliquam indoctum dicant inimicus.
								</p>
								<ul className={career.list}>
									<li>
										Lorem
										<span className={career.subList}><span className={career.bullet}></span>Lorem</span>
									</li>


								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>
*/}
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