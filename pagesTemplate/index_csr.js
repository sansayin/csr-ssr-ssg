import {Page, getProps} from '../modules/Home';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

const CSR = () => {
    const router = useRouter();
    const [extraProps, setExtraProps] = useState({});

    useEffect(() => {
        getProps(router).then(({props}) => {
            setExtraProps(props);
        }) 
    }, [router]);

    return <Page {...extraProps}/>
}

export default CSR;
