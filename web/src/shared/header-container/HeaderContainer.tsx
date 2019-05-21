import React from 'react';
import styles from './HeaderContainer.module.scss';

interface Props {
    title: string
}

export default class HeaderContainer extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return <div className={styles.headerContainer}><h1>{this.props.title}</h1></div>;
    }
}