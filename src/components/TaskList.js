import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks, reset } from '../features/tasks/taskSlice'
import TaskItem from './TaskItem'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log('rrrrrr')
    console.warn('ttttttt')
    useSelector(state => state.tasks)
    const state = useSelector((state) => state);
  console.log('State:', state);
  console.log('State:', state.task);
  console.log('State:', state.task.tasks);
    console.warn('ttttttt111111')
    const { tasks, isLoading, isError, message } = useSelector(state => state.task)
    console.log(tasks)
    console.log('rrrrrr22222')
    console.warn('ttttttt22222')
    useEffect(() => {
        if (isError) console.log(message)
        dispatch(getTasks())
        return () => dispatch(reset())
    }, [navigate, isError, message, dispatch])

    return (
        isLoading ? <Spinner /> : (
            <section className='content'>
                {tasks.length > 0 && (
                    <div className='tasks'>
                        {tasks.map(task => <TaskItem key={task._id} task={task} />)}
                    </div>
                )}
            </section>
        )
    )
}

export default TaskList