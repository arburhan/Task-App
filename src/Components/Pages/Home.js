import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import SingleTask from './SingleTask';

const Home = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data: taskLists, isLoading, refetch } = useQuery(['shortTask'], () =>
        fetch(`ToDo.json`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <div>
            <progress class="progress w-56"></progress>
        </div>
    }

    const showMore = () => {
        navigate('/toDo')
    }
    const onSubmit = data => {
        console.log(data)
        reset();
    }
    return (
        <div className='py-6'>
            <div className='text-center my-12'>
                <label for="addTaskModal" class="btn modal-button btn-accent">Add New Task</label>
                {/* modal */}
                <input type="checkbox" id="addTaskModal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="addTaskModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg">Add New Task</h3>
                            <div className='form-control w-full max-w-xs mx-auto'>
                                <label className="label">
                                    <span className="label-text">Task Name</span>
                                </label>
                                <input type="text" placeholder="Task Name" className="input input-bordered w-full max-w-xs my-3"  {...register("taskName", {
                                    required: {
                                        value: true,
                                        message: 'Task Name is Required'
                                    },
                                })} />
                                <label className="label">
                                    {errors.taskName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.taskName.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full max-w-xs mx-auto'>
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Task details" {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },
                                })}></textarea>
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            <div className="modal-action justify-center">
                                <input for="addTaskModal" type="submit" value="Add Task" className="btn w-full max-w-xs" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3' >
                    {taskLists?.slice(0, 6).map(taskList => <SingleTask key={taskList._id} taskList={taskList} refetch={refetch}> </SingleTask>)}
                </div>
                <div className='text-center my-4 '>
                    <button onClick={showMore} className='btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg' >Show More</button>
                </div>
            </div>
        </div >
    );
};

export default Home;