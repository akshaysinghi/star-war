import React, {useState} from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

function SearchBox({searchPlaceHolder, searchBySearchType}) {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;
        setValue(value);
        searchBySearchType(value)
    };

    return (
        <div className="width-search-box">
            <IconButton style={styles.iconButton}>
                <Search color={white}/>
            </IconButton>
            <TextField
                id="text-field-controlled"
                value={value}
                onChange={handleChange}
                hintText={searchPlaceHolder}
                underlineShow={false}
                fullWidth={true}
                style={styles.textField}
                inputStyle={styles.inputStyle}
                hintStyle={styles.hintStyle}
            />
        </div>
    );
}


const styles = {
    iconButton: {
        float: 'left',
        paddingTop: 17
    },
    textField: {
        color: white,
        backgroundColor: blue500,
    },
    inputStyle: {
        paddingLeft: 5,
        color: white,
    },
    hintStyle: {
        paddingLeft: 5,
        color: white
    }
};

export default SearchBox;
