import React from 'react'
import {connect, Dispatch} from 'react-redux'
import {InjectedTranslateProps, translate} from 'react-i18next';
import {compose} from 'recompose';
import {BlueButton, RedButton, GreenButton} from 'styledComponents/Btn'
import {History} from 'history';
import actions from 'actions/index'
// import {goAboutPage} from "router/couterRouter";

type IHomeProps = { count: number, dispatch: Dispatch<Function>, history: History } & InjectedTranslateProps;

const Home: React.SFC<IHomeProps> = (props) => (
    <div>
        {props.t("ui.hoge")}
        <h2>Count: {props.count}</h2>
        <div>
            <BlueButton onClick={() => {
                props.dispatch(actions.counter.increment())
            }}>Increment</BlueButton>
            <BlueButton onClick={() => {
                props.dispatch(actions.counter.incrementAsync())
            }}>IncrementAsync</BlueButton>
        </div>
        <div>
            <RedButton onClick={() => {
                props.dispatch(actions.counter.decrement())
            }}>Decrement</RedButton>
            <RedButton onClick={() => {
                props.dispatch(actions.counter.decrementAsync())
            }}>DecrementAsync</RedButton>
        </div>
        <div>
            <GreenButton onClick={() => {
            }}>Go About Page</GreenButton>
        </div>
    </div>
);

const mapStateToProps = (state: any) => (
    {count: state.counter}
);

const mapDispatchToProps = (dispatch: any) => (
    {dispatch: dispatch}
);

export default compose<IHomeProps, {}>(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    translate()
)(Home);