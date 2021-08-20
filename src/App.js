import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import { connect } from 'react-redux';
import Logout from './components/Logout/Logout';
import { autologin } from './store/actions/auth';


class App extends Component {
  componentDidMount () {
    this.props.autoLogin()
  }
  render() {

  let routers = (
    <Switch>
    <Route path = "/auth" component = {Auth} />
    <Route path = "/quiz/:id" component = {Quiz} />
    <Route path = "/" exact component = {QuizList} />
   </Switch>
  ) 

  if (this.props.isAuthenticated) {
    routers = (
      <Switch>
       <Route path = "/quiz-creator" component = {QuizCreator} />
       <Route path = "/quiz/:id" component = {Quiz} />
       <Route path = "/logout" component = {Logout} />
       <Route path = "/" exact component = {QuizList} />
       <Redirect to = "/" />
      </Switch>
    )
  }
  return (
   <Layout>
      {routers}
   </Layout>
  )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token //если токен есть, то пользователь авторизован
  }
}


function mapDispatchToProps(dispatch) {
    return {
      autoLogin: () => dispatch(autologin())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
