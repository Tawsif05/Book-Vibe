import { useLoaderData } from "react-router-dom";
import BookClubCard from "../BookClubCard/BookClubCard";


const BookClub = () => {
    const clubs = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                clubs.map(club => <BookClubCard key={club.clubId} club={club}></BookClubCard>)
            }
        </div>
    );
};

export default BookClub;