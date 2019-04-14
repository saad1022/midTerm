import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Header from './src/components/Header';


class Basic extends Component {
    render () {
        return (
            <ScrollView >
                <Header />
            </ScrollView>
        );
    }
}


export default Basic;