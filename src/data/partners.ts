import ccdgBlack from "../assets/partner/ccdg-black.png";
import comuneLavenoHorBlack from "../assets/partner/comune-laveno-hor-black.png";
import focusBlack from "../assets/partner/focus-black.png";
import noiseBlack from "../assets/partner/noise-black.png";

export const partners = [
	{
		name: "Comune di Laveno Mombello",
		role: "Partner istituzionale",
		logo: comuneLavenoHorBlack,
	},
	{
		name: "Focus",
		role: "Partner media",
		logo: focusBlack,
	},
	{
		name: "CCDG",
		role: "Partner culturale",
		logo: ccdgBlack,
	},
	{
		name: "Noise Radio",
		role: "Partner media",
		logo: noiseBlack,
	}
] as const;
