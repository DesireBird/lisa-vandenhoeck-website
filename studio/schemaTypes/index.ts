import {deepdive} from './documents/deepdive'
import {page} from './documents/page'
import {resource} from './documents/resource'
import {siteSettings} from './documents/siteSettings'
import {accessibleImage} from './objects/accessibleImage'
import {blockContent, simpleText} from './objects/blockContent'
import {figure} from './objects/figure'
import {seo} from './objects/seo'

export const schemaTypes = [
  siteSettings,
  deepdive,
  resource,
  page,
  accessibleImage,
  blockContent,
  simpleText,
  figure,
  seo,
]
