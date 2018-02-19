import createHistory from 'history/createBrowserHistory'
import {History} from "history";

export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';
export const counterHistory = createHistory();
export const goHomePage = (history: History) => {history.push(HOME_ROUTE)};
export const goAboutPage = (history: History) => {history.push(ABOUT_ROUTE)};
