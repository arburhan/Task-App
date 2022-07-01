import React from 'react';

const SingleTask = ({ taskList, refetch }) => {

    const completeTask = e => {
        console.log(e.target.checked)


    }
    const editItem = id => {

    }
    const deleteItem = id => {


    }

    return (
        <>
            {!taskList.complete === true &&
                <div className="card w-full md:w-96 bg-base-300 shadow-2xl text-white">

                    <div className="card-body items-center text-center">
                        <input onChange={completeTask} name='checkbox' type="checkbox" class="checkbox" />
                        <h2 className="card-title"> {taskList.name} </h2>
                        <p>{taskList.description}</p>
                        <div className="card-actions">
                            <button onClick={editItem} className="btn btn-primary">Edit</button>
                            <button onClick={() => { deleteItem(taskList._id) }} className="btn bg-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SingleTask;