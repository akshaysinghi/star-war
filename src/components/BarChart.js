import React from 'react';
import {white, blue600, grey600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from 'recharts';

const BarCharts = ({data, searchType}) => {
    let searchKey = (searchType === 'people' ? 'mass' : 'population');
    return (
        <div style={styles.container}>

            <div style={{...styles.header}}>
                {searchType.toUpperCase()}<i>( in {searchKey})</i>
            </div>

            <div style={styles.div}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar
                            dataKey={data => isFinite(data[searchKey])
                                ? parseInt(data[searchKey], 0)
                                : 0}
                            fill={blue600}/>
                        <XAxis
                            dataKey={data => data['name'].length < 15
                                ? data['name']
                                : data['name'].substring(0, 11) + '...'}
                            stroke="none"
                            tick={{
                                fill: blue600
                            }}/>
                        <Tooltip cursor={{ stroke: blue600, strokeWidth: 2 }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

const styles = {
    container: {
        backgroundColor: white,
        height: 'auto'
    },
    div: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        height: 400
    },
    header: {
        fontSize: 15,
        fontWeight: typography.fontWeightLight,
        color: grey600,
        padding: 16,
        display: 'block'
    }
};

export default BarCharts;
