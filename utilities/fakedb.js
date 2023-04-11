const addToDb = job => {
    let appliedJobList = [];

    const previousList = JSON.parse(localStorage.getItem('applied-jobs'));

    if (previousList) {
        appliedJobList = previousList;
    }

    appliedJobList.push(job);

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobList));
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


const deleteShoppingCart = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJobList,
    deleteShoppingCart
}
