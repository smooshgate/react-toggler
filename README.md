# @smooshgate/react-toggler

A render-prop component for toggling boolean values.

```js
import Toggler from '@smooshgate/react-toggler'

const App = () => (
	<div>
		<Toggler foo={true} bar={false} baz={false}>
			{(toggle, toggledState) => (
				<React.Fragment>
					<div className="buttons">
						<button onClick={toggle.foo}>toggle foo</button>
						<button onClick={toggle.bar}>toggle bar</button>
						<button onClick={toggle.baz}>toggle baz</button>
					</div>
					<p>foo toggled on: {String(toggledState.foo)}</p>
					<p>bar toggled on: {String(toggledState.bar)}</p>
					<p>baz toggled on: {String(toggledState.baz)}</p>
				</React.Fragment>
			)}
		</Toggle>
	</div>
)
```
