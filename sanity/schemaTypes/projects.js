import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (e.g., AI SaaS Platform)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageColor',
      title: 'Brand Color (Tailwind Class)',
      description: 'e.g., bg-purple-900, bg-emerald-900',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Short Description (Card Subtitle)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // 👇 RICH TEXT EDITOR 👇
    defineField({
      name: 'details',
      title: 'The Challenge / Case Study Content',
      description: 'The long-form story of the project. You can use Headings, Lists, Bold text, and even insert images here.',
      type: 'array',
      of: [
        { type: 'block' }, 
        { 
          type: 'image', 
          options: { hotspot: true } 
        }
      ],
    }),

    defineField({
      name: 'tech',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'link',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Repository URL',
      type: 'url',
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery (Images & Labels)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Screenshot',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'label',
              title: 'Image Label (e.g., Main Dashboard)',
              type: 'string',
            },
            {
              name: 'color',
              title: 'Thumbnail Background Color',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'label',
              media: 'image',
            },
          },
        },
      ],
    }),

    // 👇 NEW SEO FIELDS 👇
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      description: 'Ideal length is 50–60 characters. If left blank, Next.js can fallback to the regular Project Title.',
      type: 'string',
      validation: (Rule) => 
        Rule.max(60).warning('Longer titles may be truncated by search engines like Google.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      description: 'Ideal length is 150–160 characters. If left blank, Next.js can fallback to the short description.',
      type: 'text',
      rows: 3,
      validation: (Rule) => 
        Rule.max(160).warning('Longer descriptions may be truncated by search engines.'),
    }),
    // 👆 END SEO FIELDS 👆
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
})