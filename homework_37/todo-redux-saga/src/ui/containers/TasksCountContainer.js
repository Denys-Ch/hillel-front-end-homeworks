import { useSelector } from 'react-redux';
import { taskCount } from '../../engine/core/taskSlice';

export default function TasksCountContainer() {
    const taskCounter = useSelector(taskCount);
    return (
        <div>
            У вас {taskCounter} записей 
        </div>
    );
}