
// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'
import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
			<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="As a Computer Science student, I specialize in end-to-end software development with a focus on web application development through freelancing. My experience extends to blockchain technology, where I've gained significant exposure to various development protocols. Additionally, I've contributed as a Product Manager in several projects, blending technical expertise with strategic project oversight. This journey has sharpened my skills in delivering comprehensive tech solutions, driving project success, and staying at the forefront of technological innovation.
					"
				/>
			<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="SASS and web Solutins"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="As an engineer, there is no greater satisfaction than solving problems for businesses, big or small. This passion led me to become the pioneer of Falcon Web Solutions, focusing on offering tailored web solutions to small and large businesses, as well as startups, based on their unique needs and objectives. Our services include AI integrations such as chatbots and summarization tools, website optimization, SEO, feature implementation, website development, and marketing leveraged by data analysis and advanced AI tools."
						/>
						<CopyBlock
							title="AI Blog"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'book']}
							copy="It is essential to stay abreast of the most recent technological advancements.Join me on this enlightening journey by following the article sections."
						/>



						<BadgesBlock
							title="Research and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="fingerprint"
							copy="One of the most exhilarating aspects of my creative process is conducting in-depth research and meticulous planning for development projects. From Design Systems to Brand Strategy, I relish the opportunity to explore various touchpoints of user experience. Constantly seeking to expand my knowledge and skills, I immerse myself in research to stay ahead of industry trends. By strategically planning and executing projects, I aim to create exceptional digital experiences that exceed expectations and deliver measurable results."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`} invertedColor={undefined}						/>
					</div>
				</section>
				
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/alternative.png" width={600} height={800}  alt="shahin" loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Development and Projects"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'code']}
							copy="Development and project execution are my passion. I thrive on the challenges of bringing ideas to life through coding and turning concepts into functional, robust solutions. With meticulous planning, efficient workflows, and a keen eye for detail, I ensure successful project delivery, meeting objectives and exceeding expectations."
						/>
						<CopyBlock
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'user' ]}
							copy="With a solid background in design and technical expertise, I am a skilled developer who excels in delivering high-quality solutions. Alongside my proficiency in coding, I possess strong leadership, time management, and multitasking skills, which I have honed through managing complex development projects. As a dedicated individual, I constantly seek opportunities to expand my knowledge and stay updated with the latest industry trends. With a passion for creating innovative and efficient applications, I am committed to bringing value and success to every development endeavor."
						/>
						
					</div>
				</section>
				
			</Container>
		</Section>
	)
}
const methods = [
	{ key: 'machinelearning', name: 'Machine Learning', type: 'fad', icon: 'devicon' },
	{ key: 'artificialintelligence', name: 'Artificial Intelligence', type: 'fad', icon: 'devicon' },
	{ key: 'deeplearning', name: 'Deep Learning', type: 'fad', icon: 'devicon' },
	{ key: 'neuralnetworks', name: 'Neural Networks', type: 'fad', icon: 'devicon' },

];
