import React from 'react';

const SingleTask = ({ taskList, refetch }) => {

    const completeTask = id => {

    }
    const deleteItem = id => {

    }

    return (
        <div className="card w-full md:w-96 bg-base-300 shadow-2xl text-white">
            {!taskList.complete === true && <div className="card-body items-center text-center">
                <h2 className="card-title"> {taskList.name}` </h2>
                <p>{taskList.description}</p>
                <div className="card-actions">
                    <button disabled={taskList.complete === true} onClick={() => { completeTask(taskList._id) }} id='complete' className="btn btn-primary">Complete</button>
                    <button onClick={() => { deleteItem(taskList._id) }} className="btn bg-red-600">Delete</button>
                </div>
            </div>}
        </div>
    );
};

export default SingleTask;