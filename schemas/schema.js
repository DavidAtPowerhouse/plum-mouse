// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blogPost from './documents/blogPost'
import animal from './animal'
import article from './documents/article'
import category from './documents/category'
import imageResource from "./documents/imageResource";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blogPost,
    article,
    category,
    imageResource
  ]),
})
