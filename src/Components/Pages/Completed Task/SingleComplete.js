import React from 'react';

const SingleComplete = ({ SingleCompleteTask }) => {
    const deleteItem = () => {

    }
    return (
        <>
            {
                SingleCompleteTask.complete === true &&
                <div className="card w-full md:w-96 bg-base-300 shadow-2xl text-white">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> <strike> {SingleCompleteTask.name} </strike> </h2>
                        <p><strike> {SingleCompleteTask.description} </strike></p>
                        <div className="card-actions">
                            <button disabled className="btn btn-primary">Completed</button>
                            <button onClick={() => { deleteItem(SingleCompleteTask._id) }} className="btn bg-red-600">Delete</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SingleComplete;