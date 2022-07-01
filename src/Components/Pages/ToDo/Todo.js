import React from 'react';
import { useQuery } from 'react-query';
import SingleTask from '../SingleTask';

const Todo = () => {
    const { data: taskLists, isLoading, refetch } = useQuery(['allTask'], () =>
        fetch(`ToDo.json`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <div>
            <progress class="progress w-56"></progress>
        </div>
    }

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3' >
                {taskLists?.map(taskList => <SingleTask key={taskList._id} taskList={taskList} refetch={refetch}> </SingleTask>)}
            </div>

        </div>
    );
};

export default Todo;