Client send a request to NodeJs server

Request is queued in Event Queue (FIFO)

Now it goes in Event Loop, it watches over Event Queue and will remove request from event queue

When a request is picked from Queue, it could be of two types: 1- Blocking Opeartions/ Sync task , 2- Non-Blocking Operation/ Async Task

If the operation is NonBLocing then the response is sent

IF it is BLocking Operation,
the operation goes to Thread Pool.
Thread Pool has all the threads (workers), these threads are responsible for fulfilling the operation.
If any thread is free, then it is assigned to operation, once the operation is finished it all return the result and the thread will go back to the thread pool.
Now the result is sent back to user as response

By default we have 4 threads in a thread pool.
Thats why coding using Blocking operation has scalability problem

# Can we increse the Size of thread Pool?

Yes, we can increase upto the number of cores we have in our CPU.
