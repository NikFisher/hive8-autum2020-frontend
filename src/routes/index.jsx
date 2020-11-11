import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from 'components/Loader';

/* Note: Loadable may not work correctly in SSR */
const SomeView = Loadable({
	loader: () => import('containers/SomeView'),
	loading: () => <Loader />
});
const TodoView = Loadable({
	loader: () => import('containers/TodoView'),
	loading: () => <Loader />
});
const ExamplesView = Loadable({
	loader: () => import('containers/ExamplesView'),
	loading: () => <Loader />
});

const EditTaskView = Loadable({
	loader: () => import('containers/EditTaskView'),
	loading: () => <Loader />
});

const CardView = Loadable({
	loader: () => import('containers/CardView'),
	loading: () => <Loader />
});

const CollectionView = Loadable({
	loader: () => import('containers/CollectionView'),
	loading: () => <Loader />
});

const ActivityView = Loadable({
	loader: () => import('containers/ActivityView'),
	loading: () => <Loader />
});

const AllCollections = Loadable({
	loader: () => import('containers/AllCollections'),
	loading: () => <Loader />
});

class Routes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <AllCollections />} />
				<Route exact path="/examples" render={() => <ExamplesView />} />
				<Route exact path="/todos" render={() => <TodoView />} />
				<Route exact path="/edittaskview/:taskid" render={() => <EditTaskView />} />
				<Route exact path="/someview" render={() => <SomeView />} />
				<Route exact path="/collectionview" render={() => <CollectionView />} />
				<Route exact path="/activityview/:activityid" render={() => <ActivityView />} />
				<Route exact path="/collections" render={() => <AllCollections />} />
				<Route exact path="/swipe" render={() => <CardView />} />
				<Route render={() => <Redirect to="/" />} />
			</Switch>
		);
	}
}

// If you want to set a user and pass it down, use the below pattern
// <Route exact path="/" render={() => <SomeView user={this.state.user} />} />

export default withRouter(Routes);
