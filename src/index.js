import { PureComponent } from 'react'

import { stateFromProps, checkProps } from './utilities'
import { PROPS_WARNING } from './consts'

export default class Toggle extends PureComponent {
	toggle = {}
  propsPass = checkProps(this.props)

	state = stateFromProps(this)

	_toggleValue = name => {
		// TODO: Add debug option.

		this.setState(state => ({
			[name]: !state[name]
		}))
	}

	render() {
		return this.props.children(this.toggle, this.state)
	}
}
