import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { useEffect, useReducer } from 'react';
import reducer from './reducer/reducer';
import { itinialState } from './reducer/reducer';
import AppContext from './context/context';
import Header from './Components/Header/Header';
import axios from 'axios';
import { getCurrentUser } from './reducer/actions';

function App() {
    const [state, dispatch] = useReducer(reducer, itinialState);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .get('https://whats-the-fox.onrender.com/api/v1/auth', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    dispatch(getCurrentUser(res.data.data.user));
                });
        }
    }, []);
    console.log(state);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Header>
                                    <route.Component></route.Component>
                                </Header>
                            }
                        ></Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
