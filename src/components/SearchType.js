import React, {useState} from 'react';
import {white} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

function SearchType({searchType, setSearchType}) {

    const [searchWord, setSearchWord] = useState(searchType);

    const handleChange = (event, index, value) => {
        setSearchWord(value);
        setSearchType(value)
    };

    return (
        <DropDownMenu
            value={searchWord} onChange={handleChange} labelStyle={styles.textField} style={styles.customWidth}
            autoWidth={true}>
            <MenuItem value={"planets"} primaryText="Planets"/>
            <MenuItem value={"people"} primaryText="People"/>
        </DropDownMenu>
    );
}


const styles = {
    textField: {
        color: white
    },
    customWidth: {
        width: 180,
        color: white,
    },
};

export default SearchType;
