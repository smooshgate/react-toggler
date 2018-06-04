export const stateFromProps = self => {
	return Object.entries(self.props).reduce((final, [name, value]) => {
		if (name === 'children') return final

		self.toggle[name] = () => {
			self._toggleValue(name)
		}

		final[name] = !!value
		return final
	}, {})
}

const noPropsProvided = props => {
	const propsLength = Object.keys(props)
	return 'children' in props ? propsLength <= 1 && true : false
}

export const checkProps = props => {
	const pass = noPropsProvided(props)
	pass && console.warn(PROPS_WARNING)
	return pass
}
