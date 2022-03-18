import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Get() {
    const[ origintext, originUpdate ] = useState('먼저 내가 있을게');

    useEffect( async () => { 
        //async가 있을 경우 서버와 통신하는 비동기통신
        const getdata = await axios.get('/getsend')
        originUpdate(getdata)
    }, [] ); //[] 공란인 경우 딱 한번만 돌겠다는 내용

  return (
    <div>{origintext}</div>
  )
}
