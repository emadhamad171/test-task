import React from 'react';
import Card from '../common/Card';
import {usePost} from "../common/customHooks";

export default function CardList() {
    const [data, setData] = usePost();
    const renderList = data.map((hero, id) => <Card attr={hero} key={id}/>);

    return (
        <>
            <div className="wrapperCard">{renderList}</div>
        </>
    );
}