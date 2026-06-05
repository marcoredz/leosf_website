/// <reference types="astro/client" />

declare module "*.JPG" {
	const metadata: import("astro").ImageMetadata;
	export default metadata;
}

declare module "*.JPEG" {
	const metadata: import("astro").ImageMetadata;
	export default metadata;
}

declare module "*.PNG" {
	const metadata: import("astro").ImageMetadata;
	export default metadata;
}
