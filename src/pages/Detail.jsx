import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST } from '../graphql/query';
import { useQuery } from '@apollo/client';

const Detail = () => {
    const {id} = useParams()
    const { loading, error, data, refetch } = useQuery(GET_POST, {
        variables: { postId : id },
        //variables: { postId : "" },
        pollInterval: 500,
      });

      console.log("detail", data);
  return (
    <div>
        {id}
        {/*<button onClick={() => refetch({ postId: id })}>
        Refetch new breed!
  </button>*/}
    </div>
  )
}

export default Detail
