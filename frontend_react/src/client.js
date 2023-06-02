import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "i0i2oc0z",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skKdIqpd6JAm6jKjbJ6p5dIQFup22i2J8AGCokJ5T0LVrNt8caAGdBGAS0X5Hc4RtdJauAupiuRj8sErqmEDCDxPACt6IfPoCxKZyBd3TGlWjOOX9ZOPxXnQYBHaUsEF4e4nelZ5iegyP9FR8DZfzQwU8d6wbi3dGP6HEok24yZFp46DKvvz",
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
