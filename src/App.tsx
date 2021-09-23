import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import Home from "pages";
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import TokenSale from 'pages/TokenSale';

function App(): JSX.Element {
	return (
		<Suspense fallback={null}>
		  <Router>
			<SuspenseWithChunkError fallback={<></>}>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/TokenSale'>
						<TokenSale />
					</Route>
				</Switch>
			</SuspenseWithChunkError>
		  </Router>
		</Suspense>
	  )
}

export default App;
