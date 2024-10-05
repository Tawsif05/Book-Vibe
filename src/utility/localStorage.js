const getStoredRead = () => {
    const storedJobApplication = localStorage.getItem('read-books');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveStoredRead = id => {
    const storedRead = getStoredRead();
    const exists = storedRead.find(jobId => jobId === id);
    if (!exists) {
        storedRead.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedRead));
    }
}

export {getStoredRead, saveStoredRead}
