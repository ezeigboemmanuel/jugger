
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'w3x9wwiy',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);