import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { useEffect, useReducer } from 'react';
import reducer from './reducer/reducer';
import {
    getCurrentUser,
    getAllPost,
    updateOnePost,
    createOnePost,
    deleteOnePost,
} from './reducer/action.js';
import AppContext from './context/context';

const itinialState = {
    user: null,
    posts: [],
};

function App() {
    const [state, dispatch] = useReducer(reducer, itinialState);
    console.log(state);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.Component></route.Component>}
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
