import SanityClient from '@sanity/client';

export default class SanityService {
  _client = SanityClient({
    dataset: 'production',
    projectId: 'ozc58i66',
    useCdn: process.env.NODE_ENV === 'production',
  });

  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
    );
  }

  async getPosts() {
    return await this._client.fetch(`
    *[_type == 'post']{
      title,
      subtitle,
      createdAt,
      'content' : content[]{
        ..., 
        ...select(_type == 'imageGallery' => {'image' :images[]{..., 'ur;': asset-> url} })
      },
      'slug': slug.current,
      'thumbnail' : {
        'alt': thumbnail.alt,
        'imageUrl':thumbnail.asset -> url
      },
      'author' : author -> {
        name,
        role,
        'image' : image.asset -> url
      },
    }`);
  }
}
