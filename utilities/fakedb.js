import { toast } from "react-toastify";

const addToDb = job => {
    let appliedJobList = [];

    const previousList = JSON.parse(localStorage.getItem('applied-jobs'));

    if (previousList) {
        appliedJobList = previousList;
    }

    // Check if the job already exists in the array
    const jobExists = appliedJobList.some(item => item.id === job.id);

    // Add the job to the array only if it doesn't already exist
    if (jobExists) {
        toast("you have already applied for this job")
    }
    else if (!jobExists) {
        appliedJobList.push(job);
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobList));
        toast('applied job succesfully done');
    }
};




const removeFromDb = id => {
    const appliedJobList = getAppliedJobList();
    if (id in appliedJobList) {
        delete appliedJobList[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJobList));
    }
}


const getAppliedJobList = () => {
    let appliedJobList = [];

    const storedJobs = JSON.parse(localStorage.getItem('applied-jobs'));

    if (storedJobs) {
        appliedJobList = storedJobs;
    }

    return appliedJobList;
};


const deleteAppliedJobList = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobList,
    deleteAppliedJobList
}
