import * as R from 'ramda'
import hh from 'hyperscript-helpers'
import { h } from 'virtual-dom'

import { } from './Update'

const { pre } = hh(h)

/* View functions */

const view = (dispatch, model) => {
    return pre(JSON.stringify(model, null, 2))
}

export default view
