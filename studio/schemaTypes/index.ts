import {deepdive} from './documents/deepdive'
import {designSystem} from './documents/designSystem'
import {dsComponent} from './documents/dsComponent'
import {dsPattern} from './documents/dsPattern'
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
  designSystem,
  dsComponent,
  dsPattern,
  page,
  accessibleImage,
  blockContent,
  simpleText,
  figure,
  seo,
]
