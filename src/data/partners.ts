import ccdgBlack from "../assets/partner/ccdg-black.png";
import comuneLavenoHorBlack from "../assets/partner/comune-laveno-hor-black.png";
import comuneLavenoVerBlack from "../assets/partner/comune-laveno-ver-black.png";
import focusBlack from "../assets/partner/focus-black.png";

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
		name: "Comune di Laveno Mombello",
		role: "Asset verticale",
		logo: comuneLavenoVerBlack,
	},
] as const;
