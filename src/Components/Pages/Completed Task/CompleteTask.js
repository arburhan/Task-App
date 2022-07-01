import React from 'react';
import { useQuery } from 'react-query';
import SingleComplete from './SingleComplete';

const CompleteTask = () => {
    const { data: taskLists, isLoading, refetch } = useQuery(['completedTask'], () =>
        fetch(`ToDo.json`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <div>
            <progress class="progress w-56"></progress>
        </div>
    }

    return (
        <div className='my-12' >
            <div className='mx-5'>
                {
                    taskLists.map(SingleCompleteTask => <SingleComplete key={SingleCompleteTask._id} SingleCompleteTask={SingleCompleteTask} refetch={refetch} > </SingleComplete>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;