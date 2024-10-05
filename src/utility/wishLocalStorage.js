const getStoredWish = () =>{
    const wishlist = localStorage.getItem('wish-book');
    if(wishlist){
        return JSON.parse(wishlist);
    }
    return [];
}

const saveStoredWish = (id) => {
    const storedWish = getStoredWish();
    const exists = storedWish.find(wishId => wishId == id);
    if(!exists){
        storedWish.push(id);
        localStorage.setItem('wish-book', JSON.stringify(storedWish));
    }
}

export {getStoredWish, saveStoredWish}