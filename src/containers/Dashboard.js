import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import Snackbar from 'material-ui/Snackbar';
import {onSearch} from '../utils/api-service';
import {isSignedIn} from '../utils/auth';
import {browserHistory} from 'react-router';
import {RateLimiter} from 'limiter';

var limiter = new RateLimiter(15, 'minute', true);

function Dashboard() {
    const [searchType, setSearchType] = useState('planets');
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        isSignedIn().then(res => {
        }).catch(err => {
            browserHistory.push('/')
        });
    });


    const selectSearchType = (selected) => {
        let msg = "Search type changed to " + selected;
        setSearchType(selected);
        setData([]);
        setOpen(true);
        setMessage(msg);
    }

    const searchBySearchType = (query) => {
        let formatType = '&format=json';
        if (query) {
            limiter.removeTokens(1, function (err, remainingRequests) {
                if (remainingRequests < 1) {
                    setMessage('Easy on the gas, buddy. Too many requests. Try again after 1 minute');
                    setOpen(true);
                    return setData([]);
                } else {
                    onSearch(query, searchType, formatType).then(response => {
                        let responseData = response.results;
                        responseData.length > 0 ? setDataValues('', false, responseData) : setDataValues('No results, your search did not match any fields.', true, []);
                        return;
                    }).catch(err => {
                        setDataValues(err.toString(), true, []);
                    });
                }

            });

        } else {
            setData([]);
        }
    };

    const setDataValues = (message, open, results) => {
        setMessage(message);
        setOpen(open);
        setData(results);
    };

    return (
        <div>
            <Header
                searchBySearchType={searchBySearchType}
                searchPlaceHolder={"Search " + searchType}
                setSearchType={selectSearchType}
            />
            <BarChart
                searchType={searchType}
                data={data}/>
            <Snackbar
                open={open}
                message={message}
                autoHideDuration={4000}/>
        </div>
    );


}

export default Dashboard;
