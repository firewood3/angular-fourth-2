import {CustomSort} from './customsort.pipe';
import {Task} from '../model/task';
import {SubTask} from '../model/subTask';

describe('Custom Built-in Pipe: Sort',()=>{
  let pipe: CustomSort;
  let tasks: Task[];

  beforeEach(()=>{
    pipe = new CustomSort();
    tasks = Array.of(
      new Task(3, "t2", Array.of<SubTask>(),"3"),
      new Task(1, "t1", Array.of<SubTask>(),"1"),
      new Task(2, "t2", Array.of<SubTask>(),"2"),
      new Task(4, "t4", Array.of<SubTask>(),"4"),
    );
  });

  it('task 배열 정렬 테스트 케이스', ()=>{
    let expectedTask: Task[] = Array.of(
      new Task(1, "t1", Array.of<SubTask>(),"1"),
      new Task(3, "t2", Array.of<SubTask>(),"3"),
      new Task(2, "t2", Array.of<SubTask>(),"2"),
      new Task(4, "t4", Array.of<SubTask>(),"4")
    );
    expect(pipe.transform(tasks, true)).toEqual(expectedTask);
  });

});
