import React from 'react';
import { useQuery } from 'react-query';
import SingleTask from './SingleTask';

const Home = () => {
    const { data: taskLists, isLoading, refetch } = useQuery(['shortTask'], () =>
        fetch(`ToDo.json`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <div>
            <progress class="progress w-56"></progress>
        </div>
    }
    return (
        <div>
            <div>
                <button className='btn btn-accent' >Add New Task</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3' >
                {taskLists?.slice(0, 6).map(taskList => <SingleTask key={taskList._id} taskList={taskList} refetch={refetch}> </SingleTask>)}
            </div>
        </div>
    );
};

export default Home;