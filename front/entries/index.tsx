import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {counterStore} from 'stores/counterStore'
import {counterHistory} from 'router/couterRouter'
import {Router} from "react-router-dom";
import {runCounterSaga} from "sagas/counterSaga";
import i18n from 'i18n/index'
import App from 'containers/app/index'
import { I18nextProvider } from 'react-i18next';

export const renderIndex = () => {
    render(
        <Provider store={counterStore}>
            <I18nextProvider i18n={i18n}>
                <Router history={counterHistory}>
                    <App/>
                </Router>
            </I18nextProvider>
        </Provider>,
        document.querySelector('#root')
    );
    runCounterSaga();
};
