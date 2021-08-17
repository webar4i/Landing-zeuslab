import React from "react";
import theme from "theme";
import { Theme, Link, Button, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			background="#091A2A"
			height="100vh"
			display="block"
			position="static"
			left="100px"
			right="100px"
			padding="15px 100px 0px 100px"
			lg-height="100vh"
		>
			<Box display="flex" justify-content="flex-end" align-items="center" margin="55px 100px 0px 100px">
				<Link
					href="#"
					position="relative"
					right="160px"
					left="auto"
					font="1.1em --fontFamily-googleMontserrat"
					text-decoration-line="initial"
					color="#ffffff"
				>
					hello@zeuslab.ru
				</Link>
				<Link
					href="#"
					position="relative"
					right="80px"
					font="bold 1.2em --fontFamily-googleMontserrat"
					text-decoration-line="initial"
					color="#ffffff"
				>
					+7 922 509 66 99
				</Link>
				<Button
					min-width="250px"
					min-height="55px"
					font="normal bold 16px/1.5 --fontFamily-googleMontserrat"
					background="rgba(255, 255, 255, 0)"
					border-width="3px"
					border-style="solid"
					border-color="#fffb46"
					color="#fffb46"
					hover-background="#fffb46"
					hover-font="normal bold 16px/1.5 "
				>
					Написать мне
				</Button>
			</Box>
			<Box display="flex" justify-content="space-around" align-items="center" margin="100px 0px 0px 0px">
				<Box display="flex" justify-content="space-between" width="auto" min-width="90%">
					<Box
						width="100% border-box"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
					>
						<Text font="bold 3em --fontFamily-googleMontserrat" color="#ffffff">
							Дизайн{" "}
							<br />
							и разработка сайтов,{" "}
							<br />
							лендингов, чат-ботов{" \n\n"}
						</Text>
						<Text font="300 1em --fontFamily-googleMontserrat" color="#ffffff">
							Использую no-code технологии для более быстрого запуска продукта{"\n\n"}
						</Text>
						<Button
							min-width="250px"
							min-height="55px"
							font="normal bold 16px/1.5 --fontFamily-googleMontserrat"
							background="rgba(255, 255, 255, 0)"
							border-width="3px"
							border-style="solid"
							border-color="#fffb46"
							color="#fffb46"
							margin="20px 0px 0px 0px"
						>
							Написать мне
						</Button>
						<Components.QuarklycommunityKitPopup />
					</Box>
					<Box margin="0px 0px 0px 150px" position="static">
						<Components.QuarklycommunityKitLottie width="fit-content" height="fit-content" path="https://assets5.lottiefiles.com/private_files/lf30_bepttnwn.json" />
					</Box>
				</Box>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"611bfed51f4350001e456a87"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});